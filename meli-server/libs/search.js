const https = require('https');
const util = require('./util');
const Util = new util();

module.exports = function(conf, q, cb){
	const rows = 4;
	let body = "";
  https.get(`${conf.urlApiSearch}${q}`, (res) => {
		console.info("api.mercadolibre.request...");
		console.log('statusCode:', res.statusCode);

    res.on('data', (data) => {
      body +=data;
    });

    res.on('end', () => {
      const json = JSON.parse(body);
			Util.formatQueryResult(conf.author, json, rows, (results) => {
				console.info(results);
				cb.send(results);
			});
    });

  }).on('error', (e) => {
    console.error(e);
  });
}
