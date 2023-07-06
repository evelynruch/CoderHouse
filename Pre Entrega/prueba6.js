// Portal de Usuarios
let listaClientes = []; // Arreglo para almacenar la lista de clientes
let listaVetes = []; // Arreglo para almacenar la lista de Veterinarios


function login() {
  let tipoUsuario = prompt('Ingrese el tipo de usuario (Cliente/Veterinario):');
  tipoUsuario = tipoUsuario.toLowerCase();

  let usuario;
  if (tipoUsuario === 'cliente') {
    usuario = prompt('Ingrese el nombre de usuario:');
    let contrasenia = prompt('Ingrese la contraseña:');

    // Verificar los datos del cliente
    let clienteEncontrado = listaClientes.find(cliente => cliente.nomUsu === usuario && cliente.contraUsu === contrasenia);

    if (clienteEncontrado) {
      // Login exitoso para el cliente
      alert('¡Inicio de sesión exitoso para el cliente!');
      // Mostrar opciones del menú para el cliente
      mostrarMenuCliente();
    } else {
      // Credenciales incorrectas para el cliente
      alert('Credenciales incorrectas. Por favor, intente nuevamente.');
    }
  } else if (tipoUsuario === 'veterinario') {
    usuario = prompt('Ingrese el nombre de usuario:');
    let contrasenia = prompt('Ingrese la contraseña:');

    // Verificar los datos del veterinario
    let veterinarioEncontrado = listaVetes.find(veterinario => veterinario.nomVet === usuario && veterinario.contraVet === contrasenia);

    if (veterinarioEncontrado) {
      // Login exitoso para el veterinario
      alert('¡Inicio de sesión exitoso para el veterinario!');
      // Mostrar opciones del menú para el veterinario
      mostrarMenuVeterinario();
    } else {
      // Credenciales incorrectas para el veterinario
      alert('Credenciales incorrectas. Por favor, intente nuevamente.');
    }
  } else {
    // Tipo de usuario inválido
    alert('Tipo de usuario inválido. Por favor, ingrese "Cliente" o "Veterinario".');
  }
}

function mostrarMenuCliente() {
  let opcion = prompt('Seleccione una opción:\n1. Solicitar turno Veterinario\n2. Agregar mascota\n3. Comprar Productos');
  opcion = parseInt(opcion);

  switch (opcion) {
    case 1:
      // Lógica para solicitar turno veterinario
      // quiero que busque en la lista de clientes los datos del cliente logueado 
      // que pregunte mediante alert el nombre de la mascota para la cual sera el turno
      // que revise en los datos del cliente si la mascota ya se encuentra en la lista
      // si la mascota no se encuentra en la lista, ofrezca al usuario mediante alert cargar los datos de la mascota
      // ya obtuvo el nombre de la mascota, faltaria consultar el tipo de mascota y el sexo.
      // despues de cargar los datos de la mascota, que pregunte el horario en el que desea el turno
      // y luego que utilice la funcion obtenerProximoDiaHabil para responder mediante un alert con todos los datos
      // del turno recientemente creado.
      alert('Solicitando turno veterinario...');
      break;
    case 2:
      // Lógica para agregar mascota
      alert('Agregando mascota...');
      break;
    case 3:
      // Lógica para comprar productos
      alert('Comprando productos...');
      break;
    default:
      alert('Opción inválida.');
      break;
  }
}

function mostrarMenuVeterinario() {
  let opcion = prompt('Seleccione una opción:\n1. Asignar turno veterinario\n2. Agregar Usuario Veterinario\n3. Sumar Stock de nuevos Productos');
  opcion = parseInt(opcion);

  switch (opcion) {
    case 1:
      // Lógica para asignar turno veterinario
      alert('Asignando turno veterinario...');
      break;
    case 2:
      // Lógica para agregar usuario veterinario
      alert('Agregando usuario veterinario...');
      break;
    case 3:
      // Lógica para sumar stock de nuevos productos
      alert('Sumando stock de nuevos productos...');
      break;
    default:
      alert('Opción inválida.');
      break;
  }
}
class UsuarioClientes {
  constructor(nombrU, apellidoU, mailDeContactoU, contrasenia) {
    this.nomUsu = nombrU;
    this.apeUsu = apellidoU;
    this.mailUsu = mailDeContactoU;
    this.contraUsu = contrasenia;
    this.mascotas = []; // Arreglo para almacenar las mascotas del cliente
    this.turnos = []; // Arreglo para almacenar los turnos del cliente
  }

  agregarMascota(nombreMascota, tipoMascota, sexoMascota) {
    const mascota = {
      nombre: nombreMascota,
      tipo: tipoMascota,
      sexo: sexoMascota,
    };
    this.mascotas.push(mascota);
  }

  agregarTurno(nombreMascota, fechaTurno, horaTurno) {
    const turno = {
      apellidoCliente: this.apeUsu,
      nombreMascota: nombreMascota,
      fechaTurno: fechaTurno,
      horaTurno: horaTurno,
    };
    this.turnos.push(turno);
  }
}
// Creación de instancias de UsuarioClientes
let cliente = new UsuarioClientes('maria', 'lopez', 'maria@mail.com', 'maria123');
let cliente2 = new UsuarioClientes('jose', 'perez', 'jose@mail.com', 'jose123');
let cliente3 = new UsuarioClientes('juan', 'antuan', 'juan@mail.com', 'juan123');
let cliente4 = new UsuarioClientes('ramiro', 'firpo', 'ramiro@mail.com', 'ramiro123');
let cliente5 = new UsuarioClientes('lucia', 'martinez', 'lucia@mail.com', 'lucia123');

// Agregar clientes a la lista de clientes
listaClientes.push(cliente, cliente2, cliente3, cliente4, cliente5);

// Agregar mascotas
cliente.agregarMascota('Luna', 'Gato', 'Hembra');
cliente.agregarMascota('Sol', 'Gato', 'Hembra');
cliente.agregarMascota('Estrella', 'Perro', 'Hembra');
cliente2.agregarMascota('Oshy', 'Perro', 'Macho');
cliente2.agregarMascota('Saky', 'Perro', 'Hembra');
cliente3.agregarMascota('Samba', 'Perro', 'Hembra');
cliente4.agregarMascota('Corcho', 'Perro', 'Macho');
cliente5.agregarMascota('Merlin', 'Gato', 'Macho');

class UsuarioVetes {
  constructor(nombreVete, apellidoVete, mailVete, contraseniaVete) {
    this.nomVet = nombreVete;
    this.apeVet = apellidoVete;
    this.mailVet = mailVete;
    this.contraVet = contraseniaVete; 
  }
}

// Creación de instancias de UsuarioVetes
let vete = new UsuarioVetes('daniel', 'gallegos', 'daniel@mail.com', 'daniel123');
let vete2 = new UsuarioVetes('roman', 'maluma', 'roman@mail.com', 'roman123');
let vete3 = new UsuarioVetes('silvina', 'rodriguez', 'silvina@mail.com', 'silvina123');
let vete4 = new UsuarioVetes('magdalena', 'avellaneda', 'magdalena@mail.com', 'magda123');
let vete5 = new UsuarioVetes('ruben', 'rivera', 'ruben@mail.com', 'ruben123');

// Agregar clientes a la lista de clientes
listaVetes.push(vete, vete2, vete3, vete4, vete5);

// Función para obtener el próximo día hábil
function obtenerProximoDiaHabil() {
  let fechaActual = new Date();
  let diaSemana = fechaActual.getDay();
  let diasAgregados = 0;

  if (diaSemana === 5) {
    diasAgregados = 3; // Si es viernes, se agrega 3 días para llegar al próximo martes (día hábil)
  } else if (diaSemana === 6) {
    diasAgregados = 2; // Si es sábado, se agrega 2 días para llegar al próximo martes (día hábil)
  } else {
    diasAgregados = 1; // Para los demás días, se agrega 1 día para llegar al próximo día hábil (martes)
  }

  fechaActual.setDate(fechaActual.getDate() + diasAgregados);

  let dia = fechaActual.getDate();
  let mes = fechaActual.getMonth() + 1; // Sumar 1 porque los meses van de 0 a 11
  let anio = fechaActual.getFullYear();

  let fechaHabil = `${dia}/${mes}/${anio}`;
  return fechaHabil;
}

// Función para buscar un cliente por apellido en la lista de clientes
function buscarClientePorApellido(listaClientes, apellido) {
  return listaClientes.find(cliente => cliente.apeUsu === apellido);
}
function buscarVetePorApellido(listaVetes, apellidoVeterinario) {
  return listaVetes.find(elVete => elVete.apeVet === apellidoVeterinario);
}

// Función para cargar turnos veterinarios
function cargarTurnosVeterinarios(listaClientes) {
  let apellidoCliente = prompt('Ingrese el apellido del cliente: ');
  let clienteEncontrado = buscarClientePorApellido(listaClientes, apellidoCliente);

  if (clienteEncontrado) {
    let continuarCarga = true;
    while (continuarCarga) {
      let nombreMascota = prompt('Ingrese el nombre de la mascota: ');
      let mascotaEncontrada = clienteEncontrado.mascotas.find(mascota => mascota.nombre === nombreMascota);

      if (mascotaEncontrada) {
        let fechaTurno = obtenerProximoDiaHabil();
        let horaTurno = prompt('Ingrese la hora del turno: ');

        clienteEncontrado.agregarTurno(nombreMascota, fechaTurno, horaTurno);
        alert(`Turno agregado correctamente para el ${fechaTurno} a las ${horaTurno}.`);

        let seguirCargando = prompt('¿Desea cargar otro turno? (s/n): ');
        if (seguirCargando.toLowerCase() !== 's') {
          continuarCarga = false;
        }
      } else {
        let cargarMascota = prompt('La mascota no se encuentra en la lista del cliente. ¿Desea cargarla? (s/n): ');
        if (cargarMascota.toLowerCase() === 's') {
          let tipoMascota = prompt('Ingrese el tipo de mascota: ');
          let sexoMascota = prompt('Ingrese el sexo de la mascota: ');

          clienteEncontrado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);
          console.log('Mascota cargada correctamente.');
        } else {
          console.log('No se pudo cargar el turno porque la mascota no está en la lista del cliente.');
        }
      }
    }
  } else {
    console.log('No se encontró al cliente con el apellido ingresado.');
  }
}
// Ejemplo de uso: Cargar turnos veterinarios
// cargarTurnosVeterinarios(listaClientes);

// Función para cargar varias mascotas a un cliente específico
function cargarMascotas(listaClientes) {
  let apellidoCliente = prompt('Ingrese el apellido del cliente: ');
  let clienteEncontrado = listaClientes.find(cliente => cliente.apeUsu === apellidoCliente);

  if (clienteEncontrado) {
    let cantidadMascotas = prompt('Ingrese la cantidad de mascotas a agregar: ');
    cantidadMascotas = parseInt(cantidadMascotas);

    for (let i = 0; i < cantidadMascotas; i++) {
      let nombreMascota = prompt('Ingrese el nombre de la mascota: ');
      let tipoMascota = prompt('Ingrese el tipo de mascota: ');
      let sexoMascota = prompt('Ingrese el sexo de la mascota: ');

      clienteEncontrado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);
      console.log('Mascota cargada correctamente.');
    }
  } else {
    console.log('No se encontró al cliente con el apellido ingresado.');
  }
}
// Ejemplo de uso: Cargar mascotas para un cliente específico
// cargarMascotas(listaClientes);

login()