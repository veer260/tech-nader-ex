for(var i = 0; i < 10; i++) {
    try {
        if(i == 5) {
            throw new Error("Boom!!");
        }
        console.log(i);
    } catch (error) {
        console.log(error);
        
    }
}