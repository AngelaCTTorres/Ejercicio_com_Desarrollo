function columnaExcel(nombreColumna) {
    var numeroColumna = 0;
    for (var i = 0; i < nombreColumna.length; i++) {
        var char = nombreColumna[i];
        var valor = char.charCodeAt(0) - 64;
        numeroColumna = numeroColumna * 26 + valor;
    }
    return numeroColumna;
}
function mainColumnaExcel() {
    var nombreColumna = "CA"; /* Ingresa la columna aquí*/
    var numeroColumna = columnaExcel(nombreColumna);
    console.log("El n\u00FAmero de la columna \"".concat(nombreColumna, "\" es: ").concat(numeroColumna));
}
mainColumnaExcel();
