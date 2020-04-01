var fs = require('fs');
var file = "data.txt";

function ReadFile(err, data) {
    if(err){
        throw err;
    }
   console.log(data)
}

function status(err, stat) {
    if(err){
        throw err;
    }
    if (stat.isFile()){
        fs.readFile(file,"utf8",readFile)
    }
}

function fileExists(exists) {
    if(exists)
        fs.stat(file, status);
}
fs.exists(file,fileExists());