# concat
![logo](https://avatars1.githubusercontent.com/u/31987273?v=4&s=100)

concatenate several iterable sequences sequentially

[![NPM version][npm-image]][npm-url]
[![Travis Status][travis-image]][travis-url]
[![Travis Status][codecov-image]][codecov-url]

## Usage

_package requires a system that supports async-iteration, either natively or via down-compiling_

### Install
```
npm install @async-generators/concat --save
yarn add @async-generators/concat
```

This package's `main` entry points to a `commonjs` distribution. 

Additionally, the `module` entry points to a `es2015` distribution, which can be used by build systems, such as webpack, to directly use es2015 modules. 

## Api

### concat(...source)

<code>concat()</code> yields each sequence in the order passed to concat. 

each object in `...source` must be have a `[Symbol.asyncIterator]` or `[Symbol.iterator]` property. 

## Example

example.js
```js
const concat = require('@async-generators/concat').default;

async function main() {
  let a = async function* () {
    yield 1; yield 2;
  }
  let b = function* () {
    yield 3;
  }
  let c = () => [ 4 ]

  for await (let item of concat(a(), b(), c())) {
    console.log(item);
  }
}
main();
```

Execute with the latest node.js: 

```
node --harmony-async-iteration example.js
```


output:
```
1
2
3
4
```
## Typescript

This library is fully typed and can be imported using: 

```ts
import concat from '@async-generators/concat');
```

It is also possible to directly execute your [properly configured](https://stackoverflow.com/a/43694282/1657476) typescript with [ts-node](https://www.npmjs.com/package/ts-node):

```
ts-node --harmony_async_iteration example.ts
```

[npm-url]: https://npmjs.org/package/@async-generators/concat
[npm-image]: https://img.shields.io/npm/v/@async-generators/concat.svg
[npm-downloads]: https://img.shields.io/npm/dm/@async-generators/concat.svg
[travis-url]: https://travis-ci.org/async-generators/concat
[travis-image]: https://img.shields.io/travis/async-generators/concat/master.svg
[codecov-url]: https://codecov.io/gh/async-generators/concat
[codecov-image]: https://codecov.io/gh/async-generators/concat/branch/master/graph/badge.svg
