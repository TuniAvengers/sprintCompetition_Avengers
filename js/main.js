import { slider } from "./slider.js";
//SLIDER
//document.addEventListener("DOMContentLoaded", slider);

document.addEventListener("DOMContentLoaded", function () {
  slider();

  function basketContent() {
    const full = document.getElementById("full-basket");
    const empty = document.getElementById("empty-basket");
    if (itemsTotal() < 1) {
      full.classList.add("hide");
      empty.classList.remove("hide");
    } else {
      full.classList.remove("hide");
      empty.classList.add("hide");
    }
  }

  function addOrder(id, nombre, precio, peso) {
    //const total = document.getElementById("total");
    const totalText = document.getElementById("total-text");
    totalText.classList.remove("hide");
    const listItem = document.createElement("li");
    //añadimos el id del producto al elemento li
    listItem.setAttribute("id", id);
    listItem.classList.add("product");
    listItem.innerHTML = `
            <p>${nombre}</p>
            <p>${peso} kg</p>
            <p class="precio">${precio}€</p>
            <button class="btn btn-danger">x</button>
        `;
    listItem.querySelector("button").addEventListener("click", function () {
      eliminarElementoPorId(id);
      precioTotal();
      document.getElementById("counter").innerHTML = itemsTotal();
      if (itemsTotal() < 1) {
        document.getElementById("order").classList.add("hide");
      }
      basketContent();
    });

    document.getElementById("list-order").appendChild(listItem);
    precioTotal();
    document.getElementById("counter").innerHTML = itemsTotal();
    basketContent();
  }

  function precioTotal() {
    let precioTotal = 0;
    const precios = document.querySelectorAll(".precio");
    precios.forEach((precio) => {
      precioTotal += parseFloat(precio.innerHTML);
    });
    document.getElementById("total").innerHTML = precioTotal.toFixed(2);
  }

  function itemsTotal() {
    //calculamos el numero de elementos con clase producto
    const items = document.querySelectorAll(".product");
    return items.length;
  }
  
  //Fetch data from JSON file
  fetch("/js/producto.json")
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
        addOrder(
          data.productos[i].id,
          data.productos[i].nombre,
          parseFloat(data.productos[i].precio),
          parseFloat(data.productos[i].peso)
        );
      });
      mainContainer.appendChild(div);
    }
  }
});

function eliminarElementoPorId(id) {
  const elemento = document.getElementById(id);

  if (elemento) {
    // Si el elemento existe, lo eliminamos
    elemento.parentNode.removeChild(elemento);
  } else {
    console.log(`No se encontró un elemento con el id ${id}`);
  }
}

document.getElementById("basket").addEventListener("click", function () {
  document.getElementById("order").classList.toggle("hide");
});
