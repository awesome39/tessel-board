var tessel = require('tessel')
var connect= require('connect')



var debug= void 'production'
//var debug= console

var app= module.exports= connect()

app.use(function (req, res, next) {
    req.query= require('url').parse(req.url, true).query
    next()
})



var ResponseService= require('./services/ResponseService')
var $response= new ResponseService()



var LedService= require('./services/LedService')
var $led= new LedService(tessel)

app.use('/api/led/toggle', function (req, res) {
    if (debug) debug.log('POST /api/led/toggle', req.query)
    if (req.query.led) {
        var led= $led.getLed(req.query.led)
        if (led) {
            led.toggle()
            led= $led.getLed(req.query.led) // update led data
            $response.writeJson(res, {
                index: req.query.led,
                led: led,
            }, 200) // Ok
        } else {
            res.statusCode= 404 // Not Found
        }
    } else {
        res.statusCode= 400 // Bad Request
    }
    res.end()
})

app.use('/api/led', function (req, res) {
    if (debug) debug.log('GET /api/led', req.query)
    if (req.query.led) {
        var led= $led.getLed(req.query.led)
        if (led) {
            $response.writeJson(res, {
                index: req.query.led,
                led: led,
            }, 200) // Ok
        } else {
            res.statusCode= 404 // Not Found
        }
    } else {
        res.statusCode= 400 // Bad Request
    }
    res.end()
})



var PortService= require('./services/PortService')
var $port= new PortService(tessel)

app.use('/api/port/pin/mode', function (req, res) {
    if (debug) debug.log('POST /api/port/pin/mode', req.query)
    if (req.query.port && req.query.pin && (!req.query.mode||(req.query.mode=='pullup'||req.query.mode=='pulldown'||req.query.mode=='none')) ) {
        var port= $port.getPort(req.query.port)
        var pin= $port.getPortPin(port, req.query.pin)
        if (port && pin) {
            var mode= (req.query.mode) ? req.query.mode : 'none'
            if (debug) debug.log('invoke pin.pull(%s)', mode)
            pin.pull(mode)
            pin= $port.getPortPin(port, req.query.pin) // update pin data
            $response.writeJson(res, {
                name: req.query.pin,
                pin: pin,
            }, 200) // Ok
        } else {
            res.statusCode= 404 // Not Found
        }
    } else {
        res.statusCode= 400 // Bad Request
    }
    res.end()
})

app.use('/api/port/pin/input', function (req, res) {
    if (debug) debug.log('POST /api/port/pin/input', req.query)
    if (req.query.port && req.query.pin) {
        var port= $port.getPort(req.query.port)
        var pin= $port.getPortPin(port, req.query.pin)
        if (port && pin) {
            if (debug) debug.log('invoke pin.input()')
            pin.input()
            pin= $port.getPortPin(port, req.query.pin) // update pin data
            $response.writeJson(res, {
                name: req.query.pin,
                pin: pin,
            }, 200) // Ok
        } else {
            res.statusCode= 404 // Not Found
        }
    } else {
        res.statusCode= 400 // Bad Request
    }
    res.end()
})

app.use('/api/port/pin/output', function (req, res) {
    if (debug) debug.log('POST /api/port/pin/output', req.query)
    if (req.query.port && req.query.pin) {
        var port= $port.getPort(req.query.port)
        var pin= $port.getPortPin(port, req.query.pin)
        if (port && pin) {
            var value= parseFloat(req.query.value) || 0
            console.log('invoke pin.output(%d)', value)
            pin.output(value)
            pin= $port.getPortPin(port, req.query.pin) // update pin data
            $response.writeJson(res, {
                name: req.query.pin,
                pin: pin,
            }, 200) // Ok
        } else {
            res.statusCode= 404 // Not Found
        }
    } else {
        res.statusCode= 400 // Bad Request
    }
    res.end()
})

app.use('/api/port/pin/read', function (req, res) {
    if (debug) debug.log('POST /api/port/pin/read', req.query)
    if (req.query.port && req.query.pin) {
        var port= $port.getPort(req.query.port)
        var pin= $port.getPortPin(port, req.query.pin)
        if (port && pin) {
            console.log('invoke pin.read()')
            pin.read()
            pin= $port.getPortPin(port, req.query.pin) // update pin data
            $response.writeJson(res, {
                name: req.query.pin,
                pin: pin,
            }, 200) // Ok
        } else {
            res.statusCode= 404 // Not Found
        }
    } else {
        res.statusCode= 400 // Bad Request
    }
    res.end()
})

app.use('/api/port/pin/write', function (req, res) {
    if (debug) debug.log('POST /api/port/pin/write', req.query)
    if (req.query.port && req.query.pin) {
        var port= $port.getPort(req.query.port)
        var pin= $port.getPortPin(port, req.query.pin)
        if (port && pin) {
            var value= parseFloat(req.query.value) || 0
            console.log('invoke pin.write(%d)', value)
            pin.write(value)
            pin= $port.getPortPin(port, req.query.pin) // update pin data
            $response.writeJson(res, {
                name: req.query.pin,
                pin: pin,
            }, 200) // Ok
        } else {
            res.statusCode= 404 // Not Found
        }
    } else {
        res.statusCode= 400 // Bad Request
    }
    res.end()
})

app.use('/api/port/pin', function (req, res) {
    if (debug) debug.log('GET /api/port/pin', req.query)
    if (req.query.port && req.query.pin) {
        var port= $port.getPort(req.query.port)
        var pin= $port.getPortPin(port, req.query.pin)
        if (port && pin) {
            $response.writeJson(res, {
                name: req.query.pin,
                pin: pin,
            }, 200) // Ok
        } else {
            res.statusCode= 404 // Not Found
        }
    } else {
        res.statusCode= 400 // Bad Request
    }
    res.end()
})

app.use('/api/port', function (req, res) {
    if (debug) debug.log('GET /api/port', req.query)
    var port
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (req.query.port) {
        if (port= $port.getPort(req.query.port)) {
            $response.writeJson(res, {
                name: req.query.port,
                port: port,
            }, 200) // Ok
        } else {
            res.statusCode= 404 // Not Found
        }
    } else {
        res.statusCode= 400 // Bad Request
    }
    res.end()
})
