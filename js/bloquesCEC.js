"use strict";
// Condicionales  IF/
let palabra = 'lase1';
if (palabra == 'Clase1') {
    console.log('estube en mi primera clase');
}
if (palabra != 'Clase1') {
    console.log('falte a mi primera clase');
}
// Condicionales  IF/ Else
let num1 = 5;
let num2 = 5;
if (num1 == num2) {
    console.log('Numeros Iguales');
}
else {
    console.log('numeros no son Iguales');
}
// Condicionales if,else If
let numero = 1;
if (numero > 0) {
    console.log(`el numero ${numero} es positivo`);
}
else if (numero < 0) {
    console.log(`el numero ${numero} es negativo`);
}
else {
    console.log(`el numero es ${numero}`);
}
// Controlando Errores
let a = 20;
let b = 5;
try {
    let f = a / b;
    console.log('resultado de la divicion es: ' + f);
}
catch (error) {
    console.error(error);
}
// Bucle While
let i = 1;
while (i <= 10) {
    console.log(`contador ${i}`);
    i++;
}
