module.exports= PortService

function PortService(tessel) {
    this.tessel= tessel
}

PortService.prototype.getPort= function (portName) {
    return (portName) ? this.tessel.port[portName] || null : null
}

PortService.prototype.getPortPin= function (port, pinName) {
    var pin
    if (port && pinName) {
        pin= port.pin[pinName]
        if ('A'==pinName[0]) {

        } else if ('G'==pinName[0]) {
            if (pin) {
                pin.$mode= pin.mode()
                pin.$value= pin.rawRead()
            }
        }
    }
    return pin
}
