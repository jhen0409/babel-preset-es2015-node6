# babel-preset-es2015-node6 [![](https://img.shields.io/npm/v/babel-preset-es2015-node6.svg)](https://npmjs.org/package/babel-preset-es2015-node6)

> Babel preset to make node@6 fully ES2015 compatible.

Node@6 has great [ES2015 support](https://nodejs.org/en/docs/es6/),
this module just adds missing features:

- modules ([transform-es2015-modules-commonjs](http://babeljs.io/docs/plugins/transform-es2015-modules-commonjs))
- better function name support ([transform-es2015-function-name](http://babeljs.io/docs/plugins/transform-es2015-function-name))

And:
- destructuring ([transform-es2015-destructuring](http://babeljs.io/docs/plugins/transform-es2015-destructuring)) (Related to issue [#2](https://github.com/jhen0409/babel-preset-es2015-node6/issues/2))
- parameters ([transform-es2015-parameters](http://babeljs.io/docs/plugins/transform-es2015-parameters)) (Related to issue [#2](https://github.com/jhen0409/babel-preset-es2015-node6/issues/2))

## Install

```js
$ npm install --save-dev babel-preset-es2015-node6
```

## Usage

Read ["Configuring Babel 6" article](http://www.2ality.com/2015/11/configuring-babel6.html)
for more information about babel@6 configuration.

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

## Credits

* Inspired by [babel-preset-es2015-node5](https://github.com/alekseykulikov/babel-preset-es2015-node5)

## License

[MIT](LICENSE.md)
