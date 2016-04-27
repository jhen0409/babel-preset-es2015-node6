require('babel-core/register')({
  plugins: [
    ...require('..').plugins,
    'transform-object-rest-spread'
  ]
});
