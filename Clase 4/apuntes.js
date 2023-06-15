// FUNCIONES

 

// Ejemplo 1: Función simple

function saludo() {

    console.log('Hola estudiantes!');

}

saludo();

 

// Ejemplo 2: Uso practico

 

// Sin funcion

// let nombre = prompt('Ingresar nombre');

// alert('El nombre ingresado es ' + nombre);

// let nombre2 = prompt('Ingresar nombre');

// alert('El nombre ingresado es ' + nombre2);

 

//con funcion

function solicitarNombre() {

    let nombre = prompt('Ingresar nombre');

    alert('El nombre ingresado es ' + nombre);

}

solicitarNombre();

solicitarNombre();

Ejemplo 3: parametros

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

sumar(10, 3);

 

// Ejemplo 5: Return

function multiplicar(numero1, numero2) {

    return numero1 * numero2;

}

let resultado = multiplicar(10, 3);

console.log(resultado);

/ Ejemplo 6: Calculadora

// Se toman como parametro 2 numeros y una operación

// La operación puede ser sumar(+), restar(-), multiplicar(*), dividir(/)

// en este caso podemos remover los break; ya que return corta la ejecución de la función

function calculadora(primerNumero, segundoNumero, operacion) {

    switch (operacion) {

        case '+':

            return primerNumero + segundoNumero;

        case '-':

            return primerNumero - segundoNumero;

        case '*':

            return primerNumero * segundoNumero;

        case '/':

            return primerNumero / segundoNumero;

        default:

            return 0;

    }

}

 

let result1 = calculadora(2, 4, '+')

let result2 = calculadora(6, 2 , '-')

let result3 = calculadora(6, 2 , '*')

let result4 = calculadora(6, 2 , '/')

console.log(result1) // 8

console.log(result2) // 4

console.log(result3) // 12

console.log(result4) // 3

/ Ejemplo 6: Calculadora

// Se toman como parametro 2 numeros y una operación

// La operación puede ser sumar(+), restar(-), multiplicar(*), dividir(/)

// en este caso podemos remover los break; ya que return corta la ejecución de la función

function calculadora(primerNumero, segundoNumero, operacion) {

    switch (operacion) {

        case '+':

            return primerNumero + segundoNumero;

        case '-':

            return primerNumero - segundoNumero;

        case '*':

            return primerNumero * segundoNumero;

        case '/':

            return primerNumero / segundoNumero;

        default:

            return 0;

    }

}

 

let result1 = calculadora(2, 4, '+')

let result2 = calculadora(6, 2 , '-')

let result3 = calculadora(6, 2 , '*')

let result4 = calculadora(6, 2 , '/')

console.log(result1) // 8

console.log(result2) // 4

console.log(result3) // 12

console.log(result4) // 3







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

 

otraFuncion()

console.log(variableLocal) // error: la variable no está definida en el scope global, sólo se puede acceder desde otraFuncion




function sumarFunc1(a, b) {

    let suma = a + b;

}

 

function mostrar1() {

    console.log(suma); // error: la variable no está definida en el scope global ni en el scope de mostrar, sólo se puede acceder desde sumarFunc

}

 

function sumarFunc2(a, b) {

    let suma = a + b;

    return suma

}

 

function mostrar2() {

    let sumaTotal = sumarFunc2(10, 15)

    console.log(sumaTotal)// 25

}

 

mostrar2()// 25



// Resumen

// si vemos un let fuera de una función:

// por ejemplo: let numero = 10

// entonces numero es una variable global

// si está definida dentro de una función es local



