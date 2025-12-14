// Getting cart data from localStorage
// Cart items are saved when user clicks "Add to Cart"
let store = localStorage.getItem("order");

// Converting string data to JS object
let itemData = store ? JSON.parse(store) : [];

// Parent div where cart items will be shown
let cartParent = document.getElementById("cartItem");

// If cart is empty
if (itemData.length === 0) {
  cartParent.innerHTML = "<p>Your cart is empty</p>";
}

// Looping through each cart item
itemData.forEach((item) => {

  // Creating cart item HTML
  let cartChild = `
    <div class="cart-item">
      <img src="${item.thumbnail}" alt="${item.title}">
      
      <div>
        <h5>${item.title}</h5>
        <p>Quantity: ${item.quantity}</p>
        <p>Price: $${item.price}</p>
      </div>

      <button class="remove-btn" onclick="removeItem(${item.id})">
        Remove
      </button>
    </div>
  `;

  // Appending item to cart page
  cartParent.innerHTML += cartChild;
});


// ==============================
// REMOVE ITEM FROM CART
// ==============================

function removeItem(id) {
  // Filtering cart items except the clicked one
  let updatedCart = itemData.filter(item => item.id !== id);

  // Updating localStorage
  localStorage.setItem("order", JSON.stringify(updatedCart));

  // Reload page to reflect changes (simple approach)
  location.reload();
}


// ==============================
// CLEAR ALL CART ITEMS
// ==============================

function clearAllCart() {
  // Removing cart from localStorage
  localStorage.removeItem("order");

  // Reloading page
  location.reload();
}
