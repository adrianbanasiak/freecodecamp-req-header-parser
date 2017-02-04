var http = require('http')
var process = require('process')
var port = process.env.PORT || 3000
var express = require('express')
var app = express()

http.createServer( app ).listen( port )

app.get('/', function(req, res){
  var software = req.headers['user-agent'].match(/\s\(([^\)]+)/)
  software = software ? software[1] : ''

  var data = {
    ipaddress: req.connection.remoteAddress,
    language: req.headers['accept-language'],
    software: software
  }

  res.json( JSON.stringify( data ) )
  res.end()
})

