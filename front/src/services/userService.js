import axios from 'axios';
import qs from 'qs';


export default {
    instance:  axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 1000,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', 
    }
      }),
    getBetaReader(id){
        return this.instance.get(`/beta-reader/${id}`)
    },
    getAuthor(id){
        return this.instance.get(`/author/${id}`)
    },
    registerAuthor(data) {
        data =  qs.stringify(data);
        return this.instance.post('/author/register', data );
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
        return this.instance.patch(`/author/${id}`, data)
    },
    modifyBetaReader(id, data){
        data = qs.stringify(data);
        return this.instance.patch(`/beta-reader/${id}`, data)
    },
    modifyUser(id, data){
        data = qs.stringify(data);
        return this.instance.patch(`/user/${id}`, data)
    }
}
