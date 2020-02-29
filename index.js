"use strict"

const fs = require("fs")
const mode = fs.constants.W_OK

module.exports = async (filename) => {
	try {
		await fs.promises.access(filename, mode) // eslint-disable-line node/no-unsupported-features/node-builtins
		return true
	} catch (err) {
		return false
	}
}

module.exports.sync = (filename) => {
	try {
		fs.accessSync(filename, mode)
		return true
	} catch (err) {
		return false
	}
}
