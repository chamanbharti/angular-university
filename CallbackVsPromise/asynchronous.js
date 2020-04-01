// https://www.javatpoint.com/nodejs-callbacks
//syncronous
// var fs = require('fs');
// console.log('Program Started');
// var data = fs.readFileSync('data.txt') ;
// console.log(data.toString());
// console.log('Program Ended');


//asyncronous
var fs = require('fs');
console.log('Program Started');
fs.readFile('data.txt', function (err, data) {
    if(err)
        return console.error(err);
    console.log(data.toString());
}) ;

console.log('Program Ended');
