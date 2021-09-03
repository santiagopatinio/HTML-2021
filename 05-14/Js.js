let margen_vertical = "1cm";
let margen_horizontal = "17.1cm";

function moverHaciaAbajo(){
    let imagen = document.getElementById("imagen");
    let nuevoValorDeMargenSuperior = parseInt(margen_vertical) + 1;
    margen_vertical = nuevoValorDeMargenSuperior + "cm";
    imagen.style.marginTop = margen_vertical;
}

function moverHaciaArriba() {
    let imagen= document.getElementById("imagen");
    let nuevoValorDeMargenInferior = parseInt(margen_vertical) - 1;
    margen_vertical = nuevoValorDeMargenInferior + "cm";
    imagen.style.marginTop = margen_vertical;
}

function moverHaciaDerecha(){
    let imagen = document.getElementById("imagen");
    let nuevoValorDeMargenIzquierdo = parseInt(margen_horizontal) + 1;
    margen_horizontal = nuevoValorDeMargenIzquierdo + "cm";
    imagen.style.marginLeft = margen_horizontal;
}

function moverHaciaIzquierda(){
    let imagen= document.getElementById("imagen");
    let nuevoValorDeMargenDerecho = parseInt(margen_horizontal) - 1;
    margen_horizontal = nuevoValorDeMargenDerecho + "cm";
    imagen.style.marginLeft = margen_horizontal;
}

function mismaPosicion(){
    let cuadrado = document.getElementById("cuadrado");

    let posicionxImagen = imagen.getBoundingClientRect().x;
    let posicionyImagen = imagen.getBoundingClientRect().y;

    if(posicionxImagen >=270 && posicionxImagen <= 315 && posicionyImagen >= 310 && posicionyImagen <= 390){
        cuadrado.style.display = "none";
    }
}