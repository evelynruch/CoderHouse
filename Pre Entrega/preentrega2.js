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

let ingresoExitoso = false;
let esAdmin = false;

class UsuarioClientes {
    constructor(nombre, mail, contrasenia) {
        this.nomUsu = nombre;
        this.mailUsu = mail;
        this.contraUsu = contrasenia;
    }

    validarContraseniaCliente() {
        let contraseniaValida;

        switch (this.nomUsu) {
            case 'maria':
                contraseniaValida = 'maria1979';
                break;
            case 'jose':
                contraseniaValida = 'jose1983';
                break;
            default:
                contraseniaValida = '';
                break;
        }

        if (this.contraUsu === contraseniaValida) {
            ingresoExitoso = true;
            console.log('Contraseña correcta');
        } else {
            ingresoExitoso = false;
            this.nomUsu = prompt(`${this.contraUsu} no es una contraseña válida. Ingrese su nombre de usuario: `);
        }
    }
}

class UsuarioVete {
    constructor(nombre, mail, contrasenia) {
        this.nomUsu = nombre;
        this.mailUsu = mail;
        this.contraUsu = contrasenia;
        this.tipoUsu = 'adminUser';
    }

    validarContraseniaAdmin() {
        let contraseniaValida;

        switch (this.nomUsu) {
            case 'uservete':
                contraseniaValida = '1234';
                break;
            default:
                contraseniaValida = '';
                break;
        }

        if (this.contraUsu === contraseniaValida) {
            ingresoExitoso = true;
            console.log('Contraseña correcta');
        } else {
            ingresoExitoso = false;
            this.nomUsu = prompt(`${this.contraUsu} no es una contraseña válida. Ingrese su nombre de usuario: `);
        }
    }
}

let clUsuariosCreados = [
    new UsuarioClientes('maria', 'maria@mail.com', 'maria1979'),
    new UsuarioClientes('jose', 'jose@mail.com', 'jose1983')
];
  
let adminUsuariosCreados = [
    new UsuarioVete('uservete', 'patitas@mail.com', '1234')
];
  
clUsuariosCreados.forEach(function(usuarioFn) {
    usuarioFn.validarContraseniaCliente();
});
  
adminUsuariosCreados.forEach(function(usuarioFn) {
    usuarioFn.validarContraseniaAdmin();
});

let nombreUsuario = prompt('Ingrese su nombre de usuario: ');

if (nombreUsuario) {
    let usuarioEncontrado;

    if (nombreUsuario === 'uservete') {
        esAdmin = true;
        usuarioEncontrado = adminUsuariosCreados.find((usuario) => usuario.nomUsu === nombreUsuario);
    } 
    else {
        usuarioEncontrado = clUsuariosCreados.find((usuario) => usuario.nomUsu === nombreUsuario);
    }

    if (usuarioEncontrado) {
        if (esAdmin) {
            usuarioEncontrado.validarContraseniaAdmin();
        } else {
            usuarioEncontrado.validarContraseniaCliente();
        }

        if (ingresoExitoso) {
            if (esAdmin) {
                operacionDeseada = prompt("Ingrese el número deseado:\n1. COMPRAR PRODUCTOS\n2. ASIGNAR TURNO VETERINARIO\n3. AUTORIZAR NUEVO USER ADMIN");
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
            } 
            else if (!esAdmin && ingresoExitoso) {
                alert('Funcionalidades del cliente en desarrollo');
            } 
            else {
                alert('Hasta Pronto');
            }
        } 
        else {
            alert('Usuario no encontrado');
        }
    } 
    else {
        alert('Debe ingresar un nombre de usuario');
    }
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
console.log(adminUsuariosCreados)