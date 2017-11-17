var https = require('https');

module.exports = function(q, cb){
	let body = "";
  https.get("https://api.mercadolibre.com/sites/MLA/search?q="+q, (res) => {
		console.info("api.mercadolibre.request...");
		console.log('statusCode:', res.statusCode);

    res.on('data', (data) => {
      body +=data;
    });

    res.on('end', () => {
      var json = JSON.parse(body);
      cb.send({'json': json});
    });

  }).on('error', (e) => {
    console.error(e);
  });
}
