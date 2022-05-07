import axios from "axios";
import qs from "qs";
import store from '@/store';

export default {
  instance: axios.create({
    baseURL: "http://localhost:8080",
    timeout: 1000,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      'Authorization': 'Bearer ' + store.state.user.token
    },
  }),
  createBook(datas){
    datas =  qs.stringify(datas);
    return this.instance.post('/book/new', datas);
  },
  getAllBooks(){
    return this.instance.get('/books');
  },
  getOneBook(id){
    return this.instance.get(`/book/${id}`)
  }
};
