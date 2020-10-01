const http = require("http")
const app = require("./src")

const server = http.createServer(((req, res) => {
    console.log(`Request for ${req.url}`)
    res.end(app.hello())
}))

server.on("listening", () => {
    console.log(`Listening on port ${server.address().port}`)
})

server.listen(3000)