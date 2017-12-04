import axios from 'axios';
import Util from 'util';
import { denormalize, schema } from 'normalizr';

const path = 'http://localhost:3000/api/items';

class Request {
  get(query) {
    return axios.get(path, {
      params: {
        q: JSON.stringify(query),
      }
    })
      .then(response => {
        console.log('Response: ',response);
        // const item = new schema.Entity('items');
        // const mySchema = { items: [ item ] }
        // const entities = { items: response.data.json.results };
        // const denormalizedData = denormalize({ items: [ 0, 1, 2, 3 ] }, mySchema, entities);
        // console.log('denormalizedData: ', denormalizedData);
        return response;
    })
    .catch(error => {
        console.log(error);
      });
  }
}

export default Request;
