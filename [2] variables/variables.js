'use strict';

function func() {
    {
        var x_var = 'x_var';
        let x_let = 'x_let' ;
        const x_const = 'x_const';

        console.log(`inside: ${x_var}`);
        console.log(`inside: ${x_let}`);
        console.log(`inside: ${x_const}`);
    }

    try {
        console.log(`outside: ${x_var}`);
    } catch(e) {
        console.log(`outside: [${e.name}: ${e.message}]`);
    }

    try {
        console.log(`outside: ${x_let}`);
    } catch(e) {
        console.log(`outside: [${e.name}: ${e.message}]`);
    }

    try {
        console.log(`outside: ${x_const}`);
    } catch(e) {
        console.log(`outside: [${e.name}: ${e.message}]`);
    }
}

func();