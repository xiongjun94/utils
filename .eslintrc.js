module.exports = {
  extends: ['airbnb-base'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-console': ['off'],
    'no-restricted-syntax': ['off'], // 不限制任何语法使用
    'no-shadow': ['off'],
    'no-param-reassign': ['off'],
    'linebreak-style': ['off'], // 忽略不同系统、编辑器的换行符
    'consistent-return': ['off'], // 不限制函数返回
    'import/no-extraneous-dependencies': ['off'], // 忽略外部依赖引用
    'import/no-unresolved': ['off'],
    'guard-for-in': ['off'], // 不限制in操作符
    'no-plusplus': ['off'],
    camelcase: ['off'], // 驼峰
    'func-names': ['off'], // 匿名函数
    'import/no-named-as-default-member': ['off'],
    'prefer-rest-params': ['off'],
  },
};
