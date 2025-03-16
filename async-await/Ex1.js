function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    user: "Monkey",
                    admin: true,
                }
            })

        }, 3*1000);
    })
}

function login(user) {
    if(user.admin == true) {
        console.log("successfully logged in")
    }else {
        console.log("failed to login, try again")
    }

}

console.log("program started");


async function getUser() {
    try {
        const res = await fetchUser();
        const user = res.data;
        console.log(user);
        login(user);
        
    } catch (error) {
        
    }

    
}

getUser();

console.log("program complete!!!");