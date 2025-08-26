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
let api = localStorage.setItem("accessToken",data.accessToken)


if(data.accessToken){
  alert("Login Successful")
  window.location.href = "/e-commerce-app/index.html"
} else if(!data.accessToken){
  let noAccess= document.getElementById("messages")
  noAccess.innerHTML= data.message;
 }

})
.catch(err => console.log(err,"login error"))

}






function showPass(){
 const hiddenWord = document.getElementById("pass")
const typeoff = hiddenWord.getAttribute("type")
 if(typeoff==="password"){
  hiddenWord.setAttribute("type","text")
 }else{
  hiddenWord.setAttribute("type","password")
 }

}

 
