const number = 1337;

const randomNum = Math.floor((Math.random()*1000 + 1));

try {
    const res = number + randomNum;
    console.log(res);
    if(res > 2000) {
        throw new Error("over limit");
    }
} catch (error) {
    console.log(number + randomNum);
    console.log(error);
    
}