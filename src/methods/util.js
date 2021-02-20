/**
 * @param {Array} tree 遍历查找对象
 * @param {Function} func 规则函数需返回布偶值
 * @param {String} child 子节点的名称
 * @return {Array} 返回一个从根节点到符合规则的节点中所有的路径下标
 */
export function findChildPath(tree, func, child, path = []) {
  if (!Array.isArray(tree)) return [];
  for (let i = 0; i < tree.length; i += 1) {
    path.push(i);
    if (func(tree[i])) return path;
    if (tree[i][child]) {
      const findChildren = findChildPath(tree[i][child], func, path);
      if (findChildren.length) return findChildren;
    }
    path.pop();
  }
  return [];
}

/**
 * @param {String} attr 需要获取的属性名
 */
export function getHashQueryByAttr(attr) {
  const queryString = window.location.hash.split('?')[1];
  if (!queryString) return;
  const params = queryString.split('&');
  return params.find((item) => {
    const [key, value] = item;
    if (key === attr) {
      return value;
    }
    return false;
  });
}

/**
 * @param {Array|Object} source
 * @return {Array|Object}
 * @desc 该方法会遍历所有可枚举类型属性,数组下标为01 02等顺序会发生错乱
 */
export function deepCopy(source) {
  const sourceCopy = source instanceof Array ? [] : {};
  for (const key in source) {
    sourceCopy[key] = typeof source[key] === 'object' ? deepCopy(source[key]) : source[key];
  }
  return sourceCopy;
}

export function getMaxFloor(target) {
  let deep = 0;
  function eachData(data, index) {
    if (index > deep) {
      deep = index;
    }
    data.forEach((elem) => {
      if (elem.children && elem.children.length > 0) {
        eachData(elem.children, index + 1);
      }
    });
  }
  const treeArr = Array.isArray(target) ? target : [target];
  eachData(treeArr, 1);
  return deep;
}
