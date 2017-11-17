import { denormalize, schema } from 'normalizr';

console.log('iniciando util..');

const Util = (res) => {
  console.log('Llamada a Util:', res);
  return new Promise( (resolve, reject)=>{



  const item = new schema.Entity('items');
  const mySchema = { items: [ item ] }
  const entities = { items: res.data.json.results };
  // const entities = { items: { '1': { id: 1 }, '2': { id: 2 } } };
  const denormalizedData = denormalize({ items: [ 1, 2, 3, 4 ] }, mySchema, entities);
  console.log('denormalizedData: ', denormalize);
  resolve(denormalizedData);
    });
}

export default Util;
/*
{“author”:
  {“name”:String
  “lastname”:String},
  categories:[String,String,String,...],
  items:[{"id":String,
    "title":String,
    "price":{"currency":String,"amount":Number,"decimals":Number},
    “picture”:String,
    "condition":String,
    "free_shipping":Boolean},
    {...},{...},{...}]}
*/
