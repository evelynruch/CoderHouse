// // FUNCIONES
// // Ejemplo 1: Función simple
// function saludo() {
//     console.log('Hola estudiantes!');
// }
// saludo();

// // Ejemplo 2: Uso practico
// // Sin funcion
// // let nombre = prompt('Ingresar nombre');
// // alert('El nombre ingresado es ' + nombre);
// // let nombre2 = prompt('Ingresar nombre');
// // alert('El nombre ingresado es ' + nombre2);

// //con funcion
// function solicitarNombre() {
//     let nombre = prompt('Ingresar nombre');
//     alert('El nombre ingresado es ' + nombre);
// }
// solicitarNombre();
// solicitarNombre();

// // Ejemplo 3: parametros
// function saludoPersonalizado(nombre) {
//     console.log('Hola ' + nombre);
// }
// saludoPersonalizado('Juan');
// saludoPersonalizado('Ramiro');

// // Ejemplo 4
// function sumar(num1, num2) {
//     let suma = num1 + num2;
//     console.log('La suma es ' + suma);
// }
// sumar(10, 3);

// // Ejemplo 5: Return
// function multiplicar(numero1, numero2) {
//     return numero1 * numero2;
// }
// let resultado = multiplicar(10, 3);
// console.log(resultado);

// // Ejemplo 6: Calculadora
// // Se toman como parametro 2 numeros y una operación
// // La operación puede ser sumar(+), restar(-), multiplicar(*), dividir(/)
// // en este caso podemos remover los break; ya que return corta la ejecución de la función

// function calculadora(primerNumero, segundoNumero, operacion) {
//     switch (operacion) {
//         case '+':
//             return primerNumero + segundoNumero;
//         case '-':
//             return primerNumero - segundoNumero;
//         case '*':
//             return primerNumero * segundoNumero;
//         case '/':
//             return primerNumero / segundoNumero;
//         default:
//             return 0;
//     }
// }
// let result1 = calculadora(2, 4, '+')
// let result2 = calculadora(6, 2 , '-')
// let result3 = calculadora(6, 2 , '*')
// let result4 = calculadora(6, 2 , '/')
// console.log(result1) // 8
// console.log(result2) // 4
// console.log(result3) // 12
// console.log(result4) // 3

// // Scope
// // Variable global
// let variableGlobal = 10;
// function unaFuncion() {
//     variableGlobal = variableGlobal + 10;
// }
// unaFuncion();
// console.log(variableGlobal); //20

// //Variable local que no va a funcionar
// function otraFuncion() {
//     let variableLocal = 10;
//     console.log(variableLocal); //10
// }
// otraFuncion()
// console.log(variableLocal) // error: la variable no está definida en el scope global, sólo se puede acceder desde otraFuncion

// //Variable local que no va a funcionar
// function sumarFunc1(a, b) {
//     let suma = a + b;
// }

// function mostrar1() {
//     console.log(suma); // error: la variable no está definida en el scope global ni en el scope de mostrar, sólo se puede acceder desde sumarFunc
// }

// //Variable local que si va a funcionar porque hay una dentro de otra
// function sumarFunc2(a, b) {
//     let suma = a + b;
//     return suma
// }

// function mostrar2() {
//     let sumaTotal = sumarFunc2(10, 15)
//     console.log(sumaTotal)// 25
// }
// mostrar2()// 25

// // Resumen
// // si vemos un let fuera de una función:
// // por ejemplo: let numero = 10
// // entonces numero es una variable global
// // si está definida dentro de una función es local

// //Funciones anonimas
// //Generalmente, las funciones anónimas se asignan a variables declaradas como constantes
// const suma  = function (a, b) { return a + b }
// const resta = function (a, b) { return a - b }
// console.log( suma(15,20) )
// console.log( resta(15,5) )

// //Funciones Flecha
// const suma  = (a, b) => { return a + b }
// //Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
// const resta = (a, b) =>  a - b ;
// console.log( suma(15,20) )
// console.log( resta(20,5) )

// // Ejemplo Funcion Flecha
// const suma  = (a,b) => a + b
// const resta = (a,b) => a - b
// //Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
// const iva   = x => x * 0.21
// let precioProducto  = 500
// let descuento = 50 
// //Calculo el precioProducto + IVA - descuento
// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
// console.log(nuevoPrecio)

// / Funciones anonimas

 
// // Ejemplo 7
// const saludoAnonimo = function () {
//     console.log('Hola estudiantes, desde una función anonima!');
// };
// saludoAnonimo();

// // Ejemplo 8
// const saludoFlecha = () => {
//     console.log('Hola estudiantes, desde una función flecha!');
// };
// saludoFlecha();

// //Ejemplo 9
// const productoFlecha = (numero1, numero2) => {
//     return numero1 * numero2
// }
// let resultadoFlecha = productoFlecha(2, 3);
// console.log(resultadoFlecha);

 
// //Ejemplo 10
// const productoFlechaSinReturn = (numero1, numero2) => numero1 * numero2
// let resultadoFlechaSinReturn = productoFlechaSinReturn(2, 3);
// console.log(resultadoFlechaSinReturn);

//  // Ejemplo 11
// // Omitiendo las llaves y el return
// const calcularIva = (precioBruto) => precioBruto * 0.21; // es como decir 21% de precioBruto
// const calcularIva2 = (precioBruto) => {
//     return precioBruto * 0.21;
// };
