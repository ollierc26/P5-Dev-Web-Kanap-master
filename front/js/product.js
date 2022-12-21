var paramsString = "http://127.0.0.1:5500/front/html/product.html?id=107fb5b75607497b96722bda5b504926";
var url = new URL(paramsString);
var id = url.searchParams.get("id");
console.log(id);

fetch("http://localhost:3000/api/products")
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
    })
    
    .then(function(value) {
        console.log(value);
      })

    .catch(function (err) {
        // Une erreur est survenue
    });