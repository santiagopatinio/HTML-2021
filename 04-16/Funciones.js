function posibleMailValido(){
    var resultado = 0;
    var mail_ingresado = document.getElementById("mail").value;
    for(var i = 1; i < mail_ingresado.length-1; i++){
        if(mail_ingresado[i] == "@"){
            if(mail_ingresado[0]!="@" && mail_ingresado[mail_ingresado.length-1]!="@"){
                resultado = 1;
            }
            else{
                resultado = 0;
            }
        }
    }

    if(resultado == 1){
        document.getElementById("cuadro_respuesta_1").innerHTML = "Mail correctamente escrito";
        document.getElementById("cuadro_respuesta_1").style.color = "red";
        return true;
    }
    else{
        document.getElementById("cuadro_respuesta_1").innerHTML = "Error en el mail";
        document.getElementById("cuadro_respuesta_1").style.color = "red";
        return false;
    }
}

function posibleTelefonoValido(){
    var telefono_ingresado = document.getElementById("telefono").value;
    if(telefono_ingresado[0] == "1" && telefono_ingresado[1] == "1" && telefono_ingresado.length-2 == 8){
        document.getElementById("cuadro_respuesta_1").innerHTML = "Telefono correctamente escrito";
        document.getElementById("cuadro_respuesta_1").style.color = "red";
        return true;
    }
    else if(telefono_ingresado[0] == "0" && telefono_ingresado[1] == "1" && telefono_ingresado[2] == "1" && telefono_ingresado.length-3 == 8){
        document.getElementById("cuadro_respuesta_1").innerHTML = "Telefono correctamente escrito";
        document.getElementById("cuadro_respuesta_1").style.color = "red";
        return true;
    }
    else{
        document.getElementById("cuadro_respuesta_1").innerHTML = "Error en el telefono";
        document.getElementById("cuadro_respuesta_1").style.color = "red";
        return false;
    }  
}