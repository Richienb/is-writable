const test = require("ava")
const isWritable = require(".")

test("main", async (t) => {
	t.true(await isWritable(__dirname))
	t.true(isWritable.sync(__dirname))
})
