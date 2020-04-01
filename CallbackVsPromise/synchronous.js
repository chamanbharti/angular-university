var fs = require('fs');
console.log('Program Started');
var data = fs.readFileSync('data.txt') ;
console.log(data.toString());
console.log('Program Ended');