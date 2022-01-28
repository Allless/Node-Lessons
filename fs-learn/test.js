const fsMethods = require('./fsMethods');

async function test() {
    await fsMethods.getTaskById(2).then((task) => console.log(task));
    await fsMethods.removeTaskById(3);
    await fsMethods.addTask({ title: 'myTask', status: 'added' });
}

test();
