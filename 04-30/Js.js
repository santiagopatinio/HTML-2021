let margen_vertical = "1cm";
let margen_horizontal = "17.1cm";

function moverHaciaAbajo(){
    let cuadrado = document.getElementById("imagen");
    let nuevoValorDeMargenSuperior = parseInt(margen_vertical) + 1;
    margen_vertical = nuevoValorDeMargenSuperior + "cm";
    cuadrado.style.marginTop = margen_vertical;
}

function moverHaciaArriba() {
    let cuadrado= document.getElementById("imagen");
    let nuevoValorDeMargenInferior = parseInt(margen_vertical) - 1;
    margen_vertical = nuevoValorDeMargenInferior + "cm";
    cuadrado.style.marginTop = margen_vertical;
}

function moverHaciaDerecha(){
    let cuadrado = document.getElementById("imagen");
    let nuevoValorDeMargenIzquierdo = parseInt(margen_horizontal) + 1;
    margen_horizontal = nuevoValorDeMargenIzquierdo + "cm";
    cuadrado.style.marginLeft = margen_horizontal;
}

function moverHaciaIzquierda(){
    let cuadrado= document.getElementById("imagen");
    let nuevoValorDeMargenDerecho = parseInt(margen_horizontal) - 1;
    margen_horizontal = nuevoValorDeMargenDerecho + "cm";
    cuadrado.style.marginLeft = margen_horizontal;
}