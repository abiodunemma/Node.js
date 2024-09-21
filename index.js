
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
// })



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
  res.writeHead(200, {'content-Type': 'application/json'});
  var myObj = {
    name: 'Ryu',
    job: 'Ninja',
    age: 29 
};
res.end(JSON.stringify(myObj));

});

// for running html page
  // var myReadStream = fs.createReadStream(__dirname + '/home.html', 'utf8');
  // myReadStream.pipe(res);

 server.listen(3000, '127.0.0.1');
 console.log('lolllllllll',);
