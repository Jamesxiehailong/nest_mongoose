//时间还原成毫秒
export function dateRes(date:String){
  var changeTime =  date.replace(new RegExp("-","gm"),"/");
  return  new Date(changeTime);
}
