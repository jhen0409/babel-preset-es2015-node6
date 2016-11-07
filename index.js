function preset(context, opts) {
  var loose = opts && !!opts.loose;
  var funcName = opts && !!opts.funcName;

  var plugins = [
    [require('babel-plugin-transform-es2015-modules-commonjs'), { loose: loose }],
  ];

  if (funcName) {
    plugins.push(require('babel-plugin-transform-es2015-function-name'));
  }
  return {
    plugins: plugins,
  };
}

module.exports = preset({});

Object.defineProperty(module.exports, "buildPreset", {
  configurable: true,
  writable: true,
  enumerable: false,
  value: preset,
});
