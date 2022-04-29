import axios from 'axios';
import qs from 'qs';
import store from '@/store';

//const token = store.state.user.token;

export default {
    instance:  axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 1000,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', 
            // 'Authorization': 'Bearer ' + token, 
            //'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,PATCH OPTIONS',
            // 'Access-Control-Allow-Origin' : '*'
    }
      }),
    getBetaReader(id){
        return this.instance.get(`/beta-reader/${id}`,  { 'headers': { 'Authorization': 'Bearer ' + store.state.user.token }})
    },
    getAllBetaReader(){
        console.log('ici')
        return this.instance.get(`/beta-readers`);
    },
    getAuthor(id){
        return this.instance.get(`/author/${id}`,  { 'headers': { 'Authorization': 'Bearer ' + store.state.user.token }})
    },
    registerAuthor(data) {
        data =  qs.stringify(data);
        return this.instance.post('/author/register', data);
    },
    registerBetaReader(data){
        data =  qs.stringify(data);
        return this.instance.post('/beta-reader/register', data)
    },
    login(data){
        data =  qs.stringify(data);
        return this.instance.post('/login', data)
    },
    modifyAuthor(id, data){
        data = qs.stringify(data);
        return this.instance.patch(`/author/${id}`, data,  { 'headers': { 'Authorization': 'Bearer ' + store.state.user.token }})
    },
    modifyBetaReader(id, data){
        data = qs.stringify(data);
        return this.instance.patch(`/beta-reader/${id}`, data,  { 'headers': { 'Authorization': 'Bearer ' + store.state.user.token }})
    },
    modifyUser(id, data){
       data = qs.stringify(data);
        console.log(data)
        return this.instance.patch(`/user/${id}`, data,  { 'headers': { 'Authorization': 'Bearer ' + store.state.user.token }})
    },
    deleteBetaReader(id){
        return this.instance.delete(`http://localhost:8080/beta-reader/${id}`, { 'headers': { 'Authorization': 'Bearer ' + store.state.user.token }})
    },
    deleteAuthor(id){
        return this.instance.delete(`http://localhost:8080/author/${id}`,  { 'headers': { 'Authorization': 'Bearer ' + store.state.user.token }})
    },

}

