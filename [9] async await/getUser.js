'use strict';

async function getUser() {
    return await fetch('https://randomuser.me/api/')
        .then(value => value.json())
        .then(value => value.results)
        .catch(error => ({'error': error.name, message: error.message}));
}

getUser()
    .then(value => console.log(value))
    .catch(error => console.log(error));