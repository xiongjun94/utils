/**
 * 防抖
 * @param {Function} func 延迟执行的函数
 * @param {Number} wait 延迟执行毫秒数
 * @param {Boolean} immediate true 表立即执行，false 表非立即执行
 */
export function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
}

/**
 * 节流
 * @param {Function} func 函数
 * @param {Number} wait 延迟执行毫秒数
 * @param {Number} type 1 表时间戳版，2 表定时器版
 */
export function throttle(func, wait, type) {
  let previous;
  let timeout;
  if (type === 1) {
    previous = 0;
  } else if (type === 2) {
    timeout = null;
  }
  return function() {
    const context = this;
    const args = arguments;
    if (type === 1) {
      const now = Date.now();
      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    }
  };
}
