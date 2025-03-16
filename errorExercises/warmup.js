console.log('program started');

try{
    throw new Error("uh oh!");

}catch(error){
    console.log(error);

}

console.log('program complete');