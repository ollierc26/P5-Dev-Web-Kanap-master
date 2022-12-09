fetch("http://localhost:3000/api/products")
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
    })
    .then(function (products) {
        for (let product of products) {
            console.log(product);
            let section = document.getElementById('items');
            section.insertAdjacentHTML('beforeend', `<a href="./product.html?id=${product._id}">
            <article>
              <img src="${product.imageUrl}" alt="${product.altTxt}">
               <h3 class="productName">${product.name}</h3>
            <p class="productDescription">${product.description}</p>
            </article>
          </a>`);
        }
    })
    .catch(function (err) {
        // Une erreur est survenue
    });
