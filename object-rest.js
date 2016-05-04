// https://phabricator.babeljs.io/T7086
module.exports = {
  plugins: [
    require('babel-plugin-transform-es2015-destructuring'),
    require('babel-plugin-transform-es2015-parameters'),
    require('babel-plugin-transform-es2015-modules-commonjs'),
    require('babel-plugin-transform-es2015-function-name'),
  ],
};
