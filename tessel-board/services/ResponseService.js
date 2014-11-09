module.exports= ResponseService

function ResponseService() {

}

ResponseService.prototype.writeJson= function (res, body, status) {
    if (res && body) {
        res.writeHead(status || 200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(body || null))
    }
    return this
}
