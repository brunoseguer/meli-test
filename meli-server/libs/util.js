module.exports = function() {
    this.formatQueryResult = function(author, json, count, cb) {
      const output = {};
      const results = json.results;
      const items = [];
      const loop = (results.length > 0 && results.length > count) ? count : results.length;

      for(let x = 0; x < loop; x++) {
        const priceArr = results[x].price.toString().split('.');
        item = {};
        item.id = results[x].id;
        item.title = results[x].title;
        item.price = {
          currency: results[x].currency_id,
          amount: parseInt(priceArr[0]) || 0,
          decimals: parseInt(priceArr[1]) || 0,
        };
        item.picture = results[x].thumbnail;
        item.condition = results[x].condition;
        item.free_shipping = results[x].shipping.free_shipping;
        items.push(item);
      }
      output.author = { name: author.name, lastname: author.lastname };
      output.categories = json.available_filters.filter(i => i.id === 'category')[0].values.map( c => c.name);
      output.items = items;
      cb(output);
  }

  this.formatDetailResult = function(author, json, cb) {
    console.log('formatDetailResult: ', json);
    const output = {};
    const resultId = json[0];
    const resultDetail = json[1];
    const priceArr = resultId.price.toString().split('.');

    output.author = { name: author.name, lastname: author.lastname };
    output.item = {
      id: resultId.id,
      title: resultId.title,
      price: {
        currency: resultId.currency_id,
        amount: parseInt(priceArr[0]) || 0,
        decimals: parseInt(priceArr[1]) || 0,
      },
      picture: resultId.pictures[0].url,
      condition: resultId.condition,
      free_shipping: resultId.shipping.free_shipping,
      sold_quantity: resultId.sold_quantity,
      description: resultDetail.plain_text,
    }
    cb(output);
    // cb(json);
  };
}
