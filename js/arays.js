"use strict";
let lista = ['Riohacha', 'Miguel', 'Daniela', 'Moto', 'Duster'];
console.log(lista);
console.log(lista[2]);
lista[2] = 'Lizeth';
console.log(lista[2]);
lista.push('Taxi');
console.log(lista);
lista.pop();
console.log(lista);
lista.shift();
console.log(lista);
lista.unshift('Desarrollo');
console.log(lista);
lista.splice(1, 0, 'Web');
console.log(lista);
// Añadir un Array a otro array existente usando metodos
let numero1 = [1, 2, 3, 4, 5, 6, 7];
let numero2 = [8, 9, 10];
numero1.push.apply(numero1, numero2);
console.log(numero1);
// segundo Metodo 
let numero3 = [11, 12, 13, 14];
let nuevoarreglo = numero1.concat(numero3);
console.log(nuevoarreglo);
