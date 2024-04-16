
// Función que permite hacer redirecciones a paginas externas, aplicados en elementos svg e img del html
function ir(url){
    window.open(url, '_blank');
}

// Función que captura el texto en el input "email",valida si el formato de correo electronico es valido, si no lo es envía una alerta indicando que debe ingresar un formato de correo valido, y ubica de nuevo el foco del texto en el input; si el formato de correo es valido, envia una alerta agradeciendo por la suscripcion e imprime el correo electronico suscrito en la consola 

function suscribir(){
    let suscripcion = document.getElementById("email");
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    if (emailRegex.test(suscripcion.value)){
        alert("Gracias por suscribirse");
        console.log("Usuario suscrito:" + " " + suscripcion.value);
    }else{
        alert("Por favor ingrese un correo electrónico válido, ejemplo: usuario@dominio.com");
        document.getElementById("email").focus();
        

    }

};