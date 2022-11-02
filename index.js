function receivesAFunction(cb) {
    cb();
    return cb;
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log('Here is a named function')
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Here is an anonymous function");
    }
}