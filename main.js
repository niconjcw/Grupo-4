document.addEventListener("DOMContentLoaded", () => {
    var button = document.getElementById("botonSiguiente");
    
    button.addEventListener("click", () => {
        var contenedor = document.getElementById("banner");
        
        var elementoActivo = contenedor.querySelector(".activo");
        
        var elementoSiguiente = contenedor.querySelector(".activo + .desactivo");
        if(elementoSiguiente === null){
            elementoSiguiente = contenedor.querySelector(".desactivo:first-of-type");
        }
        
        elementoActivo.classList.remove("activo");
        elementoActivo.classList.add("desactivo");

        elementoSiguiente.classList.remove("desactivo");
        elementoSiguiente.classList.add("activo");   
    });

    //Carousel Testimonios//
    let index = 0;
const images = document.querySelectorAll('.carousel img');

setInterval(() => {
    index++;
    if (index > images.length - 1) {
    index = 0;
    }
    images.forEach(img => {
    img.classList.remove('active');
    });
    images[index].classList.add('active');
}, 10000);


});


