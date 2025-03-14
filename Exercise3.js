console.log('program started');
 
const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve({
        data: "Hello",
        error: null
    });
    }, 5*1000)
}).then((val) => {
    console.dir(val);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("first promise chain complete");
        },2*1000);
    })
}).then((val) => {
    console.log(val);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("second promise chain complete");

        },10*1000)
    })
}).then((val) => {
    console.log(val);
})

console.log('program in progress...');
console.log(pr);