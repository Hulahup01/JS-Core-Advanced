'use strict';

function repeatFunc(func, interval, ...args) {
    setInterval(func, interval, ...args);
}

const someFunc = (a, b, c) => {
    console.log(a);
    console.log(b);
    console.log(c);
}

repeatFunc(someFunc, 1000, 1, 3, 4);