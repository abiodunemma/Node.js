
// const http = require('node:http');
// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// myReadStream.pipe(myWriteStream);


//we can use pipe instead
// myReadStream.on('data', function(chunk){
//   console.log('new chunk received:');
//   myWriteStream.write(chunk);
//   //console.log(chunk);
// })2q 4\[KVC G1`  1]


// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/home.html').pipe(res);
  } else if(req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
      fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if(req.url === '/api/ninjas'){
   var ninjas = [{name: 'abbey', age: 29}, {name: 'yola', age: 44}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(ninjas));    
  } else{
    res.writeHead(200, { 'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
    });
//   res.writeHead(200, {'content-Type': 'text/plain'});

// res.end('feed me popccorn');
 


// for running html page
  // var myReadStream = fs.createReadStream(__dirname + '/home.html', 'utf8');
  // myReadStream.pipe(res);

 server.listen(3000, '127.0.0.1');
 console.log('lolllllllll',);
