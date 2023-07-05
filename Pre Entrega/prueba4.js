let ingresoExitoso = false;
let esVete = false;
let arrayTurnos = []; // Declaración de la lista de turnos como una variable global

let login = prompt('Ingrese su nombre de usuario: ');
let passLogin = prompt('Ingrese su contraseña: ');

class UsuarioClientes {
    constructor(nombrU, apellidoU, mailDeContactoU, contrasenia) {
        this.nomUsu = nombrU;
        this.apeUsu = apellidoU;
        this.mailUsu = mailDeContactoU;
        this.contraUsu = contrasenia;
        this.mascotas = []; // Arreglo para almacenar las mascotas del cliente
    }

    establecerContrasenia(contrasenia) {
        this.contraUsu = contrasenia;
    }
    
    validarPassCliente(contraseniaIngresadaCliente) {
        return this.contraUsu === contraseniaIngresadaCliente;
    }

    agregarMascota(nombreMascota, tipoMascota, sexoMascota) {
        const mascota = {
            nombre: nombreMascota,
            tipo: tipoMascota,
            sexo: sexoMascota
        };
        this.mascotas.push(mascota);
    }
}

let clientesUsers = [
    new UsuarioClientes('maria', 'lopez', 'maria@mail.com', 'maria1979'),
    new UsuarioClientes('jose', 'perez', 'jose@mail.com', 'jose1983')
];

// COMO HAGO PARA BUSCAR AL USUARIO MARIA PARA AGREGARLE MASCOTAS
// Buscar la instancia de UsuarioClientes correspondiente a "maria"
let maria = clientesUsers.find(cliente => cliente.nomUsu === 'maria');
// Verificar si se encontró la instancia de "maria"
if (maria) {
    maria.agregarMascota('Luna', 'Gato', 'Hembra');
    maria.agregarMascota('Max', 'Perro', 'Macho');
} else {
    console.log('No se encontró al cliente "maria" en la lista de clientes.');
}

class UsuarioVete {
    constructor(nombre, mail, contrasenia) {
        this.nomVete = nombre;
        this.mailVete = mail;
        this.contraVete = contrasenia;
        this.tipoUsu = 'veterinario';
    }

    validarPassVete(contraseniaIngresada) {
        return this.contraVete === contraseniaIngresada;
    }
}

let veteUsers = [
    new UsuarioVete('uservete', 'patitas@mail.com', '1234')
];

let nuevosVeteUsers = [];

function buscarUsuario(listaUsuarios, nombreUsuario, contrasenia) {
    for (let i = 0; i < listaUsuarios.length; i++) {
        let usuario = listaUsuarios[i];
        if (usuario.tipoUsu === 'veterinario') {
            if (usuario.nomVete === nombreUsuario && usuario.validarPassVete(contrasenia)) {
                return usuario;
            }
        } else {
            if (usuario.nomUsu === nombreUsuario && usuario.validarPassCliente(contrasenia)) {
                return usuario;
            }
        }
    }
    return null;
}

let clienteEncontrado = buscarUsuario(clientesUsers, login, passLogin);
let veterinarioEncontrado = buscarUsuario(veteUsers.concat(nuevosVeteUsers), login, passLogin);

function agregarTurno(cliente) {
    let apellido = prompt('Ingrese el apellido: ');
    let nombreMascota = prompt('Nombre Mascota: ');
    let tipo = prompt('Especie/Tipo: ');
    let sexo = prompt('Sexo: ');
    let mailDeContacto = prompt('Ingrese mail de Contacto para enviar recordatorio: ');

    let turno = {
        apellidoCliente: apellido,
        nombreMascota: nombre,
        fechaTurno: fecha,
        horaTurno: hora,
    };
    
    cliente.turnos.push(turno); // Agregar el turno al cliente
    arrayTurnos.push(turno); // Agregar el turno a la lista de turnos global
    console.log('Turno agregado correctamente:', turno);
}

function buscarClientePorApellido(clientes, apellido) {
    return clientes.find((cliente) => cliente.apeUsu === apellido);
}
function agregarTurnoCLienteEncontrado(clienteEncontrado) {
    agregarTurno(clienteEncontrado);
}

///////////////////////////////////////////

    if (mascotas.length === 1) {
        // Si el cliente tiene solo una mascota
        let mascotaUnica = mascotas[0];
        console.log(`El cliente tiene una mascota: ${mascotaUnica.nombre}`);

        let respuesta = prompt('¿Desea agendar un turno para esta mascota? (si/no)').toLowerCase();
        if (respuesta === 'si') {
            // Agendar turno para la única mascota del cliente
            let nuevoTurno = {
                cliente: clienteEncontrado,
                mascota: mascotaUnica,
                fecha: obtenerProximoDiaHabil(),
                hora: '10am'
            };

            arrayTurnos.push(nuevoTurno);

            console.log('Turno agregado exitosamente');
        } else if (respuesta !== 'no') {
            console.log('Respuesta inválida. Por favor, ingrese "si" o "no".');
        }
    } else if (mascotas.length > 1) {
        // Si el cliente tiene más de una mascota
        console.log('El cliente tiene las siguientes mascotas:');
        mascotas.forEach((mascota, index) => {
            console.log(`${index + 1}. ${mascota.nombre}`);
        });

        let indiceMascota = parseInt(prompt('Seleccione la mascota para agendar el turno (ingrese el número):'));
        if (indiceMascota >= 1 && indiceMascota <= mascotas.length) {
            let mascotaSeleccionada = mascotas[indiceMascota - 1];

            // Agendar turno para la mascota seleccionada
            let nuevoTurno = {
                cliente: clienteEncontrado,
                mascota: mascotaSeleccionada,
                fecha: obtenerProximoDiaHabil(),
                hora: '10am'
            };

            arrayTurnos.push(nuevoTurno);

            console.log('Turno agregado exitosamente');
        } else {
            console.log('Índice de mascota inválido');
        }
    } else {
        console.log('El cliente no tiene mascotas registradas');
    }
}

function obtenerProximoDiaHabil() {
    // Lógica para obtener el próximo día hábil (puede variar según tus necesidades)
    let fechaActual = new Date();
    let diaSemana = fechaActual.getDay();
    let diasAgregados = 0;

    // 0 = Domingo, 6 = Sábado
    if (diaSemana === 5) {
        // Si es viernes, se agrega 3 días para llegar al próximo martes (día hábil)
        diasAgregados = 3;
    } else if (diaSemana === 6) {
        // Si es sábado, se agrega 2 días para llegar al próximo martes (día hábil)
        diasAgregados = 2;
    } else {
        // Para los demás días, se agrega 1 día para llegar al próximo día hábil (martes)
        diasAgregados = 1;
    }

    fechaActual.setDate(fechaActual.getDate() + diasAgregados);

    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth() + 1; // Sumar 1 porque los meses van de 0 a 11
    let anio = fechaActual.getFullYear();

    return `${dia}/${mes}/${anio}`;
}
function mostrarTurnosAgendados() {
    let turnosMensaje = 'Turnos agendados:\n';
    for (let i = 0; i < arrayTurnos.length; i++) {
        let turno = arrayTurnos[i];
        turnosMensaje += `Cliente: ${turno.cliente.apellido}, Mascota: ${turno.cliente.nombreMascota}, Fecha: ${turno.fecha}\n`;
    }
    alert(turnosMensaje);
}

if (clienteEncontrado) {
    console.log('Contraseña correcta');
    ingresoExitoso = true;
} else if (veterinarioEncontrado) {
    console.log('Contraseña correcta');
    ingresoExitoso = true;
    esVete = true;
}

if (ingresoExitoso) {
    console.log('Ingreso exitoso');
    if (esVete) {
        // Portal para veterinarios
        let continuarMenuVete = true;
        while (continuarMenuVete) {
            operacionDeseada = prompt("Ingrese el número deseado:\n1. COMPRAR PRODUCTOS\n2. ASIGNAR TURNO VETERINARIO\n3. AUTORIZAR NUEVO USER VETERINARIO");
            switch (operacionDeseada) {
                case '1':
                    let arrayProductos = [];
                    let sumaTotal = 0;
                    let continuarAgregandoProductos = true;

                    do {
                        let articulo = prompt('Ingrese el artículo: ');
                        let cantidad = parseInt(prompt('Ingrese la cantidad: '));
                        let precio = parseInt(prompt('Ingrese el precio'));

                        let producto = {
                            articulo: articulo,
                            cantidad: cantidad,
                            precio: precio
                        };
                        arrayProductos.push(producto);

                        let sumaParcial = cantidad * precio;
                        sumaTotal += sumaParcial;

                        let respuesta = prompt('¿Desea agregar más productos? (si/no)').toLowerCase();
                        if (respuesta === 'no') {
                            continuarAgregandoProductos = false;
                        } else if (respuesta !== 'si') {
                            alert('Respuesta errónea. Por favor, recuerde ingresar "si" o "no".');
                        }
                    } while (continuarAgregandoProductos);

                    // Función para mostrar los detalles de la compra
                    function mostrarDetallesCompra() {
                        let productosMensaje = 'Productos comprados:\n';
                        for (let i = 0; i < arrayProductos.length; i++) {
                            let producto = arrayProductos[i];
                            productosMensaje += `Artículo: ${producto.articulo}, Cantidad: ${producto.cantidad}, Precio Unitario: ${producto.precio}\n`;
                        }
                        alert(productosMensaje);

                        let totalSinIva = sumaTotal / 1.09;
                        let totalConIva = sumaTotal;
                        let totalFinanciado = sumaTotal * 1.09;

                        let totalMensaje = `Total a pagar:\nSin IVA: $${totalSinIva.toFixed(2)}\nCon IVA: $${totalConIva.toFixed(2)}\nFinanciado a 30 días con una tasa del 9%: $${totalFinanciado.toFixed(2)}`;

                        let opcionElegida = prompt('Ingrese el número deseado:\n1. Ver Total a Pagar (Sin IVA)\n2. Ver Total a Pagar (Con IVA)\n3. Ver Total Financiado a 30 días con una tasa del 9%');

                        switch (opcionElegida) {
                            case '1':
                                alert(`Total a pagar (Sin IVA): $${totalSinIva.toFixed(2)}`);
                                break;
                            case '2':
                                alert(`Total a pagar (Con IVA): $${totalConIva.toFixed(2)}`);
                                break;
                            case '3':
                                alert(`Total Financiado a 30 días con una tasa del 9%: $${totalFinanciado.toFixed(2)}`);
                                break;
                            default:
                                mostrarDetallesCompra();
                                break;
                        }
                    }
                    mostrarDetallesCompra();
                    break;
                case '2':
                    let continuarAgendandoTurnos = true;
                    while (continuarAgendandoTurnos) {
                        let opcionCliente = prompt('Seleccione una opción:\n1. Nuevo cliente\n2. Cliente existente\n3. Buscar cliente en lista');
                        if (opcionCliente === '1') {
                            // Crear un nuevo cliente con una contraseña por defecto
                            let nuevoCliente = new UsuarioClientes();
                            nuevoCliente.nomUsu = prompt('Ingrese el nombre: ');
                            nuevoCliente.apeUsu = prompt('Ingrese el apellido: ');
                            nuevoCliente.mailUsu = prompt('Ingrese el mail de contacto: ');
                            nuevoCliente.establecerContrasenia(prompt('Ingrese la contraseña por defecto: '));

                            // Agregar el nuevo cliente a la lista de clientes
                            clientesUsers.push(nuevoCliente);
                            console.log('Nuevo cliente creado exitosamente');

                            agregarTurno(cliente);

                        } else if (opcionCliente === '2') {
                            let apellidoCliente = prompt('Ingrese el apellido del cliente a buscar: ');
                            let clienteEncontrado = buscarCliente(arrayClientes, apellidoCliente);
                            if (clienteEncontrado) {
                                console.log('Cliente encontrado:', clienteEncontrado);
                                // Agregar turno para el cliente encontrado
                                agregarTurnoCLienteEncontrado(clienteEncontrado);
                                let loginCliente = prompt('Ingrese el nombre de usuario del cliente: ');

                            } else if (opcionCliente === '3') {
                                // Buscar cliente en lista
                                let apellidoCliente = prompt('Ingrese el apellido del cliente a buscar: ');
                                let clienteEncontrado = buscarCliente(arrayClientes, apellidoCliente);
                                if (clienteEncontrado) {
                                    console.log('Cliente encontrado:', clienteEncontrado);
                                    // Agregar turno para el cliente encontrado
                                    agregarTurno(clienteEncontrado);
                                } else {
                                    console.log('Cliente no encontrado');
                                    // Aquí puedes agregar código adicional para manejar el caso de cliente no encontrado
                                }
                            } else {
                                console.log('Opción inválida');
                                // Aquí puedes agregar código adicional para manejar el caso de opción inválida
                            }

                            // Verificar si se desea agregar más turnos o salir
                            let siguienteTurno = prompt('Agregar Turno (+)  Salir (S)');
                            if (siguienteTurno === '+') {
                                continuarAgendandoTurnos = true;
                            } else {
                                continuarAgendandoTurnos = false;
                                mostrarTurnosAgendados();

                                // Configurar el turno para mañana
                                let turno = {
                                    cliente: cliente,
                                    fecha: obtenerFechaTurno(),
                                };
                                arrayTurnos.push(turno);

                                console.log('Turno asignado para el cliente', cliente, 'en la fecha', turno.fecha);
                                break;
                            }
                        }
                    }
                    break;
                case '3':
                    // ESTO NO ME FUNCIONA; CUANDO VUELVO A ENTRAR NO ME REGISTRA EL USUARIO NUEVO QUE CREÉ.
                    // Autorizar nuevo usuario veterinario
                    let nombreNuevoVet = prompt('Ingrese el nombre del nuevo veterinario: ');
                    let mailNuevoVet = prompt('Ingrese el correo electrónico del nuevo veterinario: ');
                    let passNuevoVet = prompt('Ingrese la contraseña del nuevo veterinario: ');

                    let nuevoVet = new UsuarioVete(nombreNuevoVet, mailNuevoVet, passNuevoVet);
                    nuevosVeteUsers.push(nuevoVet);

                    console.log('Nuevo veterinario agregado:', nuevoVet);
                    break;
                default:
                    Alert('Opcion No valida');
                    break;
            }
            let respuesta = prompt('¿Desea volver al menú anterior? (si/no)').toLowerCase();
            if (respuesta === 'no') {
                continuarMenuVete = false;
                alert('Hasta Pronto')
            }
        }
    }
    else {
        // Portal para clientes
        operacionDeseada = prompt('Bienvenido. Ingrese el número deseado:\n1. REGISTRARME\n2. SOY CLIENTE, DESEO VALIDAR MI USUARIO\n3. COMPRAR PRODUCTOS\n3. SOLICITAR TURNO VETERINARIO');
    }
}
else {
    alert('Contraseña incorrecta. Ingreso no autorizado');
}


// cliente is not defined
// buscar cliente is not defined
