let tabla = document.getElementById("tabla");
let trinputs;
let input1;
let input2;
let input3;

function nuevosDatos(){
    trinputs = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    input1 = document.createElement("input");
    input2 = document.createElement("input");
    input3 = document.createElement("input");

    input1.setAttribute("type", "text");
    td1.appendChild(input1);
    input2.setAttribute("type", "number");
    td2.appendChild(input2);
    input3.setAttribute("type", "text");
    td3.appendChild(input3);

    trinputs.appendChild(td1);
    trinputs.appendChild(td2);
    trinputs.appendChild(td3);

    tabla.appendChild(trinputs);

    document.getElementById("nuevosDatos").style.visibility = "hidden";
    document.getElementById("ingresar").style.visibility = "visible";
    document.getElementById("ingresar").style.display = "inline-block";
}

function ingresar(){
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    td1.innerHTML = input1.value;
    td2.innerHTML = input2.value;
    td3.innerHTML = input3.value;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tabla.appendChild(tr);
    trinputs.remove();

    document.getElementById("nuevosDatos").style.visibility = "visible";
    document.getElementById("ingresar").style.display = "none";
}

function cambiarEstilo(){
    $("#botonQuery").css("background-color","paleturquoise");
    $("#botonQuery").css("height","30px");
    $("#botonQuery").css("font-style","italic");
}

function mostrarDatos(){
    let colorFondo = $("#botonQuery").css("background-color");
    let altura = $("#botonQuery").css("height");
    let italica = $("#botonQuery").css("font-style");

    let mensaje = "El elemento modificado es el boton 'Cambiar Estilo'" + "\n";
    mensaje+= "El backgorund-color ahora es: " + colorFondo + "\n";
    mensaje+= "El height ahora es: " + altura + "\n";
    mensaje+= "El font-style ahora es: " + italica + "\n"

    alert(mensaje);
}