import axios from 'axios'
const API_URL = 'http://localhost:2018/WebApi';
export class APIService {
  token,
  constructor(){}

  gettoken(){
    const qs = require('qs');
    const data = {
      'username': 'FEUP' ,
      'password' : 'qualquer1' ,
      'instance' : 'DEFAULT' ,
      'grant_type' : 'password' ,
      'line' : 'professional'};
    var url = "http://localhost:2018/WebApi/token" ;

    const options = {
      method: 'POST',

      data: qs.stringify(data),
    };
    const headers = { 'content-type': 'application/x-www-form-urlencoded' }
    axios.post(url, qs.stringify(data),headers).then(response => (this.token= response.data['access_token']));
    console.log(token);

  }
}
