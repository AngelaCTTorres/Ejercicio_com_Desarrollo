
class LanzamientoDeDados {
       private dado1: number;
       private dado2: number;
   
       constructor() {
           this.dado1 = 0;
           this.dado2 = 0;
       }
   
       private lanzarDado(): number {
           return Math.floor(Math.random() * 6) + 1;
       }
   
       public lanzarDados(): void {
           this.dado1 = this.lanzarDado();
           this.dado2 = this.lanzarDado();
       }
   
       public calcularSuma(): number {
           return this.dado1 + this.dado2;
       }
   
       public imprimirResultado(): void {
           console.log(`Dado 1: ${this.dado1}`);
           console.log(`Dado 2: ${this.dado2}`);
           console.log(`Suma: ${this.calcularSuma()}`);
       }
   }
   
   /*Crear una instancia de LanzamientoDeDados*/
   const simulador = new LanzamientoDeDados();
   
   /*Lanzar los dados*/
   simulador.lanzarDados();
   
   /*Imprimir los valores de los dados y su suma*/
   simulador.imprimirResultado();
   