function fetchFast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fast done!");

        }, 2*1000);
    })
}
function fetchSlow() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Slow done!");

        }, 6*1000);
    })
}

console.log("program starting...");

async function useDone() {
    const resFromFast =  fetchFast();
    console.log(resFromFast);

    const resFromSlow =  fetchSlow();
    console.log(resFromSlow);
    const results = (await Promise.all([resFromFast, resFromSlow]));
    console.log(results);
}

useDone();