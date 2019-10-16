"use strict"

const fs = require("fs-extra")
const Promise = require("bluebird")
const defaultMode = fs.constants.W_OK

module.exports = {
    sync: (directory, mode = defaultMode) => {
        try {
            fs.accessSync(directory, mode)
            return true
        } catch (err) {
            return false
        }
    },
    async: (directory, mode = defaultMode) => {
        return new Promise((resolve) => {
            fs.access(directory, mode)
                .then(() => resolve(true))
                .catch(() => resolve(false))
        })
    },
}
