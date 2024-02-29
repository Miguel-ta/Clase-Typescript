"use strict";
const persona12 = {
    id: 1,
    name: 'Miguel',
    surname: 'Negro',
    birthday: new Date(1994, 6, 9)
};
console.log(persona12);
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }
}
class Empleado extends Persona {
    constructor(nombre, edad, sueldo) {
        super(nombre, edad);
        this.sueldo = sueldo;
    }
    imprimir() {
        super.imprimir();
        console.log(`Sueldo: ${this.sueldo}`);
    }
    pagaImpuestos() {
        if (this.sueldo > 5000)
            console.log(`${this.nombre} debe pagar impuestos`);
        else
            console.log(`${this.nombre} no debe pagar impuestos`);
    }
}
const persona1 = new Persona('Juan', 44);
persona1.imprimir();
const empleado1 = new Empleado('Ana', 22, 7000);
empleado1.imprimir();
empleado1.pagaImpuestos();
