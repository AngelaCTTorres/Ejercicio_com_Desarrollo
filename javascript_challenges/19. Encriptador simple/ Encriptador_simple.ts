function encriptarMensaje(mensaje: string): string {
       let mensajeEncriptado = "";
   
       for (let i = 0; i < mensaje.length; i++) {
           let char = mensaje[i];
   
           if (char >= 'a' && char <= 'z') {
               char = String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
           } else if (char >= 'A' && char <= 'Z') {
               char = String.fromCharCode(((char.charCodeAt(0) - 65 + 1) % 26) + 65);
           }
   
           mensajeEncriptado += char;
       }
   
       return mensajeEncriptado;
   }
   
   /*Función principal para ejecutar manualmente*/
   function mainEncriptador() {
       const mensaje = "Hola mundo"; /* Ingresa el mensaje aquí*/
   
       const mensajeEncriptado = encriptarMensaje(mensaje);
       console.log("Mensaje encriptado:", mensajeEncriptado);
   }
   
   // Ejecutar la función principal
   mainEncriptador();
   
   