var async = require('async');

// please download async node module before executing this file
async.series([
    function(callback) {
        console.log('1st');
        callback();
    },
    function(callback) {
        console.log('2nd');
        callback();
    },
    function(callback) {
        console.log('3rd');
        callback();
    },
    function(callback) {
        console.log('4th');
        callback();
    }
],function() {
    console.log('callback ');
});
////async is used for working with asynchonous javascript, async provides powerful functions for the flow.
// as js is asynchronous all the functions which are depeneding on each other should be written in form of callbacks to avoid
// callbacks people use async as it is easy and powerful to use.

function cb3() {
    console.log('cb3');
}

function cb2() {
    console.log('cb2');
    cb3();
}
exec(function cb() {
        console.log('cb1');
        cb2();
});

function exec(cb){
    console.log('initalization');
    cb();
}
