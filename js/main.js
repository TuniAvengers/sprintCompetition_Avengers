
//SLIDER
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.slider-img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.classList.add('active');
            } else {
                image.classList.remove('active');
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 5000);
});


document.addEventListener("DOMContentLoaded", function () {
    function addOrder(id, nombre, precio, peso) {    
        const total = document.getElementById("total");
        const totalText = document.getElementById("total-text");
        totalText.classList.remove("hide");
        const listItem = document.createElement("li");
        //añadimos el id del producto al elemento li
        listItem.setAttribute("id", id);
        listItem.innerHTML = `
            <p>${nombre}</p>
            <p>${peso} kg</p>
            <p>${precio}€</p>
            <button class="btn btn-danger">x</button>
        `;
    
        document.getElementById("list-order").appendChild(listItem);
        let precioTotal = parseFloat(document.getElementById("total").innerHTML) + precio;
        total.innerHTML = precioTotal.toFixed(2);
    }
  // Fetch the JSON file
  fetch("js/producto.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .catch(function (err) {
      console.log("error: " + err);
    });

  // Append the data to the DOM
  function appendData(data) {
    const mainContainer = document.getElementById("display");
    for (let i = 0; i < data.productos.length; i++) {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
        <img src="${data.productos[i].imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.productos[i].nombre}</h5>
          <p class="card-text">Ración: ${data.productos[i].peso} kg</p>
          <p class="card-text">${data.productos[i].precio}€ IVA incl.</p>
          <button class="btn btn-primary">Comprar</button>
        </div>`;
        div.querySelector("button").addEventListener("click", function () {
            addOrder(data.productos[i].id, data.productos[i].nombre, parseFloat(data.productos[i].precio), parseFloat(data.productos[i].peso));
        });
      mainContainer.appendChild(div);
    }
  }

  
});
