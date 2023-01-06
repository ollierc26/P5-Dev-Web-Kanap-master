let currentUrl = window.location.href;
let url = new URL(currentUrl);
let id = url.searchParams.get("id");
console.log(id);


fetch(`http://localhost:3000/api/products/${id}`)
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })

  .then(function (product) {
    let article = document.querySelector("article");
    let image = article.querySelector("img");
    image.setAttribute("src", product.imageUrl);

    let name = article.querySelector("h1");
    name.innerHTML = product.name;

    let price = document.getElementById('price')
    price.innerHTML = product.price;

    let description = document.getElementById('description')
    description.innerHTML = product.description;

  
    let select = document.getElementById('colors')
    let colors = product.colors
    console.log(colors)
    for(let color of colors) {
    
    select.insertAdjacentHTML('beforeend', `<option value="${color}">${color}</option>`);
    }


    })


      .catch(function (err) {
        // Une erreur est survenue
      });