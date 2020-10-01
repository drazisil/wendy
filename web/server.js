const http = require("http")

const server = http.createServer(((req, res) => {
    console.log(`Request for ${req.url}`)
    res.end("Hello, World!")
}))

server.on("listening", () => {
    console.log(`Listening on port ${server.address().port}`)
})

server.listen(3000)