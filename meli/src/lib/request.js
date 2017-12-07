import axios from 'axios';
import Util from 'util';
// import { denormalize, schema } from 'normalizr';

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
        return response.data;
    })
    .catch(error => {
        console.log(error);
      });
  }
}

export default Request;
