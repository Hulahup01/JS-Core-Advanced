'use strict';

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Validation error'
    }
}

function isInteger(number) {
    if (!Number.isInteger(number)) 
        throw new ValidationError('The number is not an integer')
}

isInteger(12.2);