const https = require('https');
const util = require('./util');
const Util = new util();

// const apirUrl = 'https://api.mercadolibre.com/items/';
// const author = {name: 'Bruno', lastname: 'Seguer'};

module.exports = function(conf, param, cb){
	const rows = 4;
	const urlId = `${conf.urlApiDetail}${param}`;
  const urlDesc = `${conf.urlApiDetail}${param}/description`;

	const apiCall = (url) => {
		return new Promise((resolve, reject) => {
			let body = '';
			https.get(url, (res) => {

				res.on('data', (data) => {
					body +=data;
				});

				res.on('end', () => {
					const json = JSON.parse(body);
					console.info('Calling: ',url);
					resolve(json);
				});

			}).on('error', (e) => {
				reject(e);
			});
		})
	}

	Promise.all([ apiCall(urlId), apiCall(urlDesc) ])
	.then(json => {
		Util.formatDetailResult(conf.author,json, (results) => {
			cb.send(results);
		});
	})
	.catch(e => console.log(e));
}
