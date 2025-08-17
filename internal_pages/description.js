let search = new URLSearchParams (window.location.search)
let param = search.get("id")
console.log(param)

fetch(`https://dummyjson.com/products/${param}`)
.then (async (res)=>{
    let data =await res.json()
    console.log(data)
   let parent = document.getElementById("pro-detail")

   let child = `
    <img src="${data.thumbnail}"alt="${data.title}">
   <h1>${data.title}</h1>
   <p>description : ${data.description}</p>
   <p>brand : ${data.brand}</p>
   <p>price : $${data.price}</p>
   <p>warranty : ${data.warrantyInformation}</p>
   <p>rating : ${data.rating}</p>
   <p>availability : ${data.availabilityStatus}</p>
   <p>return policy : ${data.returnPolicy}</p>
   <p>category : ${data.category}</p>
   <p>images : ${data.warrantyInformation}</p>

   `
   
 parent.innerHTML +=child
}).catch((err)=>{
     let parent = document.getElementById("pro-detail")

   let child = `
  
   <p>NO data Found</p>

   `
   
 parent.innerHTML +=child
    console.log(err,"err")
})



