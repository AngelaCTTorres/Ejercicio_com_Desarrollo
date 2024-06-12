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
//implemetacion stack
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



const personaStack = new Stack<Persona>();

personaStack.push(new Persona(30, 'jhon', 'Pérez', 'Ingeniero'));
personaStack.push(new Persona(25, 'estefa', 'Gómez', 'Doctora'));
personaStack.push(new Persona(28, 'amelia', 'torres', 'Desarrolladora de software'));
personaStack.push(new Persona(30, 'Juan', 'Pérez', 'Ingeniero'));
personaStack.push(new Persona(25, 'María', 'Gómez', 'Doctora'));
personaStack.push(new Persona(28, 'Angela', 'torres', 'Desarrolladora de software'));


let personaa = personaStack.peek();

if (personaa) {
    console.log(`${personaa.getNombre()} ${personaa.getApellido()}, ${personaa.getProfesion()}`); 
}

personaa = personaStack.pop();
if (personaa) {
    console.log(`${personaa.getNombre()} ${personaa.getApellido()}, ${personaa.getProfesion()}`);

console.log(personaStack.size()); 
console.log(personaStack.isEmpty()); 

personaStack.clear();
console.log(personaStack.isEmpty()); 

}





