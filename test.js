import test from "ava"
import isWritable from "."

test("main", (t) => {
    t.true(isWritable.sync(__dirname))
    isWritable.async(__dirname).then(t.true)
})
