"use strict";
//Angela consuelo torres trujillo Grupo musk estregable.
class Persona {
    constructor(edad, nombre, apellido, profesion) {
        this.edad = edad;
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
    }
    getEdad() {
        return this.edad;
    }
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getProfesion() {
        return this.profesion;
    }
}
//implemetacion stack
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
}
const personaStack = new Stack();
personaStack.push(new Persona(30, 'jhon', 'Pérez', 'Ingeniero'));
personaStack.push(new Persona(25, 'estefa', 'Gómez', 'Doctora'));
personaStack.push(new Persona(28, 'amelia', 'torres', 'Desarrolladora de software'));
personaStack.push(new Persona(30, 'Juan', 'Pérez', 'Ingeniero'));
personaStack.push(new Persona(25, 'María', 'Gómez', 'Doctora'));
personaStack.push(new Persona(28, 'Angela', 'torres', 'Desarrolladora de software'));
let persona = personaStack.peek();
if (persona) {
    console.log(`${persona.getNombre()} ${persona.getApellido()}, ${persona.getProfesion()}`);
}
persona = personaStack.pop();
if (persona) {
    console.log(`${persona.getNombre()} ${persona.getApellido()}, ${persona.getProfesion()}`);
    console.log(personaStack.size());
    console.log(personaStack.isEmpty());
    personaStack.clear();
    console.log(personaStack.isEmpty());
}
