import axios from "axios";
import store from '@/store';
import qs from "qs";

export default {
  instance: axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      'Authorization': 'Bearer ' + store.state.user.token
    },
  }),

  getDiscussion(data){
    return this.instance.get(`/messages/${data.user_id}` , { 'params': data});
  },
  sendMessage(data){
   
    data =  qs.stringify(data); 
    console.log(data, '<--- SERVICE')
    return this.instance.post('message', data)
  }

};
