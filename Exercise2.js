const pr = new Promise((res, rej) => {
    setTimeout(() => {
        res("data");

    }, 3*1000);

}).then(() =>{
    console.log("step 1 done");
    // setTimeout(() => {
    //     return "";
    // }, 3*1000);
    // console.log('in step 1');
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("step 2 done");

        }, 3*1000);
    })
}).then((resolvedVal)=>{
    console.log(resolvedVal);
}).catch(() => {
    console.log("program failed");

})

console.log('program started');
console.log(pr);
console.log("in progress...");