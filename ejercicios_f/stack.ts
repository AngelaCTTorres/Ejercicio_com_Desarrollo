//Angela consuelo torres trujillo Grupo musk estregable.

class Persona {
       constructor(
           private edad: number,
           private nombre: string,
           private apellido: string,
           private profesion: string
       ) {}
   
       getEdad(): number {
           return this.edad;
       }
   
       getNombre(): string {
           return this.nombre;
       }
   
       getApellido(): string {
           return this.apellido;
       }
   
       getProfesion(): string {
           return this.profesion;
       }
   }
   
   // Implementación de la clase Stack
   class Stack<T> {
       private items: T[] = [];
   
       push(element: T): void {
           this.items.push(element);
       }
   
       pop(): T | undefined {
           return this.items.pop();
       }
   
       peek(): T | undefined {
           return this.items[this.items.length - 1];
       }
   
       isEmpty(): boolean {
           return this.items.length === 0;
       }
   
       size(): number {
           return this.items.length;
       }
   
       clear(): void {
           this.items = [];
       }
   }
   
   // Creación de una instancia de Stack para personas
   const personaStack = new Stack<Persona>();
   
   personaStack.push(new Persona(30, 'Jhon', 'Pérez', 'Ingeniero'));
   personaStack.push(new Persona(25, 'Estefa', 'Gómez', 'Doctora'));
   personaStack.push(new Persona(28, 'Amelia', 'Torres', 'Desarrolladora de software'));
   personaStack.push(new Persona(30, 'Juan', 'Pérez', 'Ingeniero'));
   personaStack.push(new Persona(25, 'María', 'Gómez', 'Doctora'));
   personaStack.push(new Persona(28, 'Angela', 'Torres', 'Desarrolladora de software'));
   
   // Mostrar la última persona en la pila (peek)
   let persona = personaStack.peek();
   if (persona) {
       console.log(`${persona.getNombre()} ${persona.getApellido()}, ${persona.getProfesion()}`);
   }
   
   // Sacar y mostrar la persona eliminada de la pila (pop)
   persona = personaStack.pop();
   if (persona) {
       console.log(`${persona.getNombre()} ${persona.getApellido()}, ${persona.getProfesion()}`);
   }
   
   // Mostrar el tamaño actual de la pila y si está vacía
   console.log(personaStack.size());
   console.log(personaStack.isEmpty());
   
   // Limpiar la pila y verificar si está vacía después de limpiar
   personaStack.clear();
   console.log(personaStack.isEmpty());
   