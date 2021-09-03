function areaCirculo(){
    var radio = document.getElementById("circulo").value;
    var resultado = parseFloat(radio) * parseFloat(radio) * Math.PI;
    document.getElementById("resultado1").innerHTML = resultado;
}

function areaEsfera(){
    var radio = document.getElementById("esfera").value;
    var resultado = parseFloat(radio) * parseFloat(radio) * Math.PI * 4;
    document.getElementById("resultado2").innerHTML = resultado;
}

function areaCuadrado(){
    var lado = document.getElementById("cuadrado").value;
    var resultado = parseFloat(lado) * parseFloat(lado);
    document.getElementById("resultado3").innerHTML = resultado;
}

function areaCubo(){
    var lado = document.getElementById("cubo").value;
    var resultado = parseFloat(lado) * parseFloat(lado) * 6;
    document.getElementById("resultado4").innerHTML = resultado;
}

function areaTriangulo(){
    var base = document.getElementById("triangulo1").value;
    var altura = document.getElementById("triangulo2").value;
    var resultado = (parseFloat(base) * parseFloat(altura)) / 2;
    document.getElementById("resultado5").innerHTML = resultado;
}