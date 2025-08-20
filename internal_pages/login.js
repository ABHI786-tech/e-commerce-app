function loginNow() {
let email= document.getElementById("userName").value 
let password= document.getElementById("pass").value

console.log(email);
console.log(password);

fetch('https://dummyjson.com/auth/login',{
  method: "post" ,
  headers: { 'Content-Type': `application/json` },
  body: JSON.stringify({
   username:`${email}` ,
    password: `${password}`
})
})
.then(async (res) =>{
let data= await res.json()
  console.log(data)
let api = localStorage.setItem("accessToken",data.accessToken)
})
.catch(err => console.log(err,"error"))

}