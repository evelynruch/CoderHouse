const listaClientes = [];
const listaVetes = [];
let clienteLogueado = null;
let veterinarioLogueado = null;
let formCargarTurno = null; 
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

//Creación de instancias de UsuarioClientes
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


// Agregar el evento 'DOMContentLoaded' para ejecutar el código después de cargar el DOM
document.addEventListener('DOMContentLoaded', function () {
  // Agregar el evento de escucha al formulario de inicio de sesión
  document.getElementById('formularioInicioSesion').addEventListener('submit', iniciarSesion);
});

function validarUsuario(usuario, contrasenia) {
  // Verificar si el usuario es un cliente
  const clienteEncontrado = listaClientes.find(cliente => cliente.nomUsu === usuario && cliente.contraUsu === contrasenia);
  if (clienteEncontrado) {
    return { tipo: 'cliente', usuario: clienteEncontrado };
  }

  // Verificar si el usuario es un veterinario
  const veterinarioEncontrado = listaVetes.find(veterinario => veterinario.nomVet === usuario && veterinario.contraVet === contrasenia);
  if (veterinarioEncontrado) {
    return { tipo: 'veterinario', usuario: veterinarioEncontrado };
  }

  // Si no se encontró el usuario en ninguna lista, retornar null
  return null;
}


function mostrarMenuCliente() {
  document.getElementById('menuCliente').style.display = 'block';
  if (formCargarTurno) {
  formCargarTurno.remove();
  }
  }

function mostrarMenuVeterinario() {
  document.getElementById('inicioSesion').style.display = 'none';
  document.getElementById('menuVeterinario').style.display = 'block';
  // Agrega aquí el contenido del menú para veterinarios
}
// Resto del código...

  document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('formularioInicioSesion').addEventListener('submit', iniciarSesion);
});

// Función para guardar el usuario logueado en el LocalStorage
function guardarUsuarioLogueado(usuario) {
  localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
}

// Función para obtener el usuario logueado desde el LocalStorage
function obtenerUsuarioLogueado() {
  const usuarioGuardado = localStorage.getItem('usuarioLogueado');
  return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
}

// Agregar el evento 'DOMContentLoaded' para ejecutar el código después de cargar el DOM
document.addEventListener('DOMContentLoaded', function () {
  // Agregar el evento de escucha al formulario de inicio de sesión
  document.getElementById('formularioInicioSesion').addEventListener('submit', iniciarSesion);

  // Verificar si hay un usuario logueado en el LocalStorage
  const usuarioLogueado = obtenerUsuarioLogueado();
  if (usuarioLogueado) {
    if (usuarioLogueado.tipo === 'cliente') {
      clienteLogueado = usuarioLogueado.usuario;
      mostrarMenuCliente();
    } else if (usuarioLogueado.tipo === 'veterinario') {
      veterinarioLogueado = usuarioLogueado.usuario;
      mostrarMenuVeterinario();
    }
  }
});

function iniciarSesion(event) {
  event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue
  const usuario = document.getElementById('usuario').value;
  const contrasenia = document.getElementById('contrasenia').value;
  const resultadoValidacionCliente = validarUsuarioCliente(usuario, contrasenia);
  const resultadoValidacionVeterinario = validarUsuarioVeterinario(usuario, contrasenia);

  if (resultadoValidacionCliente) {
    document.getElementById('mensajeError').style.display = 'none'; // Ocultar el mensaje de error si estaba visible
    clienteLogueado = resultadoValidacionCliente.usuario;
    guardarUsuarioLogueado({ tipo: 'cliente', usuario: clienteLogueado });
    mostrarMenuCliente();
  } else if (resultadoValidacionVeterinario) {
    document.getElementById('mensajeError').style.display = 'none'; // Ocultar el mensaje de error si estaba visible
    veterinarioLogueado = resultadoValidacionVeterinario.usuario;
    guardarUsuarioLogueado({ tipo: 'veterinario', usuario: veterinarioLogueado });
    mostrarMenuVeterinario();
  } else {
    document.getElementById('mensajeError').style.display = 'block'; // Mostrar el mensaje de error si las credenciales son incorrectas
  }
}



function iniciarSesionVeterinario() {
  document.getElementById('formularioInicioSesion').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue
    const usuario = document.getElementById('usuario').value;
    const contrasenia = document.getElementById('contrasenia').value;
    const resultadoValidacionVeterinario = validarUsuarioVeterinario(usuario, contrasenia);

    if (resultadoValidacionVeterinario) {
      document.getElementById('mensajeError').style.display = 'none'; // Ocultar el mensaje de error si estaba visible
      veterinarioLogueado = resultadoValidacionVeterinario.usuario;
      mostrarMenuVeterinario();
    } else {
      document.getElementById('mensajeError').style.display = 'block'; // Mostrar el mensaje de error si las credenciales son incorrectas
    }
  });
}

// Función para validar usuario cliente
function validarUsuarioCliente(usuario, contrasenia) {
  return listaClientes.find(cliente => cliente.nomUsu === usuario && cliente.contraUsu === contrasenia);
}

// Función para validar usuario veterinario
function validarUsuarioVeterinario(usuario, contrasenia) {
  return listaVetes.find(veterinario => veterinario.nomVet === usuario && veterinario.contraVet === contrasenia);
}


function cargarTurnoVeterinarioForm() {
  document.getElementById('formularioMenuCliente').style.display = 'none';
  // Lógica para solicitar turno veterinario
  // Mostrar los campos del formulario para cargar turno
  const formCargarTurno = document.createElement('form');
  formCargarTurno.innerHTML = `
    <label for="nombreMascota">Nombre de la mascota:</label>
    <input type="text" id="nombreMascota" required><br>
    <label for="horarioTurno">Horario para el turno entre las 10 y 18hs⏰:</label>
    <input type="text" id="horarioTurno" required><br>
    <input type="submit" value="Solicitar Turno">
    <input type="button" value="Cancelar" onclick="mostrarMenuCliente()">
  `;
  formCargarTurno.onsubmit = function (event) {
    event.preventDefault();
    const nombreMascota = document.getElementById('nombreMascota').value;
    const horarioTurno = document.getElementById('horarioTurno').value;

    if (validarHorario(horarioTurno)) {
      const fechaTurno = obtenerProximoDiaHabil();
      clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);
      console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
      datosDeLasMascotas();
      alert(`Turno solicitado para ${clienteLogueado.nomUsu}:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}\n\n Por consola veremos también las mascotas del cliente 🐶🐱`);
      alert('Operación finalizada. Volviendo al menú principal...');
      mostrarMenuCliente();
    } else {
      alert('Horario inválido. Debe estar entre las 10 y las 18hs.');
    }
  };

  document.getElementById('menuCliente').appendChild(formCargarTurno);

  // Llamamos a mostrarMenuCliente() aquí, después de agregar el formulario al documento
  mostrarMenuCliente();
}

function iniciarSesion(event) {
  event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue
  const usuario = document.getElementById('usuario').value;
  const contrasenia = document.getElementById('contrasenia').value;
  const resultadoValidacion = validarUsuario(usuario, contrasenia);

  if (resultadoValidacion) {
    document.getElementById('mensajeError').style.display = 'none'; // Ocultar el mensaje de error si estaba visible
    if (resultadoValidacion.tipo === 'cliente') {
      clienteLogueado = resultadoValidacion.usuario;
      guardarUsuarioLogueado({ tipo: 'cliente', usuario: clienteLogueado });
      mostrarMenuCliente();
    } else if (resultadoValidacion.tipo === 'veterinario') {
      veterinarioLogueado = resultadoValidacion.usuario;
      guardarUsuarioLogueado({ tipo: 'veterinario', usuario: veterinarioLogueado });
      mostrarMenuVeterinario();
    }
  } else {
    document.getElementById('mensajeError').style.display = 'block'; // Mostrar el mensaje de error si las credenciales son incorrectas
  }
}

function mostrarMenuCliente() {
  document.getElementById('formularioMenuCliente').style.display = 'block';
  if (formCargarTurno) {
    formCargarTurno.remove();
  }
}

// Función para cargar mascotas usando un formulario en HTML
function cargarMascotasForm() {
  let form = document.createElement('form');
  form.innerHTML = `
    <label for="nombreMascota">Nombre de la mascota:</label>
    <input type="text" id="nombreMascota" required><br>
    <label for="tipoMascota">Tipo de mascota:</label>
    <input type="text" id="tipoMascota" required><br>
    <label for="sexoMascota">Sexo de la mascota:</label>
    <input type="text" id="sexoMascota" required><br>
    <button type="submit">Agregar Mascota</button>
  `;

  form.onsubmit = (event) => {
    event.preventDefault();
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipoMascota = document.getElementById('tipoMascota').value;
    let sexoMascota = document.getElementById('sexoMascota').value;

    clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);
    nuevaMascota();

    // Reiniciar el formulario
    form.reset();
  };

  document.body.appendChild(form);
}

// Función para comprar productos usando un formulario en HTML
function comprarProductosForm() {
  // Lógica para comprar productos...
  alert('Funcionalidad en desarrollo...');
}

// Función para mostrar los turnos del cliente usando una tabla en HTML
function mostrarTurnosCliente() {
  let table = document.createElement('table');
  table.innerHTML = `
    <tr>
      <th>Fecha</th>
      <th>Hora</th>
      <th>Mascota</th>
      <th>Acción</th>
    </tr>
  `;

  for (let turno of clienteLogueado.turnos) {
    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${turno.fechaTurno}</td>
      <td>${turno.horaTurno}</td>
      <td>${turno.nombreMascota}</td>
      <td><button onclick="cancelarTurno('${turno.fechaTurno}', '${turno.horaTurno}', '${turno.nombreMascota}')">Cancelar</button></td>
    `;

    table.appendChild(row);
  }

  document.body.appendChild(table);
}

// Función para cancelar un turno
function cancelarTurno(fechaTurno, horaTurno, nombreMascota) {
  // Aquí iría la lógica para cancelar el turno...
  alert(`El turno para la mascota ${nombreMascota} el día ${fechaTurno} a las ${horaTurno} ha sido cancelado.`);
  // Actualizar la tabla de turnos
  mostrarTurnosCliente();
}

function cerrarSesion() {
  clienteLogueado = null;
  veterinarioLogueado = null;
  document.getElementById('inicioSesion').style.display = 'block';
  document.getElementById('menuCliente').style.display = 'none';
  document.getElementById('menuVeterinario').style.display = 'none';
}
