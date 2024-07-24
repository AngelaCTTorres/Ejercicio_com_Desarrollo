var LanzamientoDeDados = /** @class */ (function () {
    function LanzamientoDeDados() {
        this.dado1 = 0;
        this.dado2 = 0;
    }
    LanzamientoDeDados.prototype.lanzarDado = function () {
        return Math.floor(Math.random() * 6) + 1;
    };
    LanzamientoDeDados.prototype.lanzarDados = function () {
        this.dado1 = this.lanzarDado();
        this.dado2 = this.lanzarDado();
    };
    LanzamientoDeDados.prototype.calcularSuma = function () {
        return this.dado1 + this.dado2;
    };
    LanzamientoDeDados.prototype.imprimirResultado = function () {
        console.log("Dado 1: ".concat(this.dado1));
        console.log("Dado 2: ".concat(this.dado2));
        console.log("Suma: ".concat(this.calcularSuma()));
    };
    return LanzamientoDeDados;
}());
/*Crear una instancia de LanzamientoDeDados*/
var simulador = new LanzamientoDeDados();
/*Lanzar los dados*/
simulador.lanzarDados();
/*Imprimir los valores de los dados y su suma*/
simulador.imprimirResultado();
