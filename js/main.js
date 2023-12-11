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

// //CODIGO SLIDER
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("slide");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos
// }

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("slide");

//   // Oculta todas las diapositivas
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.opacity = 0;
//   }

//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }

//   // Muestra la diapositiva actual con un efecto de fade in
//   fadeIn(slides[slideIndex-1], 2000);

//   // Establece la opacidad de las diapositivas anteriores para mantenerlas superpuestas
//   for (i = 0; i < slides.length; i++) {
//     if (i !== slideIndex - 1) {
//       slides[i].style.opacity = 1;
//     }
//   }

//   setTimeout(showSlides, 4000); // Cambia la imagen cada 4 segundos (2s fade in + 2s superposición)
// }

// function fadeIn(element, duration) {
//   let opacity = 0;
//   let interval = 50;
//   let gap = interval / duration;

//   function update() {
//     opacity += gap;

//     if (opacity >= 1) {
//       element.style.opacity = 1;
//       clearInterval(fadeInterval);
//     } else {
//       element.style.opacity = opacity;
//     }
//   }

//   let fadeInterval = setInterval(update, interval);
// }

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("DOMContentLoaded", function () {
        // Obtén las imágenes y el contenedor del slider
        var slides = document.querySelectorAll(".slide");
        var currentSlide = 0;

        // Muestra el primer slide
        slides[currentSlide].style.display = "block";

        // Función para cambiar al siguiente slide con fade
        function nextSlide() {
            slides[currentSlide].style.animation = "fadeout 1s";
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.animation = "fadein 1s";
            slides[currentSlide].style.display = "block";
            setTimeout(function () {
                slides[currentSlide].style.display = "none";
            }, 2000); // Tiempo de espera antes de ocultar el slide anterior
        }

        // Configura la transición automática cada 3 segundos (ajusta según tus necesidades)
        setInterval(nextSlide, 4000);
    });
});
