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
    return this.instance.post('/book/new', datas, { 'headers': { 'Authorization': 'Bearer ' + store.state.user.token }});
  },
  getAllBooks(){
    return this.instance.get('/books',  { 'headers': { 'Authorization': 'Bearer ' + store.state.user.token }});
  },
  getOneBook(id){
    return this.instance.get(`/book/${id}`)
  },
  getByAuthor(id){
    return this.instance.get(`books/${id}`)
  },
  deleteBook(id){
    return this.instance.delete(`book/${id}`)
  }
};
