console.log('program started');
const pr = new Promise((res, rej) => {
    setTimeout(() => {
        console.log('program complete');
        res("done");

    }, 3*1000);

}).then(() => {

}).catch(() => {

});

console.log(pr);
console.log('program in progress');


