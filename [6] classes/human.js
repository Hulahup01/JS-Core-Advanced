'use strict';

class Human {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    info(){
        console.log(`${this.name}, ${this.age} y.o. from ${this.country}`);
    }
}

const bro = new Human('John', 21, 'USA');
bro.info();