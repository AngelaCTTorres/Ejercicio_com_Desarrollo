"use strict";
// Función para convertir de Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
// Función para convertir de Fahrenheit a Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
// Ejemplo de uso
let temperaturaCelsius = 25;
let temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);
console.log(`${temperaturaCelsius} grados Celsius equivalen a ${temperaturaFahrenheit.toFixed(2)} grados Fahrenheit.`);
// Convertir de Fahrenheit a Celsius
let temperaturaF = 77; // 77 grados Fahrenheit
let temperaturaC = fahrenheitToCelsius(temperaturaF);
console.log(`${temperaturaF} grados Fahrenheit equivalen a ${temperaturaC.toFixed(2)} grados Celsius.`);
