let i = -1;
// for ( i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);

//     }, 100);
// }

function add(x, y) {
    this.num1 = y;
    this.num2 = y;

}

add.prototype.willAdd = "yes"

const obj = new add(1,3);
// console.dir(obj);

new Promise(function(rej, res) {
    // res("data");
    setTimeout(() => {
        res("success");

    }, 2*1000);
}).then((val) => {
    console.log(val);
}
).catch((err) => {
    console.log(err);

});


// pr.then((val) => {
//     console.log(val);
// })

