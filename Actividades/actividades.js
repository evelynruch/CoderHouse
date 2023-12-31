// CICLOS E ITERACIONES
// Actividad 1 El pizarrón
// Solicitar al usuario un (1) un número y un (1) texto. Efectuar una salida por alerta con el mensaje ingresado 
//por cada repetición, hasta alcanzar el valor señalado por el usuario.
// Notas actividad 1
// Cuando decimos “por cada repetición”, estamos señalando la necesidad de emplear ciclos. Si el ciclo está 
//condicionado por un número de repeticiones, se usa for.

/* Mi Resolucion
let mensaje = prompt('Ingrese un mensaje de texto')
let repeticiones = parseInt(prompt('Ingrese la cantidad de repeticiones: '));

for (let i=1; i <= repeticiones;i++){
    alert('repeticion numero '+i+ ' del mensaje: '+mensaje)
} alert ('Ciclo Terminado')
*/

// Resolucion Coder
// let cantidad = prompt('INGRESAR CANTIDAD DE REPETICIONES');
// let texto    = prompt('INGRESAR TEXTO A REPETIR');
// for (let index = 0; index < cantidad; index++) {
//     console.log(texto);

// Actividad 2 El cuadrado ordinario
// Solicitar al usuario un (1) número. Emplear este valor para determinar la cantidad de repeticiones, 
// y efectuar una salida por alerta con el mensaje “lado” en cada repetición. 
// Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.
// Notas actividad 2
// Es importante distinguir entre el número máximo de repeticiones de un for. 
// y un condicional cuyo cumplimiento puede provocar la interrupción del bucle (con break). 

/*
Mi Resolucion
let numero =parseInt(prompt('Ingrese un numero: '));
for(let i=1; i <= numero; i++){
    if (i >= 5){
        break;
    } 
    alert('lado ' +i);
} 
alert('Fin del ciclo')
*/

//resolucion Coder
// let lados = prompt('INGRESAR CANTIDAD DE LADOS');
// for (let index = 0; index < lados; index++) {
//     if (index > 3) {
//         break;
//     }
//     alert("lado");
// }


// Actividad 3 Registro de alumnos
// Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
// Luego realizar un única salida por alerta, con el listado de alumnos registrados.
// Notas actividad 3
// La “carga consecutiva” implica utilizar un bucle, para solicitar 
// entradas al usuario una detrás de otra.  Podemos concatenar la entrada obtenida 
// en cada ciclo a otra variable.

/*
Mi Resolucion
let nomAlumnos
let listado = '';
for (let i = 0; i<10; i++){
    nomAlumnos = prompt('Ingrese el nombre del alumno: ');
    listado = (listado + '\n ' + nomAlumnos );
}  
alert('Los alumnos ingresados son: ' + listado)
*/

//Resolucion Coder
// let listado = '';
// for (let index = 0; index < 10; index++) {
//     listado += prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";
// }
// alert(listado);

// Actividad 4 El innombrable
// Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
// Luego realizar un única salida por alerta, con todos los nombres ingresados.
// Notas actividad 4
// La repetición consecutiva “hasta que se ingrese un valor”, implica el uso de un bucle condicional 
//(while o do...while), el cual se interrumpe una vez el usuario ingresa dicho valor.

/*
Mi Resolucion
let nombres = prompt('Ingresa los nombres de tus compañeros: ');
let lista = ''
while (nombres !== 'Voldemort'){
    lista = lista + nombres + '\n';
    nombres = prompt('Ingresa los nombres de tus compañeros: ');
}
alert('Los nombres ingresados son: ' + lista);
*/

//Resolucion Coder
// let entrada    = prompt("INGRESAR NOMBRE");
// let ingresados = '';
// while (entrada != 'Voldemort') {
//     ingresados += entrada +"\n";
//     entrada     = prompt("INGRESAR NOMBRE");
// }
// alert(ingresados);

// Actividad 5 Comprando productos
// Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. 
// Generar una única salida compuesta por los siguientes productos, según el valor 
// ingresado en cada ciclo:
// “Tomate” si es 1.
// “Papa” si es 2.
// “Carne” si es 3.
// “Pollo” si es 4.
// Notas actividad 5
// Es importante distinguir entre el valor de la entrada que asegura la repetición 
// (entrada != “ESC”), y los posibles valores de la entrada que disparan 
// un procesamiento (1,2,3 y 4).

/*
Mi Resolucion
let entrada = prompt('Ingrese un producto del 1 al 4 o ¨ESC¨: ');
while (entrada != 'ESC'){
    switch (entrada){
        case '1':
            alert('Tomate'); 
            break;
        case '2':
            alert('Papa');
            break;
        case '3':
            alert('Carne');
            break;
        case '4':
            alert('Pollo');
            break;
        default:
            alert('ERRORRRRR');
            break;
    }
    entrada =prompt('Ingrese nuevamente un numero o ¨ESC¨: ');
}   
*/

// Resolucion Coder
// let entrada =  prompt("SELECCIONAR PRODUCTO DE 1 A 4");
// while (entrada != 'ESC') {
//     switch (entrada) {
//         case "1":
//             alert("Tomate");
//             break;
//         case "2":
//             alert("Papa");
//             break;
//         case "3":
//             alert("Carne");
//             break;
//         case "4":
//             alert("Pollo");
//             break;
//         default:
//             alert("Error");
//             break;
//     }
//     entrada = prompt("SELECCIONAR PRODUCTO DE 1 A 4");
// }

