// Tabla de multiplicar:
// Vamos a escribir un programa que nos permita ingresar un número cualquiera y nos diga la tabla de multiplicación para este número.
// La tabla de multiplicación para el número 2 es por ej: 2x1=2, 2x2=4, 2x3=6, etc. Hasta llegar a al número 10 (2x10=20)

// Crear un algoritmo que:
// Permita al usuario ingresar un número mediante la función prompt
// let numero = parseInt(prompt(“ingrese un número”))
// Se debe imprimir en consola el siguiente texto:
// “número x 1 =  resultado”
// “número x 2 = resultado”
// …
// hasta llegar a mostrar el resultado del número multiplicado por 10
// “numero x 10 = resultado”
// Recuerden que para multiplicar en javascript se debe usar el símbolo “*”: por ej. 2*2

// let numero = parseInt(prompt('Ingrese un numero: '))
// console.log(numero + 'x1= ' + numero * 1 +
//     '\n' + numero + 'x2= ' + numero * 2 +
//     '\n' + numero + 'x3= ' + numero * 3 +
//     '\n' + numero + 'x4= ' + numero * 4 +
//     '\n' + numero + 'x5= ' + numero * 5 +
//     '\n' + numero + 'x6= ' + numero * 6 +
//     '\n' + numero + 'x7= ' + numero * 7 +
//     '\n' + numero + 'x8= ' + numero * 8 +
//     '\n' + numero + 'x9= ' + numero * 9 +
//     '\n' + numero + 'x10= ' + numero * 10)

let numero = parseInt(prompt('Ingrese un numero: '));
    for (let i = 0;i<=10 ;i++){
    console.log(numero + ' multiplicado por '+i+' es ' +numero*i)
}
