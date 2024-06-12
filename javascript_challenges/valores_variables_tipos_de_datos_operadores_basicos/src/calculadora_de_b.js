"use strict";
// Variables para peso (kg) y altura (metros)
let peso = 87; // Peso en kilogramos
let altura = 1.57; // Altura en metros
// Calcular BMI
let bmi = peso / (altura * altura);
// Imprimir BMI
console.log(`Tu BMI es: ${bmi.toFixed(2)}`);
// Interpretar BMI según estándares de la OMS
if (bmi < 18.5) {
    console.log("Tienes bajo peso.");
}
else if (bmi >= 18.5 && bmi < 25) {
    console.log("Tienes un peso normal.");
}
else if (bmi >= 25 && bmi < 30) {
    console.log("Tienes sobrepeso.");
}
else {
    console.log("Tienes obesidad.");
}
