/**
 * Created by 13006 on 2017/8/16.
 */
import  axios from 'axios'
axios.defaults.withCredentials = true;
const host = 'http://192.168.107.99:8003';
const GMTtimestamp = ISODateString(new Date());
export function getAccessToken() {
  var Config = {
    method: 'get',
    url: host + '/oapi/getToken',
    withCredentials: true,
    params: {
      timestamp: GMTtimestamp,
      appid: 'backlogApp',
      appsecret: 'backlogApp'
    }
  };
  return new Promise(function (resolve) {
    axios(Config).then(function (response) {
      resolve(response);
    }).catch(function (error) {
    });
  })
}
export function ISODateString(d) {
  function pad(n) {
    return n < 10 ? '0' + n : n
  }

  return d.getUTCFullYear() + '-'
    + pad(d.getUTCMonth() + 1) + '-'
    + pad(d.getUTCDate()) + 'T'
    + pad(d.getUTCHours()) + ':'
    + pad(d.getUTCMinutes()) + ':'
    + pad(d.getUTCSeconds()) + 'Z'
}

export default {
  getAccessToken,
  ISODateString
}
