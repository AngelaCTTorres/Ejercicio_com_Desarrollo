function columnaExcel(nombreColumna: string): number {
    let numeroColumna = 0;

    for (let i = 0; i < nombreColumna.length; i++) {
        const char = nombreColumna[i];
        const valor = char.charCodeAt(0) - 64; 
        numeroColumna = numeroColumna * 26 + valor;
    }

    return numeroColumna;
}


function mainColumnaExcel() {
    const nombreColumna = "CA"; /* Ingresa la columna aquí*/

    const numeroColumna = columnaExcel(nombreColumna);
    console.log(`El número de la columna "${nombreColumna}" es: ${numeroColumna}`);
}


mainColumnaExcel();
