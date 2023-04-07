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


// formulario cotizacion

var seg = document.getElementById("seg"); // boton siguiente
var prim = document.getElementById("prim"); // boton anterior

var secCotiz = document.getElementById("cotizacion"); // <seccion> cotizacion
var formsCotiz = secCotiz.querySelectorAll("form");  // node list de todos los <forms> de la <seccion> cotizacion


seg.addEventListener("click", () => {  // cuando clikeo el boton siguiente
        
    var formActivo = secCotiz.querySelector(".visible");  // form que tenga clase "visible"
        
    var formSiguiente = secCotiz.querySelector(".visible + .invisible"); // el form que le sigue al que tiene clase visible

    /*
    if(formSiguiente === null){  // si llega al ultimo form del conjunto de secCotiz
        formSiguiente = formsCotiz.querySelector(".invisible:first-of-type"); // desactiva el primer form??
    }  // esto es para que vuelva a empezar (?)
    */
        
     formActivo.classList.remove("visible");     // le saco la clase visible al primer form que es el que la tiene
     formActivo.classList.add("invisible");     // le doy clase invisible

     formSiguiente.classList.remove("invisible");  // al form siguiente le saco .invisible
     formSiguiente.classList.add("visible");        // y le doy .visible
        
});

// quiero iterar sobre la node list formsCotiz de elementos form
// una node list solo se puede iterar con el metodo .forEach
// entonces solo uso el valor de length de formsCotiz

prim.addEventListener("click", () => {

    for (var i = 0; i < formsCotiz.length; i ++){  // los forms dentro de la seccion secCotiz
    // console.log(formsCotiz.item(i).classList);

    if (formsCotiz.item(i).classList.contains("visible") === true){
        break;
    }
    }

    var posicionAnterior = i-1; // => la posicion del elemento desactivo anterior

    if(posicionAnterior === -1){
        posicionAnterior = formsCotiz.length-1; // => voy a la posicion del ultimo elemento
    }


    formsCotiz.item(i).classList.remove("visible");
    formsCotiz.item(i).classList.add("invisible");

    formsCotiz.item(posicionAnterior).classList.remove("invisible");
    formsCotiz.item(posicionAnterior).classList.add("visible");

});



}); // cierre del DOMcontentloaded


