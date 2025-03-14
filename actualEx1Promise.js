console.log('program started');
const pr = new Promise((res, rej) => {
    setTimeout(() => {
        res("done");

    }, 3*1000);
    setTimeout(() => {
        rej("failed");

    }, 2*1000);

}).then(() => {
    console.log('program complete');


}).catch(() => {
    console.log("failure");

});

console.log(pr);
console.log('program in progress...');


