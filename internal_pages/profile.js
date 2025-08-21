
let Token = localStorage.getItem("accessToken")
console.log(Token)
fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${Token}`, // Pass JWT via Authorization header
        "Access-Control-Allow-Origin": "*",
    },
    // credentials: 'include',
})
    .then(async res => {
        let profiledata = await res.json()
        console.log(profiledata)
        let profileParent = document.getElementById("profile_cart")
        let profilechild = `
    <img src="${profiledata.image}"><br>
    <p><b>username</b> : ${profiledata.username}</p><br>
    <p><b>First Name</b> : ${profiledata.firstName}</p><br>
    <p><b>Last Name</b> : ${profiledata.lastName}</p><br>
    <p><b>email</b> : ${profiledata.email}</p><br>
    <p><b>phone</b> : ${profiledata.phone}</p><br>
    <p><b>address</b> : ${profiledata.address}</p><br>
    `
        profileParent.innerHTML += profilechild
        // console.log(profilechild)
    })
    .catch(err => console.log(err))
