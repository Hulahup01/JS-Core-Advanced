'use strict';

const {object_1, object_1_copy, object_2, object_3} = require('./objects.js');

function deepEqual(obj1, obj2) {
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    const isObject = (obj) => obj != null && typeof obj === 'object';

    if (keys1.length !== keys2.length){
        return false;
    }

    for (let key of keys1) {
        let val1 = obj1[key];
        let val2 = obj2[key];
        
        if (
            ((isObject(val1) && isObject(val2)) && !deepEqual(val1, val2)) ||
            (!(isObject(val1) && isObject(val2)) && val1 !== val2)
        ) {
            return false;
        }
    }
 
    return true;
}

console.log(deepEqual(object_1, object_1_copy));
console.log(deepEqual(object_1, object_2));
console.log(deepEqual(object_1, object_3));
