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

var seg = document.getElementById("seg");
var prim = document.getElementById("prim");

var secCotiz = document.getElementById("cotizacion"); // seccion cotizacion
var formsCotiz = secCotiz.querySelectorAll("form");  // node list de todos los forms de la seccion cotizacion


seg.addEventListener("click", () => {

    var secCotiz = document.getElementById("cotizacion");
        
    var formActivo = secCotiz.querySelector(".activo");
        
    var formSiguiente = contenedor.querySelector(".activo + .desactivo");
    if(formSiguiente === null){
        formSiguiente = contenedor.querySelector(".desactivo:first-of-type");
    }
        
     formActivo.classList.remove("activo");
     formActivo.classList.add("desactivo");

     formSiguiente.classList.remove("desactivo");
     formSiguiente.classList.add("activo");      
        
    /* UTILIZACION DE SPLIT */
    /*
    var idElementoActivo = elementoActivo.id; //elemento-1 => elemento-2
    var descomponerID = idElementoActivo.split("-");
    var numeroElemento = Number(descomponerID[1]) + 1;
    var elementoSiguiente = contenedor.querySelector("#elemento-"+numeroElemento);
    console.log(elementoSiguiente);
    */
});

// quiero iterar sobre la node list formsCotiz de elementos form
// una node list solo se puede iterar con el metodo .forEach
// entonces solo uso el valor de length de formsCotiz

prim.addEventListener("click", () => {

for (var i = 0; i < formsCotiz.length; i ++){
   // console.log(formsCotiz.item(i).classList);

   if (formsCotiz.item(i).classList.contains("activo") === true){
    break;
   }
}

var posicionAnterior = i-1; // => la posicion del elemento desactivo anterior

    if(posicionAnterior === -1){
        posicionAnterior = formsCotiz.length-1; // => voy a la posicion del ultimo elemento
    }


    formsCotiz.item(i).classList.remove("activo");
    formsCotiz.item(i).classList.add("desactivo");

    formsCotiz.item(posicionAnterior).classList.remove("desactivo");
    formsCotiz.item(posicionAnterior).classList.add("activo");

});



}); // cierre del DOMcontentloaded


