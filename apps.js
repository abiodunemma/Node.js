// var time = 0;

// var timer = setInterval(function(){
//     time += 2;
//     console.log(time + ' seconds have passed');
//     if (time > 5){
//         clearInterval(timer);
//     }
// }, 2000);

// comsole.console.log(__dirname); 

//type of objects 

// function sayHi(){
//     console.log ('Hi');

// }

// sayHi();

// function into function:


// function callfunction(fun){
//     fun();
// }

// var  sayBye = function(){
//     console.log('bye'); 
// };

// callfunction(sayBye);

//var stuff = require('./stuff');


//console.log(stuff.counter(['shawn', 'crystal', 'ryu']));
//console.log(stuff.adder(5,6));
//console.log(stuff.adder(stuff.pi, 5));

// event module

// var events = require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(mssg){
//     console.log(mssg);
// });

// myEmitter.emit('someEvent', 'the event was emiteed');

// var util = require('util');

// var Person = function(name){
//     this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var james = new Person('james');
// var jay = new Person('jay');
// var abbey = new Person('abbey');
// //ar abbey = new Person('abbey');
// var people = [james, jay,  abbey];

// people.forEach(function(person){
//     person.on('speak', function(mssg){
//         console.log(person.name + ' said: ' + mssg);
//     });
// });

// james.emit('speak', 'heyo dudes');
// abbey.emit('speak', 'heyio dudes');
// jay.emit('speak', 'heyo dudes');
// abbey.emit('spaek', 'i want a carry');


// Create/ Remove Directories
// this is for creating diretory
//var fs = require('fs');

// fs.mkdir('move', function(){
//     fs.readFile('readMe.txt', 'utf8', function(err, data){
//         fs.writeFile('./move/writeMe.txt', data);
//     });
//  //   fs.readFile('readMe.txt', 'utf8', function(err, data){
//    //     fs.writeFile('./move/writeMe.txt', data);
//     });
// //});

// this is for  deleting creating diretory
//var fs = require('fs');

//fs.rmdirSync('move');

// const fs = require('fs');

// const path = require('path');

// // Create 'move' directory
// fs.mkdir('move', { recursive: true }, function(err) {
//     if (err) {
//         console.error('Error creating directory:', err);
//         return;
//     }

//     // Read 'readMe.txt' file
//     fs.readFile('readMe.txt', 'utf8', function(err, data) {
//         if (err) {
//             console.error('Error reading file:', err);
//             return;
//         }

//         // Write data to 'writeMe.txt' in 'move' directory
//         fs.writeFile('./writeMe.txt', data, function(err) {
//             if (err) {
//                 console.error('Error writing file:', err);
//                 return;
//             }

//             console.log('File moved successfully!');
//         });
//     });
// });

var fs = require('fs');

// var readMe = fs.readFileSync('readMe.txt', 'utf8');
// fs.writeFileSync('writeMe.txt', readMe);
// console.log(readMe);

//  fs.readFile('readMe.txt', 'utf8', function(err, data){

//    fs.writeFile('writeMe.txt', data);
   
//    // console.log(data);
//  });

//const fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data) {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    fs.writeFile('writeMe.txt', data, function(err) {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }

        console.log('File written successfully!');
    });
});


