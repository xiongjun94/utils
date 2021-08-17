import { validateNull } from '@/check/validate';

/**
 * 存储localStorage
 */
export const setStore = (params = {}) => {
  const { name } = params;
  const { content, type } = params;
  const obj = {
    dataType: typeof (content),
    content,
    type,
    datetime: new Date().getTime()
  };
  if (type) window.sessionStorage.setItem(name, JSON.stringify(obj));
  else window.localStorage.setItem(name, JSON.stringify(obj));
};

/**
 * 获取localStorage
 */
export const getStore = (params = {}) => {
  const { name } = params;
  const { debug } = params;
  let obj = {};
  let content;
  obj = window.sessionStorage.getItem(name);
  if (validateNull(obj)) obj = window.localStorage.getItem(name);
  if (validateNull(obj)) return;
  try {
    obj = JSON.parse(obj);
  } catch (e) {
    return obj;
  }
  if (debug) {
    return obj;
  }
  if (obj.dataType === 'string') {
    content = obj.content;
  } else if (obj.dataType === 'number') {
    content = Number(obj.content);
  } else if (obj.dataType === 'boolean') {
    // eslint-disable-next-line no-eval
    content = eval(obj.content);
  } else if (obj.dataType === 'object') {
    content = obj.content;
  }
  return content;
};

/**
 * 删除localStorage
 */
export const removeStore = (params = {}) => {
  const { name } = params;
  const { type } = params;
  if (type) {
    window.sessionStorage.removeItem(name);
  } else {
    window.localStorage.removeItem(name);
  }
};

/**
 * 获取全部localStorage
 */
export const getAllStore = (params = {}) => {
  const list = [];
  const {
    type
  } = params;
  if (type) {
    for (let i = 0; i <= window.sessionStorage.length; i++) {
      list.push({
        name: window.sessionStorage.key(i),
        content: getStore({
          name: window.sessionStorage.key(i),
          type: 'session'
        })
      });
    }
  } else {
    for (let i = 0; i <= window.localStorage.length; i++) {
      list.push({
        name: window.localStorage.key(i),
        content: getStore({
          name: window.localStorage.key(i)
        })
      });
    }
  }
  return list;
};

/**
 * 清空全部localStorage
 */
export const clearStore = (params = {}) => {
  const { type } = params;
  if (type) {
    window.sessionStorage.clear();
  } else {
    window.localStorage.clear();
  }
};
