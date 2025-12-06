
// Fetch all product list
fetch('https://dummyjson.com/products/')
  .then(response => response.json())
  .then(data => {
    const products = data.products;
    const container = document.getElementById('product-container');

    products.forEach(product => {

      const productli = document.createElement('li');

      productli.innerHTML = `
        <div class="product-card">

          <img src="${product.thumbnail}" alt="${product.title}">

          <h2>${product.title}</h2>

          <p><strong>Price:</strong> $${product.price}</p>

          <p><strong>Stock:</strong> ${product.stock > 0 ? "Available" : "Out of Stock"}</p>

          <button class="btn btn-primary w-100 addCartBtn">
            Add to Cart
          </button>

        </div>
      `;

      // 🔥 If user clicks anywhere on product card → add to cart
      productli.onclick = () => addItem(product);

      // 🔥 If user clicks on add to cart button → add to cart (without double click)
      productli.querySelector(".addCartBtn").onclick = (event) => {
        event.stopPropagation(); // prevent double action
        addItem(product);
      }

      container.appendChild(productli);
    });
  })
  .catch(error => console.log('Error fetching products:', error));



// ===========================
// CART SYSTEM
// ===========================

// Localstorage Reference 
let memory = JSON.parse(localStorage.getItem("order"));
let yourOrder = memory?.length ? [...memory] : [];

// DOM Reference
let cart = document.getElementById("cart");
cart.innerHTML = yourOrder?.length ?? 0;

// Add To Cart Function
let addItem = (product) => {

  let basket = {
    id: product.id,
    quantity: 1,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail
  };

  // Check item already in cart
  let existing = yourOrder.find(item => item.id === basket.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    yourOrder.push(basket);
  }

  localStorage.setItem("order", JSON.stringify(yourOrder));

  cart.innerHTML = yourOrder.length;
};




