// ===============================
// FETCH PRODUCTS (Dummy API)
// ===============================

fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {

    const products = data.products;
    const container = document.getElementById("product-container");

    products.forEach(product => {

      const li = document.createElement("li");

      li.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>Price: $${product.price}</p>
        <p>${product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
        <button class="addCartBtn">Add to Cart</button>
      `;

      // 🔹 clicking card → product detail page
      li.onclick = () => {
        product_detail(product.id);
      };

      // 🔹 add to cart button (stop bubbling)
      li.querySelector(".addCartBtn").onclick = (e) => {
        e.stopPropagation();
        addToCart(product);
      };

      container.appendChild(li);
    });
  })
  .catch(err => {
    console.log("Error while fetching products", err);
  });


// ===============================
// PRODUCT DETAIL REDIRECT
// ===============================

function product_detail(id) {
  window.location.href = `${window.location.origin||"file:///D:/New%20folder17-11-25"}/e-commerce-app/internal_pages/discription.html?id=${id}`;
}


// ===============================
// CART LOGIC
// ===============================

let savedCart = JSON.parse(localStorage.getItem("order"));
let cartItems = savedCart ? savedCart : [];

let cartBtn = document.getElementById("cart");
cartBtn.innerText = cartItems.length;

function addToCart(product) {

  let item = {
    id: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
    quantity: 1
  };

  let found = cartItems.find(p => p.id === item.id);

  if (found) {
    found.quantity += 1;
  } else {
    cartItems.push(item);
  }

  localStorage.setItem("order", JSON.stringify(cartItems));
  cartBtn.innerText = cartItems.length;
}


// ===============================
// LOGIN / PROFILE VISIBILITY
// ===============================

const loginBtn = document.getElementById("login");
const loginLink = loginBtn.querySelector("a");
const profileBtn = document.getElementById("profile");
const cart = document.getElementById("cart");

function isLoggedIn() {
  return localStorage.getItem("accessToken") !== null;
}

function logoutUser() {
  const confirmLogout = confirm("Are you sure you want to logout?");

  if (confirmLogout) {
    localStorage.removeItem("accessToken");

    window.location.href =
      `${window.location.origin|| "file:///D:/New%20folder17-11-25"}/e-commerce-app/index.html`;
  }
}

function toggleAuthButtons() {
  if (isLoggedIn()) {
    // change Login → Logout
    loginLink.innerText = "Logout";
    loginLink.href = "#";

    loginLink.onclick = function (e) {
      e.preventDefault();
      logoutUser();
    };

    profileBtn.style.display = "inline-block";
  } else {
    // normal login
    cart.style.display = "none";
    loginLink.innerText = "Login";
    // loginLink.href = `${window.location.origin||"file:///D:/New%20folder17-11-25"}/e-commerce-app/login.html`;
    loginLink.onclick = null;

    profileBtn.style.display = "none";
  }
}

// call on page load
toggleAuthButtons();