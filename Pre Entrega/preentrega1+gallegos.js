// Gallegos, Evelyn Silvia Graciela
// evelynruch@gmail.com
// Curso JavaScript Comision: 43135
// https://github.com/evelynruch

// Descripcion del Proyecto
// Estoy desarrollando un portal veterinario en donde el login dependera del tipo de usuario 
// ya que el ADMIN tendra un ingreso y los clientes otro (este ultimo en desarrollo)
// el admin o USERVETE tendra funcionalidades distintas a las de los clientes.
// Por ejemplo el USERVETE podrá asignar un turno veterinario; cargar una lista de productos a comprar
// Y por otro lado el cliente tendrá otro tipo de funcionalidades, (a futuro, Solicitar turno, comprar productos...)


//Usuarios y contraseñas
class Usuario {
    constructor(nombreUsuario, contrasenia) {
        this.nombreUsuario = nombreUsuario;
        this.contrasenia = contrasenia;
    }
}
// Crear instancias de Usuario
// Tendremos dos tipos de usuarios, uno de tipo ADMIN y otro de tipo CLIENTE
// los ingresos validos serán: 'maria' y 'jose' como clientes y 'uservete' como ADMIN
let usuarioVete = new Usuario('uservete', '1234'); // Usuario y contraseña validos
let usuario1 = new Usuario('maria', 'maria1979'); // Usuario y contraseña validos
let usuario2 = new Usuario('jose', 'jose1983'); // Usuario y contraseña validos

// Tendremos usuarios de tipo ADMIN para los veterinarios, para que puedan ingresar a sus funcionalidades
let tipoDeUsuario = '';
  
// Solicitar el nombre de usuario al usuario
let nombre = prompt('Ingrese su nombre de usuario: ');

// Bucle while que se ejecuta mientras el nombre de usuario no sea 'SALIR'
while (nombre !== 'SALIR') {
    let ingresoExitoso = false; // Restablece el valor en cada intento de inicio de sesión
    let password; // Variables para almacenar las contraseñas ingresadas
    // Comprobar el nombre de usuario ingresado con los usuarios válidos
    switch (nombre) {
        case usuario1.nombreUsuario:
            password = prompt('Ingrese su Contraseña: ');
            if (password === usuario1.contrasenia) {
                alert('Bienvenido ' + usuario1.nombreUsuario);
                ingresoExitoso = true;
                tipoDeUsuario = 'cliente';
            } 
            else { // si la contrasña es incorrecta me muestra el alert y vuelve a pedir usuario y contraseña
                alert('Contraseña Incorrecta. Vuelva a ingresar Usuario y Contraseña');
            }
            break;
        case usuario2.nombreUsuario:
            password = prompt('Ingrese su Contraseña: ');
            if (password === usuario2.contrasenia) {
                alert('Bienvenido ' + usuario2.nombreUsuario);
                ingresoExitoso = true;
                tipoDeUsuario = 'cliente';
            } 
            else {
                alert('Contraseña Incorrecta. Vuelva a ingresar Usuario y Contraseña');
            } 
            break;
        case usuarioVete.nombreUsuario:
            password = prompt('Ingrese su Contraseña: ');
            if (password === usuarioVete.contrasenia) {
                alert('Bienvenido ' + usuarioVete.nombreUsuario);
                ingresoExitoso = true;
                tipoDeUsuario = 'admin';
            } 
            else {
                alert('Contraseña Incorrecta. Vuelva a ingresar Usuario y Contraseña');
            } 
            break;
        default:
            alert('Usuario Incorrecto. Ingrese su nombre de usuario o escriba `SALIR`');
            break;
    }  

    // Si el inicio de sesión no fue exitoso, solicitar nuevamente el nombre de usuario
    if (ingresoExitoso === false) {
        nombre = prompt('Ingrese su nombre de usuario');
    } else {
        break; // Salir del bucle si el inicio de sesión es exitoso
    }
}

//PORTAL DE ADMIN o VETERINARIO

// Definicion de la clase Producto
class Producto {
    constructor(articulo, cantidad, precio) {
        this.articulo = articulo;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

// Definicion de la clase Cliente
class Cliente {
    constructor(apellido, nombreMascota, tipo, sexo, mailDeContacto) {
        this.apellido = apellido;
        this.nombreMascota = nombreMascota;
        this.tipo = tipo;
        this.sexo = sexo;
        this.mailDeContacto = mailDeContacto
    }
}
// Variables de control y almacenamiento  
let operacionDeseada;
let sumaTotal = 0;
let continuarAgregando = true;
let arrayProductos = [];
let continuarAgendando = true;
let arrayClientes = [];

// Función para obtener la fecha del turno
function obtenerFechaTurno() {
    // Obtener la fecha actual
    let fechaActual = new Date();

    // Obtener el día de mañana
    let fechaManana = new Date(fechaActual.getTime());
    fechaManana.setDate(fechaActual.getDate() + 1);

    // Configurar el turno para mañana
    return fechaManana;
}

// Verificar Tipo de Usuario
if (tipoDeUsuario === 'admin') {
    // Funcionalidades del veterinario
    operacionDeseada = prompt("Ingrese el número deseado:\n1. COMPRAR PRODUCTOS\n2. ASIGNAR TURNO VETERINARIO");
    switch (operacionDeseada) {
        case '1':
            // Comprar Productos
            while (continuarAgregando) {
                // Solicitar los datos del producto
                let articulo = prompt('Ingrese el artículo: ');
                let cantidad = parseInt(prompt('Ingrese la cantidad: '));
                let precio = parseInt(prompt('Ingrese el precio'));
                
                // Crear una instancia de Producto y agregarla al array de productos
                let producto = new Producto(articulo, cantidad, precio);
                arrayProductos.push(producto);
                // Calcular la suma parcial
                let sumaParcial = cantidad * precio;
                sumaTotal = sumaTotal + sumaParcial;
                // Verificar si se desea agregar más productos o salir
                let siguiente = prompt('Agregar Producto (+)  Salir (S)');
                if (siguiente === '+') {
                    continuarAgregando = true;
                } 
                else {
                    continuarAgregando = false;
                    // Mostrar el detalle de la compra
                    for (let i = 0; i < arrayProductos.length; i++) {
                        let producto = arrayProductos[i];
                        console.log(`Artículo: ${producto.articulo}, Cantidad: ${producto.cantidad}, Precio Unitario: ${producto.precio}`);
                    }
                    alert('El total de la compra es de: ' + sumaTotal);
                }
            }
            break;
        case '2':
            // Asignar turnos veterinarios
            while (continuarAgendando) {
                let apellido = prompt('Ingrese el apellido: ');
                let nombreMascota = prompt('Nombre Mascota: ');
                let tipo = prompt('Especie/Tipo: ');
                let sexo = prompt('Sexo: ');
                let mailDeContacto = prompt('Ingrese mail de Contacto para enviar recordatorio: ')
                // Crear una instancia de Cliente y agregarla al array de clientes
                let cliente = new Cliente(apellido, nombreMascota, tipo, sexo, mailDeContacto);
                arrayClientes.push(cliente);
                // Verificar si se desea agregar más turnos o salir
                let siguienteTurno = prompt('Agregar Turno (+)  Salir (S)');
                if (siguienteTurno === '+') {
                    continuarAgendando = true;
                } 
                else {
                    continuarAgendando = false;
                    // Mostrar el detalle de los turnos agendados
                    for (let c = 0; c < arrayClientes.length; c++) {
                        let cliente = arrayClientes[c];
                        console.log(`Apellido: ${cliente.apellido}, Mascota: ${cliente.nombreMascota}, Tipo: ${cliente.tipo}, Sexo: ${cliente.sexo}, Mail de Contacto: ${cliente.mailDeContacto}`);
                    }
                    // Configurar el turno para mañana
                    let turno = {
                        fecha: obtenerFechaTurno(),
                    };

                    // Mostrar el turno asignado
                    alert('El turno ha sido asignado:\nFecha: ' + turno.fecha);
                } 
            }
            break;
        default:
            alert('Hasta Pronto');
            break;
    }
} 
else {
    alert('Funcionalidades del cliente en desarrollo')
}


