/**
 * Created by 13006 on 2017/8/16.
 */
import  axios from 'axios'
axios.defaults.withCredentials = true;
const host = 'http://192.168.107.102:8003';
const timestamp = new Date();
var hour = timestamp.getHours();
timestamp.setHours(hour - 8);
document.write(timestamp);
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
export default {
  getAccessToken,
}
