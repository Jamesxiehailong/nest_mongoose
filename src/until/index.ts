/*
 * @Author: 谢海龙 / Jamesxiehailong 
 * @Date: 2018-08-15 11:07:28 
 * @Last Modified by:   Jamesxiehailong 
 * @Last Modified time: 2018-08-15 11:07:28 
 */

//时间还原成毫秒
export function dateRes(date:String){
  var changeTime =  date.replace(new RegExp("-","gm"),"/");
  return  new Date(changeTime);
}
