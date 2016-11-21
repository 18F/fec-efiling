var http = require('http')
var auth = require('basic-auth')
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
var serve = serveStatic("./");


var server = http.createServer(function (req, res) {
  var credentials = auth(req)

  if (!credentials || credentials.name !== process.env.FEC_USERNAME || credentials.pass !== process.env.FEC_PASSWORD) {
    res.statusCode = 401
    res.setHeader('WWW-Authenticate', 'Basic realm="fec"')
    res.end('Access denied')
  } else {
    var done = finalhandler(req, res);
    serve(req, res, done);
}});

server.listen(process.env.PORT)
