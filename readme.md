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

(async () => {
	await isWritable("file.txt")
	//=> true
})()
```

## API

### isWritable(filepath)
### isWritable.sync(filepath)

#### filepath

Type: `string`

The file or directory to check.
