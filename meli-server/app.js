// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
// const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
const search = require('./libs/search');

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
  console.log('search :', req.query.q);
  const q = req.query.q || "";
  search(q, res);
});

app.listen(3000, (err)=>{
  err ? console.log('error') : console.log('listen on *:3000');
});

// app.put('/todo', (req, res)=>{
//   console.log('llamada a PUT API');
//
//   let schema = {
//     title: req.body.title,
//     id: req.body.id,
//     completed: req.body.completed,
//     todos: req.body.todos,
//   };
//
//   db.todo.insert(schema, (err, docs)=>{
//     err ? res.json({error: err, data: null}) : res.json({error: null, data: docs});
//   });
//
// });
//
// app.patch('/todo', (req, res)=>{
//   let schema ={
//     title: req.body.title,
//     id: req.body.id,
//     completed: req.body.completed,
//     todos: req.body.todos,
//   };
//
//   db.todo.update({id: schema.id}, {$set: schema}, (err, doc)=>{
//     err ? res.json({error: err, data: null}) : res.json({error: null, data: doc});
//   });
// });
//
// app.delete('/todo', (req, res)=>{
//   db.todo.remove({id: req.query.id},{multi: true}, (err, doc)=>{
//     err ? res.json({error: err, data: null}) : res.json({error: null, data: doc});
//   });
// });

// server.listen(PORT, err=>{
//   console.log('listen on *:',PORT);
// });




//For update
// var updateDoc = function(doc, i) {
//   db.todo.update( {_id:db.ObjectId(doc._id)}, {$set:{id:i}}, (err, doc)=> {
//         if(err) console.log("updateDoc function error: ",err); //res.json({error: err, data: null}) : res.json({error: null, data: doc});
//   });
// }

// app.get('/todoUpdate', (req, res)=>{
//     let id = 0;
//     var data = '';
//     console.log('llamada a GET UPDATE de la API');
//     db.todo.find({},{}, (err, docs)=> {
//       if(err) {
//         // console.log('Error >', err);
//         res.json(err);
//       }
//
//       // console.log(docs);
//       for (let i = 0; i < docs.length; i++) {
//         updateDoc(docs[i], i);
//       }
//       res.json(docs);
//     });
// });
