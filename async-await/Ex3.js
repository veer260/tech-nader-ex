function goGetCandy() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                candy: "sour keys",
                quantity: 10
            })

        }, 2*1000);
    })
}

function sellCandies(candy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve(candy.quantity *25);
        }, 3*1000);
    })
}

async function getMoney() {
    const candy = await goGetCandy();
    console.log(candy);

    const money = await sellCandies(candy);
    console.log(money);
}
getMoney();
