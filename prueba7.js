// Variables de estado
let ingresoExitoso = false;
let esVete = false;
let arrayTurnos = []; // Declaración de la lista de turnos como una variable global

// Solicitar nombre de usuario y contraseña al usuario
let login = prompt('Ingrese su nombre de usuario: ');
let passLogin = prompt('Ingrese su contraseña: ');

// Definición de la clase UsuarioClientes
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
      sexo: sexoMascota,
    };
    this.mascotas.push(mascota);
  }
}
function cargarMascotas(cliente, cantidadMascotas) {
  for (let i = 0; i < cantidadMascotas; i++) {
    let nombreMascota = prompt('Ingrese el nombre de la mascota: ');
    let tipoMascota = prompt('Ingrese el tipo de mascota: ');
    let sexoMascota = prompt('Ingrese el sexo de la mascota: ');

    cliente.agregarMascota(nombreMascota, tipoMascota, sexoMascota);
    console.log('Mascota cargada correctamente.');
  }
}

// Creación de instancias de UsuarioClientes
let clientesUsers = [
  new UsuarioClientes('maria', 'lopez', 'maria@mail.com', 'maria1979'),
  new UsuarioClientes('jose', 'perez', 'jose@mail.com', 'jose1983'),
  new UsuarioClientes('pedro', 'sanchez', 'pedro@mail.com', 'pedrosan'),
  new UsuarioClientes('laila', 'gallegos', 'laila@mail.com', 'laila1234'),
  new UsuarioClientes('milena', 'blondel', 'milena@mail.com', 'mile123'),
];


//Vamos a Cargar algunas mascotas
// Buscar la instancia de UsuarioClientes correspondiente a "maria"
let maria = clientesUsers.find((cliente) => cliente.nomUsu === 'maria');
// Verificar si se encontró la instancia de "maria"
if (maria) {
  maria.agregarMascota('Luna', 'Gato', 'Hembra');
  maria.agregarMascota('Max', 'Perro', 'Macho');
} else {
  console.log('No se encontró al cliente "maria" en la lista de clientes.');
}

// Definición de la clase UsuarioVete
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

// Creación de instancias de UsuarioVete
let veteUsers = [
  new UsuarioVete('uservete', 'patitas@mail.com', '1234'),
  new UsuarioVete('uservete2', 'uservete2@mail.com', '1234'),
  new UsuarioVete('uservete3', 'uservete3@mail.com', '1234'),
  new UsuarioVete('uservete4', 'uservete4@mail.com', '1234'),
];

let nuevosVeteUsers = [];

// Función para buscar un usuario en la lista de usuarios
function buscarUsuario(listaUsuarios, nombreUsuario, contrasenia) {
  for (let i = 0; i < listaUsuarios.length; i++) {
    let usuario = listaUsuarios[i];
    if (usuario.tipoUsu === 'veterinario') {
      if (
        usuario.nomVete === nombreUsuario &&
        usuario.validarPassVete(contrasenia)
      ) {
        return usuario;
      }
    } else {
      if (
        usuario.nomUsu === nombreUsuario &&
        usuario.validarPassCliente(contrasenia)
      ) {
        return usuario;
      }
    }
  }
  return null;
}

// Buscar al usuario ingresado en la lista de usuarios
let clienteEncontrado = buscarUsuario(clientesUsers, login, passLogin);
let veterinarioEncontrado = buscarUsuario(
  veteUsers.concat(nuevosVeteUsers),
  login,
  passLogin
);

// Función para agregar un turno a un cliente
function agregarTurno(cliente) {
  let apellido = prompt('Ingrese el apellido: ');
  let nombre = prompt('Ingrese el nombre de la mascota: ');
  let fecha = prompt('Ingrese la fecha del turno: ');
  let hora = prompt('Ingrese la hora del turno: ');

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

// Función para buscar un cliente por apellido en la lista de clientes
function buscarClientePorApellido(clientes, apellido) {
  return clientes.find((cliente) => cliente.apeUsu === apellido);
}

function mostrarTurnosAgendados() {
  let turnosMensaje = 'Turnos agendados:\n';
  for (let i = 0; i < arrayTurnos.length; i++) {
    let turno = arrayTurnos[i];
    turnosMensaje += `Cliente: ${turno.cliente.apellido}, Mascota: ${turno.cliente.nombreMascota}, Fecha: ${turno.fecha}\n`;
  }
  alert(turnosMensaje);
}

// Función para agregar un turno al cliente encontrado
function agregarTurnoCLienteEncontrado(clienteEncontrado) {
  agregarTurno(clienteEncontrado);
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

// Si el cliente es encontrado
if (clienteEncontrado !== null) {
  console.log('Bienvenido/a ' + clienteEncontrado.nomUsu + ' ' + clienteEncontrado.apeUsu);
  console.log('Su mail de contacto es: ' + clienteEncontrado.mailUsu);
  console.log('Usted es un cliente.');

  // Mientras el ingreso no sea exitoso
  while (ingresoExitoso === false) {
    let operacionDeseada = prompt(
      'Indique la operación que desea realizar:\n1. Ver datos de sus mascotas\n2. Agendar turno para sus mascotas\n3. Cargar mascotas\n4. Salir'
    );

    switch (operacionDeseada) {
      case '1':
        if (clienteEncontrado.mascotas.length === 0) {
          console.log('No tiene mascotas registradas.');
        } else {
          console.log('Sus mascotas:');
          for (let i = 0; i < clienteEncontrado.mascotas.length; i++) {
            console.log(
              'Nombre: ' +
              clienteEncontrado.mascotas[i].nombre +
              ', Tipo: ' +
              clienteEncontrado.mascotas[i].tipo +
              ', Sexo: ' +
              clienteEncontrado.mascotas[i].sexo
            );
          }
        }
        break;

      case '2':
        let continuarAgendandoTurnos = true;
        while (continuarAgendandoTurnos) {
          let opcionCliente = prompt(
            'Seleccione una opción:\n1. Nuevo cliente\n2. Cliente existente\n3. Buscar cliente en lista'
          );
          if (opcionCliente === '1') {
            // Nuevo cliente
            let nombreCliente = prompt('Ingrese el nombre del cliente: ');
            let apellidoCliente = prompt('Ingrese el apellido del cliente: ');
            let mailCliente = prompt('Ingrese el mail del cliente: ');
            let contraseniaCliente = prompt('Ingrese la contraseña del cliente: ');

            let nuevoCliente = new UsuarioClientes(
              nombreCliente,
              apellidoCliente,
              mailCliente,
              contraseniaCliente
            );
            clientesUsers.push(nuevoCliente);

            clienteEncontrado = nuevoCliente;
            console.log('Cliente creado y agregado correctamente.');
            agregarTurnoCLienteEncontrado(clienteEncontrado);

            continuarAgendandoTurnos = false;
          } else if (opcionCliente === '2') {
            // Cliente existente
            let apellidoCliente = prompt('Ingrese el apellido del cliente a buscar: ');
            let clienteEncontrado = buscarClientePorApellido(clientesUsers, apellidoCliente);
            if (clienteEncontrado) {
              console.log('Cliente encontrado:', clienteEncontrado);
              agregarTurnoCLienteEncontrado(clienteEncontrado);
            } else {
              console.log('Cliente no encontrado.');
            }

            continuarAgendandoTurnos = false;
          } else if (opcionCliente === '3') {
            // Buscar cliente en lista
            let apellidoCliente = prompt('Ingrese el apellido del cliente a buscar: ');
            let clienteEncontrado = buscarClientePorApellido(clientesUsers, apellidoCliente);
            if (clienteEncontrado) {
              console.log('Cliente encontrado:', clienteEncontrado);
            } else {
              console.log('Cliente no encontrado.');
            }
          } else {
            console.log('Opción inválida. Por favor, intente nuevamente.');
          }
        }
        break;

      case '3':
        let cantidadMascotas = parseInt(prompt('Ingrese la cantidad de mascotas a cargar: '));
        cargarMascotas(clienteEncontrado, cantidadMascotas);
        break;

      case '4':
        console.log('Sesión finalizada.');
        ingresoExitoso = true;
        break;
    }
  }
} else if (veterinarioEncontrado !== null) {
  console.log('Bienvenido/a ' + veterinarioEncontrado.nomVete);
  console.log('Su mail de contacto es: ' + veterinarioEncontrado.mailVete);
  console.log('Usted es un veterinario.');

  // Mientras no sea veterinario
  while (esVete === false) {
    let operacionDeseadaVete = prompt(
      'Indique la operación que desea realizar:\n1. Ver listado de turnos\n2. Ver listado de turnos del día\n3. Comprar Productos\n4. Asignar Turno Veterinario\n5. Autorizar Nuevo Veterinario\n6. Salir'
    );
    switch (operacionDeseadaVete) {
      case '1':
        if (arrayTurnos.length === 0) {
          console.log('No hay turnos registrados.');
        } else {
          console.log('Listado de turnos:');
          arrayTurnos.forEach((turno) => {
            console.log(
              'Apellido Cliente: ' +
              turno.apellidoCliente +
              ', Nombre Mascota: ' +
              turno.nombreMascota +
              ', Fecha Turno: ' +
              turno.fechaTurno +
              ', Hora Turno: ' +
              turno.horaTurno
            );
          });
        }
        break;

      case '2':
        let fechaTurno = prompt('Ingrese la fecha del turno a buscar (dd/mm/aaaa):');
        let turnosDelDia = arrayTurnos.filter((turno) => turno.fechaTurno === fechaTurno);
        if (turnosDelDia.length === 0) {
          console.log('No hay turnos registrados para la fecha ' + fechaTurno);
        } else {
          console.log('Listado de turnos para la fecha ' + fechaTurno);
          turnosDelDia.forEach((turno) => {
            console.log(
              'Apellido Cliente: ' +
              turno.apellidoCliente +
              ', Nombre Mascota: ' +
              turno.nombreMascota +
              ', Hora Turno: ' +
              turno.horaTurno
            );
          });
        }
        break;

      case '3':
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
      case '4':
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
      case '5':
        // Autorizar nuevo usuario veterinario
        let nombreNuevoVet = prompt('Ingrese el nombre del nuevo veterinario: ');
        let mailNuevoVet = prompt('Ingrese el correo electrónico del nuevo veterinario: ');
        let passNuevoVet = prompt('Ingrese la contraseña del nuevo veterinario: ');

        let nuevoVet = new UsuarioVete(nombreNuevoVet, mailNuevoVet, passNuevoVet);
        nuevosVeteUsers.push(nuevoVet);

        console.log('Nuevo veterinario agregado:', nuevoVet);
        break;

      case '6':
        console.log('Sesión finalizada.');
        esVete = true;
        break;

      default:
        console.log('Opción inválida. Por favor, intente nuevamente.');
        break;
    }
  }
}



