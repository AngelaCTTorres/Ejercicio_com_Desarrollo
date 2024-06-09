//Angela consuelo torres trujillo Grupo musk estregable.
var Persona = /** @class */ (function () {
    function Persona(edad, nombre, apellido, profesion) {
        this.edad = edad;
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
    }
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getProfesion = function () {
        return this.profesion;
    };
    return Persona;
}());
//implemetacion stack
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (element) {
        this.items.push(element);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.clear = function () {
        this.items = [];
    };
    return Stack;
}());
var personaStack = new Stack();
personaStack.push(new Persona(30, 'jhon', 'Pérez', 'Ingeniero'));
personaStack.push(new Persona(25, 'estefa', 'Gómez', 'Doctora'));
personaStack.push(new Persona(28, 'amelia', 'torres', 'Desarrolladora de software'));
personaStack.push(new Persona(30, 'Juan', 'Pérez', 'Ingeniero'));
personaStack.push(new Persona(25, 'María', 'Gómez', 'Doctora'));
personaStack.push(new Persona(28, 'Angela', 'torres', 'Desarrolladora de software'));
var persona = personaStack.peek();
if (persona) {
    console.log("".concat(persona.getNombre(), " ").concat(persona.getApellido(), ", ").concat(persona.getProfesion()));
}
persona = personaStack.pop();
if (persona) {
    console.log("".concat(persona.getNombre(), " ").concat(persona.getApellido(), ", ").concat(persona.getProfesion()));
    console.log(personaStack.size());
    console.log(personaStack.isEmpty());
    personaStack.clear();
    console.log(personaStack.isEmpty());
}
