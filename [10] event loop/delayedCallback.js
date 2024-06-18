'user strict';

function delayedCallback(callback, ...args) {
    setTimeout(callback, 2000, ...args);
}

const aboba = (message) => {
    console.log(message);
};

delayedCallback(aboba, 'hello world');