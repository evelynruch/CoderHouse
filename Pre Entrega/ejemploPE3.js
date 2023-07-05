class UsuarioVete {
    constructor(nombre, mail, password) {
        this.nombreVete = nombre;
        this.mailVete = mail;
        this.passwordVete = password;
        this.tipoUsu = 'veterinario';
    }
}

class Producto {
    constructor(articulo, cantidad, precio) {
        this.artProd = articulo;
        this.cantPrdo = cantidad;
        this.precioProd = precio;
    }
}

class Cliente {
    constructor(apellido, nombreMascota, tipo, sexo, mailDeContacto) {
        this.apMascota = apellido;
        this.nombreMascota = nombreMascota;
        this.tipoMascota = tipo;
        this.sexoMascota = sexo;
        this.mailMascota = mailDeContacto;
    }
}

let arrayProductos = [];
let arrayClientes = [];
let sumaTotal = 0;

let adminUsuariosCreados = [];

let adminUsuario1 = new UsuarioVete('Admin1', 'admin1@example.com', 'admin123');
adminUsuariosCreados.push(adminUsuario1);

let ingresoExitoso = false;

let nombreUsuario = prompt('Ingrese su nombre de usuario:');
let tipoDeUsuario = 'cliente';

if (nombreUsuario === 'Admin1') {
    tipoDeUsuario = adminUsuariosCreados[0].tipoUsu;
    let password = prompt('Ingrese su contraseña:');
    if (password === adminUsuariosCreados[0].password) {
        ingresoExitoso = true;
    }
} else {
    alert('Usuario no reconocido. Funcionalidades del cliente en desarrollo');
}

if (ingresoExitoso) {
    let continuarAgregandoProductos = false;
    let continuarAgendandoTurnos = false;

    if (tipoDeUsuario === 'veterinario') {
        // Funcionalidades del veterinario
        let operacionDeseada = prompt("Ingrese el número deseado:\n1. COMPRAR PRODUCTOS\n2. ASIGNAR TURNO VETERINARIO\n3. AUTORIZAR NUEVO USER ADMIN");

        switch (operacionDeseada) {
            case '1':
                // Comprar Productos
                continuarAgregandoProductos = true;
                while (continuarAgregandoProductos) {
                    // Solicitar los datos del producto
                    let articulo = prompt('Ingrese el artículo: ');
                    let cantidad = parseInt(prompt('Ingrese la cantidad: '));
                    let precio = parseInt(prompt('Ingrese el precio'));

                    // Crear una instancia de Producto y agregarla al array de productos
                    let producto = new Producto(articulo, cantidad, precio);
                    arrayProductos.push(producto);

                    // Calcular la suma parcial
                    let sumaParcial = cantidad * precio;
                    sumaTotal += sumaParcial;

                    // Verificar si se desea agregar más productos o salir
                    let siguiente = prompt('Agregar Producto (+)  Salir (S)');
                    if (siguiente === '+') {
                        continuarAgregandoProductos = true;
                    } else {
                        continuarAgregandoProductos = false;
                        mostrarDetallesCompra();
                    }
                }
                break;

            case '2':
                // Asignar turnos veterinarios
                continuarAgendandoTurnos = true;
                while (continuarAgendandoTurnos) {
                    let apellido = prompt('Ingrese el apellido: ');
                    let nombreMascota = prompt('Nombre Mascota: ');
                    let tipo = prompt('Especie/Tipo: ');
                    let sexo = prompt('Sexo: ');
                    let mailDeContacto = prompt('Ingrese mail de Contacto para enviar recordatorio: ');

                    // Crear una instancia de Cliente y agregarla al array de clientes
                    let cliente = new Cliente(apellido, nombreMascota, tipo, sexo, mailDeContacto);
                    arrayClientes.push(cliente);

                    // Verificar si se desea agregar más turnos o salir
                    let siguienteTurno = prompt('Agregar Turno (+)  Salir (S)');
                    if (siguienteTurno === '+') {
                        continuarAgendandoTurnos = true;
                    } else {
                        continuarAgendandoTurnos = false;
                        mostrarTurnosAgendados();

                        // Configurar el turno para mañana
                        let turno = {
                            fecha: obtenerFechaTurno(),
                        };

                        // Mostrar el turno asignado
                        alert('El turno ha sido asignado:\nFecha: ' + turno.fecha);
                    }
                }
                break;

            case '3':
                // Crear un usuario ADMIN con los permisos de ese tipo de usuario
                let nombreAdmin = prompt('Ingrese el nombre del nuevo usuario: ');
                let mailAdmin = prompt('Ingrese el mail a donde enviaremos el Token de validacion: ');
                let passwordAdminIni = prompt('Ingrese el password inicial de esta cuenta: ');

                // Crear una instancia de UsuarioVete y agregarla a la lista adminUsuariosCreados
                let nuevoAdmin = new UsuarioVete(nombreAdmin, mailAdmin, passwordAdminIni);
                nuevoAdmin.tipoUsu = 'adminUser';
                adminUsuariosCreados.push(nuevoAdmin);

                console.log('Nuevo usuario administrador agregado:', nuevoAdmin);
                break;

            default:
                alert('Hasta Pronto');
                break;
        }
    } else {
        alert('Funcionalidades del cliente en desarrollo');
    }
} else {
    alert('Acceso denegado');
}

// Función para mostrar los detalles de la compra
function mostrarDetallesCompra() {
    for (let i = 0; i < arrayProductos.length; i++) {
        let producto = arrayProductos[i];
        console.log(`Artículo: ${producto.articulo}, Cantidad: ${producto.cantidad}, Precio Unitario: ${producto.precio}`);
    }
    alert('El total de la compra es de: ' + sumaTotal);
}

// Función para mostrar los turnos agendados
function mostrarTurnosAgendados() {
    for (let c = 0; c < arrayClientes.length; c++) {
        let cliente = arrayClientes[c];
        console.log(`Apellido: ${cliente.apellido}, Mascota: ${cliente.nombreMascota}, Tipo: ${cliente.tipo}, Sexo: ${cliente.sexo}, Mail de Contacto: ${cliente.mailDeContacto}`);
    }
}
