 export default function (param) {
  var reg = new RegExp("(^|&)" + param.name + "=([^&]*)(&|$)");
  var url = param.url || window.location.href;
  var aEle = document.createElement('a');
  aEle.href = url;
  var r = aEle.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); 
  return null;
}