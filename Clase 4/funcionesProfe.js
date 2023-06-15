// FUNCIONES

 

// Ejemplo 1: Función simple

function saludo() {

    console.log('Hola estudiantes!');

}

saludo();

 

// Ejemplo 2: Uso practico

 

// Sin funcion

let nombre = prompt('Ingresar nombre');

alert('El nombre ingresado es ' + nombre);

let nombre2 = prompt('Ingresar nombre');

alert('El nombre ingresado es ' + nombre2);

 

//con funcion

function solicitarNombre() {

    let nombre = prompt('Ingresar nombre');

    alert('El nombre ingresado es ' + nombre);

}

solicitarNombre();

solicitarNombre();

 

// Ejemplo 3: parametros

function saludoPersonalizado(nombre) {

    console.log('Hola ' + nombre);

}

saludoPersonalizado('Juan');

saludoPersonalizado('Ramiro');

 

// Ejemplo 4

function sumar(num1, num2) {

    let suma = num1 + num2;

    console.log('La suma es ' + suma);

}

sumar(5, 3);

 

// Ejemplo 5: Return

function multiplicar(numero1, numero2) {

    return numero1 * numero2;

}

let resultado = multiplicar(4, 3);

console.log(resultado);

 

// Ejemplo 6: Calculadora

// Se toman como parametro 2 numeros y una operación

// La operación puede ser sumar(+), restar(-), multiplicar(*), dividir(/)

// en este caso podemos remover los break; ya que return corta la ejecución de la función

function calculadora(primerNumero, segundoNumero, operacion) {

    switch (operacion) {

        case '+':

            return primerNumero + segundoNumero;

            break;

        case '-':

            return primerNumero - segundoNumero;

            break;

        case '*':

            return primerNumero * segundoNumero;

            break;

        case '/':

            return primerNumero / segundoNumero;

            break;

        default:

            return 0;

    }

}

let result1 = calculadora(6, 2 , '+')

let result2 = calculadora(6, 2 , '-')

let result3 = calculadora(6, 2 , '*')

let result4 = calculadora(6, 2 , '/')

console.log(result1) // 8

console.log(result2) // 4

console.log(result3) // 12

console.log(result4) // 3

// Ejercicio 1a

 

function calcularJubilacionA(edad) {

    return 65 - edad;

}

let jubilacionA = calcularJubilacionA(30); // 35

 

// Ejercicio 1b

function calcularJubilacionB(edad) {

    if (edad >= 65) {

        return 'Ya tenes edad para jubilarte';

    } else {

        return 65 - edad;

    }

}

let jubilacionB = calcularJubilacionA(66); // Ya tenes edad para jubilarte

 

 

// Scope

 

// Variable global

let variableGlobal = 10;

 

function unaFuncion() {

    variableGlobal = variableGlobal + 10;

}

unaFuncion();

console.log(variableGlobal); //20

 

//Variable local

function otraFuncion() {

    let variableLocal = 10;

    console.log(variableLocal); //10

}

otraFuncion();

console.log(variableLocal); // error: la variable no está definida en el scope global, sólo se puede acceder desde otraFuncion

 

function sumarFunc(a, b) {

    let suma = a + b;

}

 

function mostrar() {

    console.log(suma); // error: la variable no está definida en el scope global ni en el scope de mostrar, sólo se puede acceder desde sumarFunc

}

 

// Funciones anonimas

 

// Ejemplo 7

const saludoAnonimo = function () {

    console.log('Hola estudiantes, desde una función anonima!');

};

saludoAnonimo();

 

// Ejemplo 8

const saludoFlecha = () => {

    console.log('Hola estudiantes, desde una función flecha!');

};

saludoFlecha();

 

// Ejemplo 9

const cuadradoFlecha = (numero) => {

    return numero * numero;

};

let resultadoFlecha = cuadradoFlecha(5);

console.log('El cuadrado de 5 es ' + resultadoFlecha);

 

// Ejemplo 10

const productoFlechaSinReturn = (numero) => numero * numero;

let resultadoFlechaSinReturn = productoFlechaSinReturn(6);

console.log('El producto de 6 es ' + resultadoFlechaSinReturn);

 

// Ejemplo 11

const sumarFlecha = (num1, num2) => {

    return num1 + num2;

};

let resultadoSuma = sumarFlecha(7, 8);

console.log('La suma de 7 y 8 es ' + resultadoSuma);

 

// Omitiendo las llaves y el return

const calcularIva = (precioBruto) => precioBruto * 0.21;

//Equivale a la siguiente función

const calcularIva2 = (precioBruto) => {

    return precioBruto * 0.21;

};