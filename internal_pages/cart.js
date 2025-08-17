let store = localStorage.getItem("order")
// console.log(store)
let itemData = JSON.parse(store)
// console.log(itemData)

let cartParent = document.getElementById("cartItem")
itemData.forEach((item) => {
    let cartChild =
    `<img width="40px" src="${item.thumbnail}">
    <h2>${item.title}</h2>
    <p>${item.quantity}</p>
    <button onclick="remove(${item.id})">remove</button>
    `
//     console.log(cartChild)
// console.log(item)
cartParent.innerHTML +=cartChild;
});


let remove = (id)=>{
    alert(id)
}