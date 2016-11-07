# babel-preset-es2015-node6 [![](https://img.shields.io/npm/v/babel-preset-es2015-node6.svg)](https://npmjs.org/package/babel-preset-es2015-node6)

> Babel preset to make node@6 fully ES2015 compatible.

Node@6 has great [ES2015 support](https://nodejs.org/en/docs/es6/),
this module just adds missing features:

- modules ([transform-es2015-modules-commonjs](http://babeljs.io/docs/plugins/transform-es2015-modules-commonjs))

## Install

```js
$ npm install --save-dev babel-preset-es2015-node6
```

## Usage

Read ["Configuring Babel 6" article](http://www.2ality.com/2015/11/configuring-babel6.html)
for more information about babel@6 configuration.

__*NOTE*__ If you're using `object-rest` feature of `stage-2`, use `es2015-node6/object-rest` instead of `es2015-node6` (It's added back `destructuring`, `parameters`), or down to `^0.1.4`. Waiting [#2](https://github.com/jhen0409/babel-preset-es2015-node6/issues/2), [T7086](https://phabricator.babeljs.io/T7086) fix.

### Via `.babelrc` (recommended)

**.babelrc**

```json
{
  "presets": ["es2015-node6"]
}
```

### Via CLI

```js
babel script.js --presets es2015-node6
```

### Via Node API

```js
require('babel-core').transform('code', {
  presets: ['es2015-node6'],
})
```

### Options

* `loose` - Enable "loose" transformations for any plugins in this preset that allow them (Disabled by default).
* `funcName` - If your node version is less than `6.5`, consider enabling [function name](http://babeljs.io/docs/plugins/transform-es2015-function-name) support.

```
{
  presets: [
    ["es2015-node6", { "loose": true }]
  ]
}
```

## Credits

* Inspired by [babel-preset-es2015-node5](https://github.com/alekseykulikov/babel-preset-es2015-node5)

## License

[MIT](LICENSE.md)
