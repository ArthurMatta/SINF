import axios from 'axios'
const API_URL = 'http://localhost:2018/WebApi';
export class APIService {
  constructor(){}

  gettoken(){
    const qs = require('qs');
    const data = {
      'username': 'FEUP' ,
      'password' : 'qualquer1' ,
      'instance' : 'DEFAULT' ,
      'grant_type' : 'password' ,
      'line' : 'professional'};
    const url = "http://localhost:2018/WebApi/token";
    const headers = { 'content-type': 'application/x-www-form-urlencoded' }
    axios.post(url, qs.stringify(data),headers).then(response => (localStorage.token = response.data['access_token']));

  }
}
