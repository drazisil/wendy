const {test} = require("@jest/globals")

const app = require('../src/');

test("hello() returns correctly", () => {
    expect(app.hello()).toEqual("Hello, World!");
});