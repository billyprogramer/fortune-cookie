
var http = require('http');
var fs = require('fs');
var colors = require('colors');
var mime = require('mime');

//importanto el objeto configurador
var config = require('./config/config');
//estableciendo tema de colores
colors.setTheme(config.colorTheme);
//importando configuraciones
var IP = config.IP
Port = config.Port;

var server = http.createServer(function (req, res) {
    var url = req.url;
    if (url === "/") {
        url = '/index.html'
    }
    /// generando ruta del archivo solicitado
    console.log(`>Recurso Solicitado${url}`.info);
    var filePath = './static' + url;
    console.log(`> Se servira el archivo ${url}`.info);
    console.log(`>Sirviendo archivo : ${filePath}`);
    //seleccionando el tipo mime de archivo
    var mimeType = mime.lookup(filePath);

    fs.readFile(filePath,
        function (err, content) {
            if (err) {
                //hubo error
                res.writeHead(500, {
                    'Content-Type': 'text/html'
                });
                console.log('>erro en la letura'.err+'en un archivo');
                res.end("<H1>error interno</H1>".err);
            } else {
                res.writeHead(200, {
                    'Content-Type': mimeType
                });
                console.log(`>Sirviendo archivo : ${filePath}`.ready);
                res.end(content);
            }
        });
});
server.listen(Port, IP, function () {
    console.log(`>Server Corriendo en http://${IP}:${Port}...`.data);
});

