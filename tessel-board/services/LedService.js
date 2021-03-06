module.exports= LedService

function LedService(tessel) {
    this.tessel= tessel
}

LedService.prototype.getLed= function (ledIndex) {
    var led
    if (ledIndex !== undefined && ledIndex !== null) {
        led= this.tessel.led[ledIndex]
        if (led) {
            led.$value= led.rawRead()
        }
    }
    return led
}
