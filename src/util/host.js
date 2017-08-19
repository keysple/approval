/**
 * Created by 13006 on 2017/8/16.
 */
export const host='http://192.168.107.99:8003';
export  const timestamp = ISODateString(new Date());
/*href= location.href*/

export const  userid=location.href.split('=')[1];
console.log(userid)
function ISODateString(d){
  function pad(n) { return n < 10 ? '0'+n : n }
  return d.getUTCFullYear() + '-'
    + pad(d.getUTCMonth() +1) + '-'
    + pad(d.getUTCDate()) + 'T'
    + pad(d.getUTCHours()) + ':'
    + pad(d.getUTCMinutes()) + ':'
    + pad(d.getUTCSeconds()) + 'Z'
};
