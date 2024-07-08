var AgendaTelefonica = /** @class */ (function () {
    function AgendaTelefonica() {
        this.contactos = {};
    }
    AgendaTelefonica.prototype.agregarContacto = function (nombre, telefono) {
        this.contactos[nombre] = telefono;
    };
    AgendaTelefonica.prototype.buscarContacto = function (nombre) {
        if (this.contactos[nombre]) {
            console.log("El n\u00FAmero de tel\u00E9fono de ".concat(nombre, " es ").concat(this.contactos[nombre]));
        }
        else {
            console.log("El contacto ".concat(nombre, " no se encontr\u00F3."));
        }
    };
    return AgendaTelefonica;
}());
var agenda = new AgendaTelefonica(); /* Crear una nueva agenda telefónica*/
/* Añadir algunos contactos a la agenda*/
agenda.agregarContacto("Angela", "312206043");
agenda.agregarContacto("Juan", "3124567889");
agenda.agregarContacto("Maria", "123456788");
var nombreABuscar = "Angela"; /* Crear una variable que almacene el nombre de un contacto para buscar*/
/*Buscar un contacto en la agenda*/
agenda.buscarContacto(nombreABuscar);
