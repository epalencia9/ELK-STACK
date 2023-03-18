// content of index.js
const http = require('http')
const port = 3030

const server = http.createServer(function(req, res) {
    res.write('Hello Node.js Server!')
    res.end()
})

server.listen(port, function(error) {
    if (error) {
        console.log('something bad happened', error)
    } else {
        console.log('server is listening on ' + port)
    }
})
