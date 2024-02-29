let myBoolean : boolean = true;
let myNumber : number = 1234;
let myStringArray : string[] = ['Juan', 'Pedro', 'Lucas'];

console.log(myBoolean)          // Muestra el contenido de la variable myBoolean
console.log(typeof(myBoolean))  // Muestra el tipo de la variable myBoolean

console.log(myNumber)           // Muestra el contenido de la variable myNumber
console.log(typeof(myNumber))   // Muestra el tipo de la variable myNumber

console.log(myStringArray)          // Muestra el contenido de la variable myStringArray
console.log(typeof(myStringArray))  // Muestra el tipo de la variable myStringArray


// Funciones en Typescript
function calcularDatos(a:number,b:number,c:number){
    return (a*b)+c
}

console.log('Resultado de Calcular Datos: '+calcularDatos(2,4,2))

function calcularDatos2(a:number,b:number,c:number):number{
    return (a*b)+c
}

console.log('Resultado de Calcular Datos: '+calcularDatos2(8,7,5))


let edad:number | string
edad= 40
console.log(edad)

edad = '47 años'
console.log(edad)


// Tipo Guardias

let dato1: number | string
let dato2: number | string 

dato1 = 30;
dato2 = 50;

let total1= dato1 + dato2;

console.log(total1);

dato1 = 'Miguel';
dato2 = ' Negro';

let total2 = dato1 + dato2;
console.log(total2)


// Indefinido y Valores Opcionales

function calcularSuma( a:number,b:number,c?:number){
  let s:number;

  if(c == undefined){
    s=a+b
  }else{
     s=a+b+c
  }

  return s

}

console.log(calcularSuma(2,4))
console.log(calcularSuma(2,6,5))

// Valores Nulos

function calcularSuma2(a:number,b:number,c:number| null){
    let s:number
    
    if(c == null){
        s= a+b
    }else {
        s=a+b+c
    }

    return s

}

console.log(calcularSuma2(7,9, null))
console.log(calcularSuma2(7,9,10))


// Version Optimizada de la declaracion if, else

let edad1 = (edad: number)=>edad<18? console.log(`tengo ${edad}, Soy menor de edad `) : console.log(`Tengo ${edad}, soy mayor de edad`);

edad1(17)





