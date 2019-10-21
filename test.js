import test from "ava"
import isWritable from "."

test("main", async (t) => {
    t.true(isWritable.sync(__dirname))
    t.true(await isWritable.async(__dirname))
})
