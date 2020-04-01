let promise = new Promise(function (resolve, reject) {
    if(true){
        resolve('success');
    }else{
        reject('failed')
    }
});
promise.then(function (message) {
    alert(message);
}).catch(function (error) {
    alert(error);
});
