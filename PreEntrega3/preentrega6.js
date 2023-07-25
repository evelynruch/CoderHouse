let listaClientes = []; // Arreglo para almacenar la lista de clientes
let listaVetes = []; // Arreglo para almacenar la lista de Veterinarios
let usuario;
let clienteLogueado = null;
let clienteEncontrado = null; // Variable global para almacenar el cliente encontrado


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

  agregarTurno(apellidoCliente, nombreMascota, fechaTurno, horaTurno) {
    const turno = {
      apellidoCliente: apellidoCliente,
      nombreMascota: nombreMascota,
      fechaTurno: fechaTurno,
      horaTurno: horaTurno,
    };
    this.turnos.push(turno);
  }
}

function agregarClientesYMascotas() {
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

}

class UsuarioVetes {
  constructor(nombreVete, apellidoVete, mailVete, contraseniaVete) {
    this.nomVet = nombreVete;
    this.apeVet = apellidoVete;
    this.mailVet = mailVete;
    this.contraVet = contraseniaVete;
  }
}

function agregarVeterinarios() {
  let vete = new UsuarioVetes('daniel', 'gallegos', 'daniel@mail.com', 'daniel123');
  let vete2 = new UsuarioVetes('roman', 'maluma', 'roman@mail.com', 'roman123');
  let vete3 = new UsuarioVetes('silvina', 'rodriguez', 'silvina@mail.com', 'silvina123');
  let vete4 = new UsuarioVetes('magdalena', 'avellaneda', 'magdalena@mail.com', 'magda123');
  let vete5 = new UsuarioVetes('ruben', 'rivera', 'ruben@mail.com', 'ruben123');
  // Agregar clientes a la lista de clientes
  listaVetes.push(vete, vete2, vete3, vete4, vete5);

}

agregarClientesYMascotas()
agregarVeterinarios()

function mostrarSubMenu() {
  // Ocultar el menú principal del cliente
  document.getElementById("loginForm").style.display = "none";

  // Obtener el valor seleccionado en la lista desplegable
  const selectedOption = document.getElementById("clientMenu").value;

  // Mostrar el submenú correspondiente según la opción seleccionada
  switch (selectedOption) {
    case "turno":
      // Mostrar el menú para cargar turno veterinario
      document.getElementById("menuCargarTurno").style.display = "block";
      break;
    case "mascota":
      // Mostrar el menú para cargar nueva mascota
      document.getElementById("menuCargarMascota").style.display = "block";
      break;
    case "productos":
      // Mostrar el menú para comprar productos
      document.getElementById("menuComprarProductos").style.display = "block";
      break;
    case "mis_turnos":
      // Mostrar el menú de mis turnos
      document.getElementById("menuMisTurnos").style.display = "block";
      break;
    case "logout":
      // Redirigir al menú de inicio de sesión (mostrar el menú de inicio de sesión)
      mostrarMenuInicioSesion();
      break;
    default:
      // Mostramos nuevamente el menú principal del cliente
      document.getElementById("clientMenu").style.display = "block";
      break;
  }
}

function cargarTurnoVeterinario() {
  // Obtener el formulario y registrar el evento submit
  const turnoForm = document.getElementById("turnoForm");

  // Mostrar el menú para cargar turno veterinario y ocultar el formulario de inicio de sesión
  document.getElementById("clientMenu").style.display = "none";
  document.getElementById("menuCargarTurno").style.display = "block";

  turnoForm.onsubmit = function (event) {
    event.preventDefault(); // Evitar que se envíe el formulario

    // Obtener los valores ingresados en el formulario
    const nombreMascota = document.getElementById("nombreMascota").value;
    const horarioTurno = document.getElementById("horarioTurno").value;

    clienteLogueado = listaClientes.find((cliente) => cliente.nomUsu === usuario);

    // Buscar la mascota en la lista de mascotas del cliente
    let mascotasEncontradas = clienteLogueado.mascotas.filter(
      (mascota) => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase()
    );

    if (mascotasEncontradas.length > 0) {
      // no me sale adaptar mi codigo
    } else {
      // La mascota no existe en la lista del cliente
      let confirmacion = window.confirm('La mascota no se encuentra en la lista. ¿Desea agregarla?');
      if (confirmacion) {
      // no me sale adaptar mi codigo
      } else {
        alert('No se agregó la mascota. Operación cancelada.');
        mostrarClienteMenu();
      }
    }
    // Limpiar el formulario después de procesar los datos
    turnoForm.reset();
    mostrarClienteMenu();
  };
}


// Función para mostrar el menú principal del cliente
function mostrarClienteMenu() {
  // Ocultar todos los submenús
  document.getElementById("vetMenu").style.display = "none";
  document.getElementById("menuCargarTurno").style.display = "none";
  document.getElementById("menuCargarMascota").style.display = "none";
  document.getElementById("menuComprarProductos").style.display = "none";
  document.getElementById("menuMisTurnos").style.display = "none";

  // Mostrar el menú principal del cliente
  document.getElementById("clientMenu").style.display = "block";
  mostrarSubMenu();
}

// Función para mostrar el menú de inicio de sesión
function mostrarMenuInicioSesion() {
  // Ocultar todos los submenús
  document.getElementById("menuCargarTurno").style.display = "none";
  document.getElementById("menuCargarMascota").style.display = "none";
  document.getElementById("menuComprarProductos").style.display = "none";
  document.getElementById("menuMisTurnos").style.display = "none";

  // Mostrar el menú de inicio de sesión
  document.getElementById("loginForm").style.display = "block";
}

// Función para guardar la información del usuario logueado en el LocalStorage
function guardarUsuarioLogueado(usuario) {
  localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
}

// Función para obtener la información del usuario logueado desde el LocalStorage
function obtenerUsuarioLogueado() {
  const usuarioGuardado = localStorage.getItem('usuarioLogueado');
  return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
}

// Función para realizar el inicio de sesión
function iniciarSesion() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const usertype = document.getElementById("usertype").value;

  // Verificar si el usuario es cliente o veterinario
  if (usertype === "cliente") {
    // Buscar el cliente en la lista de clientes
    clienteEncontrado = listaClientes.find(
      (cliente) => cliente.nomUsu === username && cliente.contraUsu === password
    );

    if (clienteEncontrado) {
      clienteLogueado = clienteEncontrado;
      // Guardar la información del cliente logueado en el LocalStorage
      guardarUsuarioLogueado(clienteLogueado);
      // Mostrar el menú principal del cliente
      mostrarClienteMenu();
    } else {
      // Mostrar mensaje de error en caso de credenciales incorrectas
      document.getElementById("errorMessage").style.display = "block";
    }
  } else if (usertype === "veterinario") {
    // Resto del código para el inicio de sesión del veterinario
  }
}

// Función para mostrar el menú de inicio de sesión
function mostrarMenuInicioSesion() {
  // Ocultar todos los submenús
  document.getElementById("menuCargarTurno").style.display = "none";
  document.getElementById("menuCargarMascota").style.display = "none";
  document.getElementById("menuComprarProductos").style.display = "none";
  document.getElementById("menuMisTurnos").style.display = "none";

  // Mostrar el menú de inicio de sesión
  document.getElementById("loginForm").style.display = "block";
}

// Función para guardar la información del usuario logueado en el LocalStorage
function guardarUsuarioLogueado(usuario) {
  localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
}

// Función para obtener la información del usuario logueado desde el LocalStorage
function obtenerUsuarioLogueado() {
  const usuarioGuardado = localStorage.getItem('usuarioLogueado');
  return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
}

// Función para realizar el inicio de sesión
function iniciarSesion() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const usertype = document.getElementById("usertype").value;

  // Verificar si el usuario es cliente o veterinario
  if (usertype === "cliente") {
    // Buscar el cliente en la lista de clientes
    clienteEncontrado = listaClientes.find(
      (cliente) => cliente.nomUsu === username && cliente.contraUsu === password
    );

    if (clienteEncontrado) {
      clienteLogueado = clienteEncontrado;
      // Guardar la información del cliente logueado en el LocalStorage
      guardarUsuarioLogueado(clienteLogueado);
      // Mostrar el menú principal del cliente
      mostrarClienteMenu();
    } else {
      // Mostrar mensaje de error en caso de credenciales incorrectas
      document.getElementById("errorMessage").style.display = "block";
    }
  } else if (usertype === "veterinario") {
    // Resto del código para el inicio de sesión del veterinario
  }
}

