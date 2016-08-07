var async = require('async');

var arr = ['vijay','vinay', ,'nanna'];

exec(function(err) {
    if (err) {
        console.log(err+'eroor');
    }
    return;
});

function exec(callback) {
    for (var i = 0; i < arr.length; i++) {
        RPC(arr[i],function(err) {
            if (err) {
                return callback(err);
            }
            callback();
        })
    }
}

function RPC(a,cb) {
    if(a!=null){
        console.log(a+'dssdsd');
        return cb;
    }
    return cb('error');
}
