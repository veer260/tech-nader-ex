const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);

    }, 3*1000);
}).then((num) => {

})

const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);

    }, 10*1000);
}).then((num) => {

})