const user = {
    name: "Misha",
    age: 22,
    settings: {
        color: "Blue"
    }
}
console.log("creating user...");
try{
console.log(user.profile.color);


}catch(error) {
    console.log('something went wrong');

}

console.log('user created');