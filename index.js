var http= require('http')
var tesselWorkbench= require('./tessel-board')

var port= 1337
http.createServer(tesselWorkbench).listen(port, function () {
    console.log('tessel-board listening on port: %d', port)
})
