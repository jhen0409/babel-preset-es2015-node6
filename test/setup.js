require('babel-core/register')({
  plugins: [
    ...require('../object-rest').plugins,
    'transform-object-rest-spread'
  ]
});
