function fetchPokemon() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    name: "pikachu",
                    power: 20,
                }
            })

        }, 3*1000);
        setTimeout(() => {
            reject("danger, danger!!!")

        }, 2*1000);
    })
}

console.log("program starting");

async function displayInfo() {
    try {
        const data = await fetchPokemon();
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
  

}

displayInfo();

console.log("program finished");