# is-writable [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/is-writable/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/is-writable)

Check if a file or directory is writable.

[![NPM Badge](https://nodei.co/npm/is-writable.png)](https://npmjs.com/package/is-writable)

## Install

```sh
npm install is-writable
```

## Usage

```js
const isWritable = require("is-writable");

const writable = isWritable.sync(directory);
console.log(writable); // true

isWritable.async(directory).then(writable => console.log(writable)); // true
```

## API

### isWritable.[sync|async](directory, mode?)

#### directory

Type: `string`

The directory to check.

#### mode

Type: _from `fs.constants`_\
Default: `fs.constants.W_OK`

The fs constant directing the mode to use.
