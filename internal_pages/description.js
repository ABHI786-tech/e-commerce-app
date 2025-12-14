// Getting product id from URL
// Example: description.html?id=5
let searchParams = new URLSearchParams(window.location.search);
let productId = searchParams.get("id");

// Just checking if id is coming or not
console.log("Product ID:", productId);

// If no id found, stop execution
if (!productId) {
  document.getElementById("pro-detail").innerHTML = "<p>Product not found</p>";
}

// Fetch single product details using id
fetch(`https://dummyjson.com/products/${productId}`)
  .then(async (res) => {
    let data = await res.json();
    console.log("Product Data:", data);

    let parent = document.getElementById("pro-detail");

    // Creating product description UI
    // Keeping it simple so it is easy to understand
    let child = `
      <img src="${data.thumbnail}" alt="${data.title}">

      <h3 class="fw-bold">${data.title}</h3>

      <p><b>Description:</b> ${data.description}</p>
      <p><b>Brand:</b> ${data.brand}</p>
      <p><b>Category:</b> ${data.category}</p>

      <p><b>Price:</b> $${data.price}</p>
      <p><b>Rating:</b> ${data.rating} ⭐</p>

      <p><b>Availability:</b> ${
        data.stock > 0 ? "In Stock" : "Out of Stock"
      }</p>

      <!-- simple action button -->
      <button class="btn btn-primary mt-3">
        Add to Cart
      </button>
    `;

    parent.innerHTML = child;
  })
  .catch((err) => {
    console.log("Error while fetching product:", err);

    let parent = document.getElementById("pro-detail");
    parent.innerHTML = `
      <p class="text-danger">
        Unable to load product details. Please try again later.
      </p>
    `;
  });
