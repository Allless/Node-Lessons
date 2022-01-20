function f1() {
    console.log('f1 start');
    f2();
    console.log('some f1 execution');
    console.log('f1 end');
}

async function f2() {
    console.log('f2 start');
    await new Promise((res) =>
        setTimeout(() => {
            res('f2 promise executed');
        }, 5)
    ).then((info) => console.log(info));
    console.log('f2 end');
}

f1();
