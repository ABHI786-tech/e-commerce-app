let store = localStorage.getItem("order")
// console.log(store)
let itemData = JSON.parse(store)
// console.log(itemData)

let cartParent = document.getElementById("cartItem")
itemData.forEach((item) => {
    let cartChild =
    `<img width="90px" src="${item.thumbnail}" class="cart_li">
    <h3 class="cart_li">${item.title}</h3>
    <p class="cart_li">${item.quantity}</p>
    <button onclick="remove(${item.id})" class="cart_li" id="rbtn">remove</button>
    `
//     console.log(cartChild)
// console.log(item)
// cartChild = document.createElement("li")
// cartParent.innerHTML +=cartChild;
const cartlist = document.createElement("li");
      cartlist.innerHTML = cartChild;
      cartParent.appendChild(cartlist);


});


let remove = (id)=>{
    alert(id)
}