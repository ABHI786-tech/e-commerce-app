// 
// link redirctio using anchor tag
//  <a href='http://127.0.0.1:5500/e-commerce-app/discription.html?id=${product.id}'> <img src="${product.thumbnail}"alt="${product.title}   ">




// Fetch all product list

fetch('https://dummyjson.com/products/')
  .then(response => response.json())
  .then(data => {
    const products = data.products;
    const container = document.getElementById('product-container');
    products.forEach(product => {
      const productHTML = `
         <div onclick='product_detail(${product.id})'> <img src="${product.thumbnail}"alt="${product.title}   ">
            <h2 >${product.title}</h2><br></div>
            <p><strong>Price:</strong>    $${product.price}</p>
            <p><strong>stock:</strong>     ${product.availabilityStatus}</p>
            <button id="add_Tocart" onclick='addItem(${JSON.stringify(product)})'>Add to cart</button>
          `;
      const productli = document.createElement('li');
      productli.innerHTML = productHTML;
      container.appendChild(productli);
    });
  }).catch(error => console.log('Error fetching products:', error));

// Localstorage Referance 
let memory = JSON.parse(localStorage.getItem("order"))
let yourOrder = memory?.length ? [...memory] : []

// DOM Referance
let cart = document.getElementById("cart")
cart.innerHTML = yourOrder?.length??0

// Add To cart Product
let addItem = (product) => {
  // alert(product.id)
  let basket = {
    id: product.id,
    quantity: 1,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail
  }



  // Check item present then increse quantity
  let isItemPresent = yourOrder.find((item) => item.id === basket.id)
  if (isItemPresent) {
   isItemPresent.quantity+=1;
  } else {
    yourOrder.push(basket)
  }
  console.log(yourOrder,"isItemPresent")

  localStorage.setItem("order", JSON.stringify(yourOrder))
// LocalStorage Refernce
  let storage = localStorage.getItem("order")
  let cartItem = JSON.parse(storage)
  cart.innerHTML = cartItem?.length??0
}







// Product detail page navigation
function product_detail(id) {
  window.location.href = `http://127.0.0.1:5500/e-commerce-app/internal_pages/discription.html?id=${id}`
}


//navigate login page to profile page

const loginButton = document.getElementById('user');
const profileButton = document.getElementById('profile');

function LoggedIn() {
  return localStorage.getItem('accessToken') !== null;
}

function hiddenbtn() {
  if (LoggedIn()) {
    loginButton.style.display = 'none';
    profileButton.style.display = 'content';
  } else {
    loginButton.style.display = 'content';
    profileButton.style.display = 'none';
  }
}
hiddenbtn();








