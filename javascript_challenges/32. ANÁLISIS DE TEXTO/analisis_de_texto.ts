function analizarTexto(texto: string) {
       let totalPalabras = 0;
       let longitudTotalPalabras = 0;
       let numOraciones = 0;
       let palabraMasLarga = "";
   
       let palabraActual = "";
       for (let i = 0; i < texto.length; i++) {
           const char = texto[i];
   
           /*Conteo de palabras y longitud total de palabras*/
           if (char.match(/[a-zA-Z]/)) { 
               palabraActual += char;
           } else {
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
   
       const longitudMediaPalabras = totalPalabras > 0 ? longitudTotalPalabras / totalPalabras : 0;
   
       return {
           totalPalabras,
           longitudMediaPalabras,
           numOraciones,
           palabraMasLarga
       };
   }
   
  
   function mainAnalisisTexto() {
       const texto = "hola  como estas me llamo angela torres trujillo"; /* Ingresa el texto aquí*/
   
       const resultado = analizarTexto(texto);
   
       console.log(`Número total de palabras: ${resultado.totalPalabras}`);
       console.log(`Longitud media de las palabras: ${resultado.longitudMediaPalabras.toFixed(2)}`);
       console.log(`Número de oraciones: ${resultado.numOraciones}`);
       console.log(`Palabra más larga: ${resultado.palabraMasLarga}`);
   }

   mainAnalisisTexto();
   