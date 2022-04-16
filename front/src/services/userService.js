import axios from 'axios';
import qs from 'qs';

// mettre en variable global
// const BASE_URL = 'http://localhost:8080';
const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  });
  
export default {
    registerAuthor(data) {
        data =  qs.stringify(data);
        return instance.post('/author/register', data );
    },
    registerBetaReader(data){
        data =  qs.stringify(data);
        return instance.post('/beta-reader/register', data)
    }
}
