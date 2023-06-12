// Crear un algoritmo que:
// Permita al usuario ingresar un número mediante la función prompt
// Luego de que el usuario ingrese un número se le volverá a pedir otro hasta que el usuario ingrese “ESC”, cuando ingrese “ESC” debe cortarse la ejecución
// Crear una variable sumaTotal
// Cada número que ingrese el usuario debe sumarse a la variable sumaTotal
// Cuando el usuario ingrese “ESC” y se corte la ejecución, debemos mostrarle al usuario la suma total de los números que ingresó


// ejercicio Alumno1
// let numero = parseInt(prompt('Ingresar un numero'));
// let sumaTotal = 0

// while (numero != 'ESC') {
//     sumaTotal = 0 + numero
//     numero = parseInt(prompt('Ingresar un numero')) 
// }


// ejercicio Alumno2
// let entrada = prompt("ingrese un numero");
// let numero = parseInt(entrada);
// let sumaTotal = 0;
// sumaTotal = sumaTotal + numero

// while (entrada !== "ESC") {
//     entrada = prompt("ingrese otro numero");
//     numero = parseInt(entrada)
//     sumaTotal = sumaTotal + numero;
// }
// alert("la suma total es " + sumaTotal);


// ejercicio Alumno3
// let numero = prompt("Ingrese un numero o  ESC para finalizar")
// let numeroSuma = 0
// while (numero != "ESC") {
//     numeroSuma += parseInt(numero)
//     numero  = prompt("Ingrese un numero o  ESC para finalizar")
// }
// alert("La suma de todos los numeros ingresados es: " + numeroSuma)


// ejercicio Alumno4
// Crear una variable sumaTotal
// let sumaTotal = 0;
// let ingreso = "";

// // cuando ingrese “ESC” debe cortarse la ejecución
// while (ingreso !== "ESC") {
//   // Permita al usuario ingresar un número mediante la función prompt
//   ingreso = prompt("Ingrese un numero // escriba ESC para salir");

//   if (ingreso !== "ESC" && isNaN(parseInt(ingreso)) == false) {
//     // Cada número que ingrese el usuario debe sumarse a la variable sumaTotal
//     sumaTotal = sumaTotal + parseInt(ingreso);
//   }
// }


// ejercicio Alumno5
// debemos mostrarle al usuario la suma total de los números que ingresó
// let numeroNuevo = prompt("Ingrese un numero o ESC para ver la suma total.")
// let suma = 0

// while (numeroNuevo != "ESC") {
//     if (numeroNuevo != "") {
//         suma += parseInt(numeroNuevo)
//         numeroNuevo = prompt("Ingrese un numero o ESC para salir.")
//     }else {
//         alert("Debes ingresar un numero para continuar")
//         numeroNuevo = prompt("Ingrese un numero o ESC para salir.")
//     }

// }
// alert("la suma total de los numero es: " + suma)


// ejercicio Alumno6
// let sumaTotal = 0;
// let numeroIngresado = prompt('Ingrese un numero');

// do {
//     sumaTotal += parseInt(numeroIngresado);
//     numeroIngresado = prompt('Ingrese un numero');
// } while (numeroIngresado !== 'ESC');
// alert('La suma total de todos los numero ingresado es ' + sumaTotal);


// ejercicio Alumno7
// let num = parseInt(prompt("Ingrese un numero"));
// let sumaTotal = 0;
// while (num != "ESC") {
//   sumaTotal = sumaTotal + parseInt(num);
//   num = prompt("Ingrese otro numero");
// }
// alert(sumaTotal);


// ejercicio Alumno8
// let sumaTotal = 0
// let numeroIngresado = prompt('Ingrese un numero');
// // esto agrega a suma total el valor de numero ingresado
// do {
//     sumaTotal += parseInt(numeroIngresado);
//     numeroIngresado = prompt('Ingrese un numero');
// } while (numeroIngresado !== 'ESC');
//     alert('La suma total de todos los numero ingresado es ' + sumaTotal);


// ejercicio Sabry
// let numeroNuevo = prompt('Ingrese un numero o ESC para ver la suma total.');
// let suma = 0;

// while (numeroNuevo !== 'ESC') {
//     if (numeroNuevo !== '') {
//         suma += parseInt(numeroNuevo);
//         console.log(parseInt(numeroNuevo));
//         numeroNuevo = prompt('Ingrese un numero o ESC para salir.');
//     } else {
//         alert('Debes ingresar un numero para continuar');
//         numeroNuevo = prompt('Ingrese un numero o ESC para salir.');
//     }
// }
// alert('la suma total de los numero es: ' + suma);


// ejercicio alumno9
// let entrada = prompt('Ingrese un numero')
// let num = parseInt(entrada)
// let sumaTotal = 0

// while (entrada != 'ESC'){
//     sumaTotal == sumaTotal + num
//     num = parseInt(prompt('ingrese otro numero'));
// }
// alert(sumaTotal);


// ejercicio alumno10
// let entrada = prompt('Ingresar un numero o ESC para ver la suma total');
// let sumaTotal = 0;
// while (entrada !== 'ESC') {
//     sumaTotal += parseInt(entrada);
//     entrada = prompt('Ingresar un numero o ESC para ver la suma total');
// }
// alert('la suma total es ' + sumaTotal)
