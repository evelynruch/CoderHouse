//while
// ejemplo 1
let edad = parseInt(prompt('Ingrese su edad'));

while (edad < 18) {
    alert('Usted debe ser mayor de edad para ingresar');
    edad = parseInt(prompt('Ingrese su edad'));
}
alert('Se ingreso correctamente');

// ejemplo 2
let intento = prompt('Adivinanza: ingrese un  numero entre 1 y 10');
let intentoNumero = parseInt(intento);

let numeroCorrecto = 7;

while (intentoNumero != numeroCorrecto) {
    intento = prompt('Intentalo de nuevo: ingrese un  numero entre 1 y 10');
    intentoNumero = parseInt(intento);
}
alert('Felicidades, ganaste!');

// ejemplo 3
let entrada = prompt('Ingrese una palabra');
while (entrada != 'ESC') {
    alert('Usted ingreso: ' + entrada);
    entrada = prompt('Ingrese una palabra');
}

//DO...While
// ejemplo 1
let repetir = false;
do {
    console.log('Se muestra una sola vez');
} while (repetir);


// ejemplo 2
// el DO While se ejecuta al menos una vez aunque no se cumpla la condicion. si se cumple la va a ejecutar mas veces
let suma = 0;

do {
    numero = parseInt(prompt('Ingrese un numero'));
    suma = suma + numero;
} while (suma < 50);

alert('Suma total: ' + suma);

// For(desde;hasta;actualizacion)
//i++ es decir i es igual a i mas uno
//i = i + 2
//i +=2 

// for

// ejemplo 1

// i es una variable que se utiliza para control el ciclo for
// en este caso se llama i pero puede tener cualquier nombre
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
//Primera iteración:
// - Crea la variable i, le asigna valor 0 (let i = 0)
// - Verifica la condicion (i<5),
// es true porque i vale 0 (es decir, es menor que 5)
// - Muestra 0 en consola
// - Suma 1 a la variable i (i++)

//Segunda iteración:
// - Verifica la condicion i<5,
// es true porque i vale 1 (es decir, es menor que 5)
// - Muestra 1 en consola
// - Suma 1 a la variable i (i++)

//Continua el mismo ciclo hasta que i valga 5
//  y ya no se cumpla la condicion (i<5)

// ejemplo 2
// for (let i = 1; i <= 3; i++) {
//     // En cada repetición solicitamos un nombre.
//     let ingresarNombre = prompt('Ingresar nombre');
//     // Informamos el turno asignado usando el número de repetición (i).
//     alert(' Turno  N° ' + i + ' Nombre: ' + ingresarNombre);
// }

// ejemplo 3
// for (let i = 1; i <= 5; i++) {
//     //Si la variable i es 3, no se interpreta la repetición
//     if (i == 3) {
//         continue;
//     }
//     console.log(i);
// }

// ejemplo 4
// for (let i = 1; i <= 5; i++) {
//     //Si la variable i es igual a 3 interrumpo el for.
//     if (i === 3) {
//         break;
//     }
//     console.log(i);
// }

// switch

// let usuario1 = 'juan';
// let usuario2 = 'maria';

// let nombre = prompt('Ingrese su nombre de usuario');
// switch (nombre) {
//     case usuario1:
//         alert('Bienvenido ' + usuario1);
//         break;
//     case usuario2:
//         alert('Bienvenido ' + usuario2);
//         break;
//     default:
//         alert('Usuario incorrecto');
//         break;
// }

// //Equivalente a switch en IF

// if (nombre === usuario1) {
//     alert('Bienvenido ' + usuario1);
// } else if (nombre === usuario2) {
//     alert('Bienvenido ' + usuario2);
// } else {
//     alert('Usuario incorrecto');
// }

//switch
// let usuario1 = 'juan';
// let usuario2 = 'maria';

// let nombre = prompt('Ingrese su nombre de usuario');
// switch (nombre) {
//     case usuario1:
//         alert('Bienvenido ' + usuario1);
//         break;
//     case usuario2:
//         alert('Bienvenido ' + usuario2);
//         break;
//     default:
//         alert('Usuario incorrecto');
//         break;
// }

// //Equivalente a switch en IF

// if (nombre === usuario1) {
//     alert('Bienvenido ' + usuario1);
// } else if (nombre === usuario2) {
//     alert('Bienvenido ' + usuario2);
// } else {
//     alert('Usuario incorrecto');
// }

// // combinar switch y while
// let entrada = prompt('Ingresar un nombre');
// //Repetimos hasta que se ingresa "ESC"
// while (entrada != 'ESC') {
//     switch (entrada) {
//         case 'ANA':
//             alert('HOLA ANA');
//             break;
//         case 'JUAN':
//             alert('HOLA JUAN');
//             break;
//         default:
//             alert('¿QUIEN SOS?');
//             break;
//     }
//     entrada = prompt('Ingresar un nombre');
// }

// let ingresoExitoso = false;
// while (!ingresoExitoso) {
//     switch (nombre) {
//         case usuario1:
//             alert('Bienvenido ' + usuario1);
//             ingresoExitoso = true;
//             break;
//         case usuario2:
//             alert('Bienvenido ' + usuario2);
//             ingresoExitoso = true;
//             break;
//         default:
//             nombre = prompt('Vuelva a intentar ingresar su usuario');
//             break;
//     }
// }