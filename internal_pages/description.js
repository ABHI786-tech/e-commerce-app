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
   <p><b>description</b>  : ${data.description}</p>
   <p><b>brand</b>        : ${data.brand}</p>
   <p><b>price</b>        :$${data.price}</p>
   <p><b>warranty</b>     : ${data.warrantyInformation}</p>
   <p><b>rating</b>       : ${data.rating}</p>
   <p><b>availability</b> : ${data.availabilityStatus}</p>
   <p><b>return policy</b>: ${data.returnPolicy}</p>
   <p><b>category</b>     : ${data.category}</p>
   <p><b>images</b>       : ${data.warrantyInformation}</p>

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



