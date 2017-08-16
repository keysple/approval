/**
 * Created by 13006 on 2017/8/16.
 */
import  axios from 'axios'  
axios.defaults.withCredentials = true;
const host = 'http://192.168.107.102:8003';
const timestamp = ISODateString(new Date());
//const timestamp=new Date().getUTCHours();
console.log(timestamp)
export function getAccessToken() {
  var Config = {
    method: 'get',
    url: host + '/oapi/getToken',
    withCredentials: true,
    params: {
      timestamp: timestamp,
      appid: 'backlogApp',
      appsecret: 'backlogApp'
    }
  };
  return new Promise(function (resolve) {
    axios(Config).then(function (response) {
      resolve(response);
      console.log(response.data);
    }).catch(function (error) {
    });
  })
}
 function ISODateString(d){  
  function pad(n) { return n < 10 ? '0'+n : n }
  return d.getUTCFullYear() + '-'  
       + pad(d.getUTCMonth() +1) + '-'  
       + pad(d.getUTCDate()) + 'T'  
       + pad(d.getUTCHours()) + ':'  
       + pad(d.getUTCMinutes()) + ':'  
       + pad(d.getUTCSeconds()) + 'Z'  
};

export default {
  getAccessToken,
}
