
class AgendaTelefonica {
     private contactos: { [nombre: string]: string };
  
       constructor() {
           this.contactos = {};
       }

   
       agregarContacto(nombre: string, telefono: string): void {
           this.contactos[nombre] = telefono;
       }

   
       buscarContacto(nombre: string): void {
           if (this.contactos[nombre]) {
               console.log(`El número de teléfono de ${nombre} es ${this.contactos[nombre]}`);
           } else {
               console.log(`El contacto ${nombre} no se encontró.`);
           }

       }

   }

   
   
   const agenda = new AgendaTelefonica();/* Crear una nueva agenda telefónica*/
   
   /* Añadir algunos contactos a la agenda*/
   agenda.agregarContacto("Angela", "312206043");
   agenda.agregarContacto("Juan", "3124567889");
   agenda.agregarContacto("Maria", "123456788");
   
   
   const nombreABuscar = "Angela"; /* Crear una variable que almacene el nombre de un contacto para buscar*/
   
   /*Buscar un contacto en la agenda*/
   agenda.buscarContacto(nombreABuscar);


   