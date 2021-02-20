/**
 *  设置cookie
 */
export function setCookie(name, value, day) {
  let strCookie = '';
  if (name && value) {
    strCookie = `${window.encodeURLComponent(name)}=${window.encodeURLComponent(value)};`;
  }
  if (typeof day === 'number') {
    const date = new Date();
    date.setDate(date.getDate() + day);
    strCookie += `expires=${date.toUTCString()};`;
  }
  document.cookie = strCookie;
  return document.cookie;
}

/**
 *  获取cookie
 */
export function getCookie(name) {
  const cookieStr = window.decodeURLComponent(document.cookie);
  const arr1 = cookieStr.split(';');
  for (let i = 0; i < arr1.length; i++) {
    const arr2 = arr1[i].split('=');
    if (arr2[0].trim() === name) {
      return arr2[1];
    }
  }
}

/**
 *  删除cookie
 */
export function delCookie(name) {
  setCookie(name, 1, -1);
}
