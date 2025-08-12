    fetch('https://dummyjson.com/products/')
      .then(response => response.json())
      .then(data => {
        const products = data.products;
        const container = document.getElementById('product-container');

        products.forEach(product => {
          const productHTML = `
          <img src="${product.thumbnail}"alt="${product.title}">
            <h2>${product.title}</h2><br>
 
            <p><strong>Price:</strong>    $${product.price}</p>
            <p><strong>stock:</strong>     ${product.availabilityStatus}</p>
          `;
          const productli = document.createElement('li');
          productli.innerHTML = productHTML;
          container.appendChild(productli);
        });
      })
      .catch(error => console.error('Error fetching products:', error));



/* <p>${product.description}</p> <br></br> */


    