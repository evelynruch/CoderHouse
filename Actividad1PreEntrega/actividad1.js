// Definición de variables de usuarios y contraseñas
let usuarioVete = 'uservete';
let contrasenaVete = '1234';
let usuario1 = 'maria';
let contrasena1 = 'maria1979';
let usuario2 = 'jose';
let contrasena2 = 'jose1983';

// Variables para almacenar las contraseñas ingresadas
let password

// Solicitar el nombre de usuario al usuario
let nombre = prompt('Ingrese su nombre de usuario: ');

// Bucle while que se ejecuta mientras el nombre de usuario no sea 'SALIR'
while (nombre !== 'SALIR') {
    let ingresoExitoso = false; // Restablece el valor en cada intento de inicio de sesión

    // Comprobar el nombre de usuario ingresado con los usuarios válidos
    switch (nombre) {
        case usuario1:
            password = prompt('Ingrese su Contraseña: ');
            if (password === contrasena1) {
                alert('Bienvenido ' + usuario1);
                ingresoExitoso = true;
            } else { // si la contrasña es incorrecta me muestra el alert y vuelve a pedir usuario y contraseña
                alert('Contraseña Incorrecta. Vuelva a ingresar Usuario y Contraseña');
            }
            break;
        case usuario2:
            password = prompt('Ingrese su Contraseña: ');
            if (password === contrasena2) {
                alert('Bienvenido ' + usuario2);
                ingresoExitoso = true;
            } else {
                alert('Contraseña Incorrecta. Vuelva a ingresar Usuario y Contraseña');
            } 
            break;
        case usuarioVete:
            password = prompt('Ingrese su Contraseña: ');
            if (password === contrasenaVete) {
                alert('Bienvenido ' + usuarioVete);
                ingresoExitoso = true;
            } else {
                alert('Contraseña Incorrecta. Vuelva a ingresar Usuario y Contraseña');
            } 
            break;
        default:
            alert('Usuario Incorrecto. Ingrese su nombre de usuario o escriba `SALIR`');
            break;
    }  

    // Si el inicio de sesión no fue exitoso, solicitar nuevamente el nombre de usuario
    if (ingresoExitoso == false) {
        nombre = prompt('Ingrese su nombre de usuario');
    } else {
        break; // Salir del bucle si el inicio de sesión es exitoso
    }
}


