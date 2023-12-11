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
    const mainContainer = document.querySelector(".display");
    for (let i = 0; i < data.productos.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = `<div class="card">
        <img src="${data.productos[i].imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.productos[i].nombre}</h5>
          <p class="card-text">${data.productos[i].precio}€</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>`;
        mainContainer.appendChild(div);
    }
}



//CODIGO SLIDER
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos
}