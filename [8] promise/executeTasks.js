'use strict';

async function executeTasks(tasks) {
    const results = [];

    for (const task of tasks) {
        await task()
            .then((value) => {results.push({ status: 'fulfilled', value: value })})
            .catch((error) => results.push({ status: 'rejected', reason: error }));
    }

    return results;
}

const task1 = () => {
    return new Promise((resolve, reject) => {
        console.log('task1 done');
        setTimeout(() => resolve('task1 done'), 1000);
    });
}

const task2 = () => {
    return new Promise((resolve, reject) => {
        throw new Error('task2: Smth wrong');
        //setTimeout(() => reject('task2 reject'), 800);
    });
}

const task3 = () => {
    return new Promise((resolve, reject) => {
        console.log('task3 done');
        setTimeout(() => resolve('task2 done'), 1500);
    });
}

executeTasks([task1, task2, task3]).then((result) => {
    console.log(result);
});

