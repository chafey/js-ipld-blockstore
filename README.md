# js-ipld-blockstore

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Travis CI](https://flat.badgen.net/travis/chafey/js-ipld-blockstore)](https://travis-ci.com/chafey/js-ipld-blockstore)
[![Coverage Status](https://coveralls.io/repos/github/chafey/js-ipld-blockstore/badge.svg?branch=master)](https://coveralls.io/github/chafey/js-ipld-blockstore?branch=master)
[![Dependency Status](https://david-dm.org/chafey/js-ipld-blockstore.svg?style=flat-square)](https://david-dm.org/chafey/js-ipld-blockstore)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
![](https://img.shields.io/badge/npm-%3E%3D3.0.0-orange.svg?style=flat-square)
![](https://img.shields.io/badge/Node.js-%3E%3D4.0.0-orange.svg?style=flat-square)

> IPLD Blockstore in memory JavaScript Implementation

**Blockstore** - A Blockstore provides persistance for IPLD Blocks

## Lead Maintainer
[Chris Hafey](https://github.com/chafey)

## Table of Contents

- [Install](#install)
  - [npm](#npm)
- [Usage](#usage)
  - [Node.js](#nodejs)
    - [Example](#example)
  - [Browser: Browserify, Webpack, other bundlers](#browser-browserify-webpack-other-bundlers)
  - [Browser: `<script>` Tag](#browser-script-tag)
- [API](#api)
  - [Block](#block)
    - [`new Block(data, cid)`](#new-blockdata-cid)
    - [`block.data`](#blockdata)
    - [`block.cid`](#blockcid)
- [Contribute](#contribute)
- [License](#license)

## Install

### npm

```sh
> npm install ipld-blockstore
```
## Usage

### Node.js

```js
const Block = require('ipld-blockstore')
```

#### Example

```js
const Block = require('ipld-block')
const Blockstore = require('ipld-blockstore')

// Create a blockstore
const blockstore = new Blockstore()

// create a block and store it
const cid = new CID('QmdfTbBqBPQ7VNxZEYEj14VmRuZBkqFbiwReogJgS1zR1n')
const block = new Block(Buffer.from('hello'), cid)
blockstore.put(block);

// get the block
const block2 = blockstore.get(cid)

// delete the block
blockstore.delete(cid)
```
### Browser: Browserify, Webpack, other bundlers

The code published to npm that gets loaded on require is in fact a ES5
transpiled version with the right shims added. This means that you can require
it and use with your favourite bundler without having to adjust asset management
process.

```js
const Block = require('ipld-blockstore')
```

### Browser: `<script>` Tag

Loading this module through a script tag will make the `IpldBlockstore` obj available in
the global namespace.

```html
<script src="https://unpkg.com/ipld-blockstore/dist/index.min.js"></script>
<!-- OR -->
<script src="https://unpkg.com/ipld-blockstore/dist/index.js"></script>
```

## API

```js
const Block = require('ipld-blockstore')
```

### Blockstore

#### `new Blockstore()`

Creates a new blockstore.

#### `Promise<Block> blockstore.get(cid:CID)`

returns a Promise that resolves to the requested block or throws Error with code 'ERR_NOT_FOUND' if not found

#### `Promise<void> blockstore.put(block:Block)`

stores the block and returns a Promise that resolves to void 

#### `Promise<void> blockstore.delete(cid:CID)`

deletes the Block for cid if present and returns a Promise that resolves to void or throws Error with code 'ERR_NOT_FOUND' if not found

[ipld]: https://ipld.io/
[multihash]: https://github.com/multiformats/js-multihash
[CID]: https://github.com/multiformats/js-cid

## Contribute

Feel free to join in. All welcome. Open an [issue](https://github.com/chafey/js-ipld-blockstore/issues)!

This repository falls under the IPFS [Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).

[![](https://cdn.rawgit.com/jbenet/contribute-ipfs-gif/master/img/contribute.gif)](https://github.com/ipfs/community/blob/master/contributing.md)

## License

[MIT](LICENSE)


