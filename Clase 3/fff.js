// Crear un algoritmo que:
// Permita al usuario ingresar un número mediante la función prompt
// Luego de que el usuario ingrese un número se le volverá a pedir otro hasta que el usuario ingrese “ESC”, cuando ingrese “ESC” debe cortarse la ejecución
// Crear una variable sumaTotal
// Cada número que ingrese el usuario debe sumarse a la variable sumaTotal
// Cuando el usuario ingrese “ESC” y se corte la ejecución, debemos mostrarle al usuario la suma total de los números que ingresó

// Declaramos la variable sumaTotal


let entrada = prompt('Ingrese un numero o escriba `ESC` para salir: ');
let sumaTotal = 0
let num = 0

while (entrada !== 'ESC'){
    num = parseInt(entrada);
    sumaTotal = sumaTotal + num;
    entrada = prompt('Ingrese un numero o escriba `ESC` para salir: '); 
} 
alert('La suma total es '+ sumaTotal);

// let entrada = prompt('Ingrese un numero');
// let sumaTotal = 0;
// let num = 0;

// while (entrada !== 'ESC'){
//     num = parseInt(entrada);
//     sumaTotal = sumaTotal + num

//     entrada = prompt('ingrese otro numero');
// }
// alert('la suma total es ' + sumaTotal);