// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 8000;
const search = require('./libs/search');
const detail = require('./libs/detail');
const conf = {
  urlApiSearch: 'https://api.mercadolibre.com/sites/MLA/search?q=',
  urlApiDetail: 'https://api.mercadolibre.com/items/',
  author: {name: 'Bruno', lastname: 'Seguer'},
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/api/items', (req, res)=>{
  const q = req.query.q || "";
  console.log('api/items: ', q);
  search(conf, q, res);
});

app.get('/api/items/:id', (req, res)=>{
  const param = req.params.id || "";
  detail(conf, param, res);
});

app.listen(3000, (err) => {
  err ? console.log('error') : console.log('listen on *:3000');
});
