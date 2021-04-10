/*
* 用于常见的 query 参数获取
* */
export function getQueryVariable(variable) {
  const query = window.location.search.substring(1);
  const vars = query.split("&");
  for (let i=0;i<vars.length;i++) {
    const pair = vars[i].split("=");
    if(pair[0] === variable){return pair[1];}
  }
  return false
}

/*
* 活动专用
* */
export function getToken() {
  return decodeURIComponent(window.location.search.substring(1).replace('token=', ''))
}
