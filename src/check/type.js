/**
 * 判断基本数据类型
 */
export const isNumber = (val) => typeof val === 'number' && !Number.isNaN(val);

export const isString = (val) => typeof val === 'string';

export const isBoolean = (val) => typeof val === 'boolean';

export const isSymbol = (val) => typeof val === 'symbol';

export const isTrue = (val) => val === true;

export const isFalse = (val) => val === false;

export const isNull = (val) => val === null;

export const isUndefined = (val) => val === undefined;

export const isNil = (val) => isUndefined(val) || isNull(val);

export const isDefined = (val) => !isUndefined(val) && !isNull(val);

/**
 * 判断引用数据类型
 */
export const isObject = (val) => !!val && typeof val === 'object' && val.constructor === Object;

export const isArray = (val) => {
  if (Array.isArray) {
    return Array.isArray(val);
  }
  return Object.prototype.toString.call(val) === '[object Array]';
};

export const isFunction = (val) => typeof val === 'function';

/**
 * 获取数据类型
 */
export function getDataType(obj) {
  if (obj && obj.constructor && obj.constructor.name) {
    return obj.constructor.name;
  }
  return Object.prototype.toString
    .call(obj)
    .replace(/^\[object (.+)\]$/, '$1')
    .toLowerCase();
}
