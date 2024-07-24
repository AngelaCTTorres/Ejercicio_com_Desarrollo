function verificarContrasena(contrasena) {
    var errores = [];
    if (contrasena.length < 8) {
        errores.push("La contraseña debe tener al menos 8 caracteres de longitud.");
    }
    if (!/[A-Z]/.test(contrasena)) {
        errores.push("Debe contener al menos una letra mayúscula.");
    }
    if (!/[a-z]/.test(contrasena)) {
        errores.push("Debe contener al menos una letra minúscula.");
    }
    if (!/[0-9]/.test(contrasena)) {
        errores.push("Debe contener al menos un número.");
    }
    return errores;
}
/* Función principal para ejecutar manualmente*/
function mainVerificador() {
    var contrasena = "19970202Aa"; // Ingresa la contraseña 
    var errores = verificarContrasena(contrasena);
    if (errores.length === 0) {
        console.log("Contraseña válida.");
    }
    else {
        console.log("La contraseña no cumple con los siguientes requisitos:");
        errores.forEach(function (error) { return console.log(error); });
    }
}
// Ejecutar la función principal
mainVerificador();
