var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    fs.readFile('./static/index.html','utf8',function(err,
     content){
         if(err){
             //hubo error

             res.writeHead(500,{
            'Content-Type':'text/html'
        
             });
          console.log('>erro en la letura');   
          res.end("<h1>error interno</h1>");
          }else{
          res.writeHead(200,{ 'Content-Type':'text/html'

             });

        console.log('>sirviendo html index.html');
        res.end(content);

          }
     });

 });

     
//    res.writeHead(200,{

//    'Content-Type':'text/html'
//     });
//     res.write('<h1>server funcionado </h1>');
//     res.write('<p>server funcionado </p>');
//     res.end();

// });

server.listen(3000, '127.0.0.1', function(){


    console.log('>server corriendo  en http://127.0.0.1:3000.....');

});

