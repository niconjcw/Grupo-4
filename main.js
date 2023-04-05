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


// formlario cotizacion

var seg = document.getElementById("seg");
var prim = document.getElementById("prim");

var secCotiz = document.getElementById("cotizacion"); // seccion cotizacion
var formsCotiz = secCotiz.querySelectorAll("form");  // node list de todos los forms de la seccion cotizacion

// console.log(formsCotiz);

// .toggle agrega o quita la clase especificada

// quiero iterar sobre la node list formsCotiz de elementos form
// una node list solo se puede iterar con el metodo .forEach

formsCotiz.forEach(
    function(currentValue, currentIndex, thisE){
        console.log(currentValue, currentIndex, thisE);
    }
)



});


