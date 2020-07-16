"use strict"

const fs = require("fs")
const mode = fs.constants.W_OK

module.exports = async filename => {
	try {
		await fs.promises.access(filename, mode)
		return true
	} catch (_) {
		return false
	}
}

module.exports.sync = filename => {
	try {
		fs.accessSync(filename, mode)
		return true
	} catch (_) {
		return false
	}
}
