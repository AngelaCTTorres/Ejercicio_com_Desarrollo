function analizarTexto(texto) {
    var totalPalabras = 0;
    var longitudTotalPalabras = 0;
    var numOraciones = 0;
    var palabraMasLarga = "";
    var palabraActual = "";
    for (var i = 0; i < texto.length; i++) {
        var char = texto[i];
        /*Conteo de palabras y longitud total de palabras*/
        if (char.match(/[a-zA-Z]/)) {
            palabraActual += char;
        }
        else {
            if (palabraActual.length > 0) {
                totalPalabras++;
                longitudTotalPalabras += palabraActual.length;
                if (palabraActual.length > palabraMasLarga.length) {
                    palabraMasLarga = palabraActual;
                }
                palabraActual = "";
            }
            /* Conteo de oraciones*/
            if (char === '.') {
                numOraciones++;
            }
        }
    }
    /* Considerar la última palabra si no termina con un carácter especial*/
    if (palabraActual.length > 0) {
        totalPalabras++;
        longitudTotalPalabras += palabraActual.length;
        if (palabraActual.length > palabraMasLarga.length) {
            palabraMasLarga = palabraActual;
        }
    }
    var longitudMediaPalabras = totalPalabras > 0 ? longitudTotalPalabras / totalPalabras : 0;
    return {
        totalPalabras: totalPalabras,
        longitudMediaPalabras: longitudMediaPalabras,
        numOraciones: numOraciones,
        palabraMasLarga: palabraMasLarga
    };
}
function mainAnalisisTexto() {
    var texto = "hola  como estas me llamo angela torres trujillo"; /* Ingresa el texto aquí*/
    var resultado = analizarTexto(texto);
    console.log("N\u00FAmero total de palabras: ".concat(resultado.totalPalabras));
    console.log("Longitud media de las palabras: ".concat(resultado.longitudMediaPalabras.toFixed(2)));
    console.log("N\u00FAmero de oraciones: ".concat(resultado.numOraciones));
    console.log("Palabra m\u00E1s larga: ".concat(resultado.palabraMasLarga));
}
mainAnalisisTexto();
