let listaClientes = []; // Arreglo para almacenar la lista de clientes
let listaVetes = []; // Arreglo para almacenar la lista de Veterinarios
let clienteLogueado = null;
let usuario;
let clienteEncontrado = null;
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
    localStorage.setItem('mascotasClienteLogueado', JSON.stringify(this.mascotas));

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

// Declaración de la clase UsuarioVetes (no se utiliza en el código actual del inicio de sesión)
class UsuarioVetes {
  constructor(nombreVete, apellidoVete, mailVete, contraseniaVete) {
    this.nomVet = nombreVete;
    this.apeVet = apellidoVete;
    this.mailVet = mailVete;
    this.contraVet = contraseniaVete;
  }
}

// Función para iniciar sesión
function login() {
  const tipoUsuarioElement = document.getElementById('tipo-usuario');
  const tipoUsuario = tipoUsuarioElement.value.toLowerCase();
  const nombreUsuarioElement = document.getElementById('nombre-usuario');
  const contraseniaElement = document.getElementById('contrasenia');

  const nombreUsuario = nombreUsuarioElement.value;
  const contrasenia = contraseniaElement.value;

  if (tipoUsuario === 'cliente') {
    clienteLogueado = loginCliente(nombreUsuario, contrasenia);
    if (clienteLogueado) {
      document.getElementById('bienvenidaCliente').innerText = `Te damos la bienvenida 🐾 ${clienteLogueado.nomUsu}`;
      document.getElementById('menuCliente').style.display = 'block';
      document.getElementById('login-form').style.display = 'none';
    } else {
      mostrarMensajeError('Credenciales incorrectas. Por favor, intente nuevamente 😢.');
    }
  } else if (tipoUsuario === 'veterinario') {
    clienteLogueado = loginVeterinario(nombreUsuario, contrasenia);
    if (clienteLogueado) {
      mostrarMenuVeterinario();
      document.getElementById('login-form').style.display = 'none';
    } else {
      mostrarMensajeError('Credenciales incorrectas. Por favor, intente nuevamente 😢');
    }
  } else {
    mostrarMensajeError('Tipo de usuario inválido. Por favor, ingrese "Cliente" o "Veterinario" 🤔');
  }
}

// Función para el login del cliente
function loginCliente(nombreUsuario, contrasenia) {
  console.log('Lista de clientes:', listaClientes);
  clienteEncontrado = listaClientes.find(cliente => cliente.nomUsu === nombreUsuario && cliente.contraUsu === contrasenia);
  console.log('Cliente encontrado:', clienteEncontrado);

  if (clienteEncontrado) {
    clienteLogueado = clienteEncontrado;
    console.log('Cliente logueado:', clienteLogueado);
    localStorage.setItem('clienteLogueado', JSON.stringify(clienteLogueado)); // Agregar esta línea
    localStorage.setItem('mascotasClienteLogueado', JSON.stringify(clienteLogueado.mascotas)); // Agregar esta línea
    return true;
  } else {
    console.log('Cliente no encontrado.');
    return false;
  }
}

function cargarDatosClienteLogueado() {
  const clienteLogueadoJSON = localStorage.getItem('clienteLogueado');
  if (clienteLogueadoJSON) {
    clienteLogueado = JSON.parse(clienteLogueadoJSON);
    mostrarMenuCliente();
  }
}
// Función para mostrar el menú del cliente una vez que haya iniciado sesión
function mostrarMenuCliente() {
  document.getElementById("bienvenidaCliente").innerText = `¡Bienvenido, ${clienteLogueado.nomUsu}!`; // Corregir el acceso al nombre de usuario
  document.getElementById("login-form").style.display = "none";
  document.getElementById("menuCliente").style.display = "block";
}

function mostrarFormularioAgregarTurno() {
  document.getElementById('menuCliente').style.display = 'none';
  document.getElementById('formAgregarTurno').style.display = 'block';
  document.getElementById('formularioCargarMascotas').style.display = 'none';
  document.getElementById('datosMascotaCargada').style.display = 'none';
  document.getElementById('datosTurno').style.display = 'none';
}

function cargarTurnoVeterinario(event) {
  event.preventDefault();

  const nombreMascotaElement = document.getElementById('nombre-mascota-turno');
  const nombreMascota = nombreMascotaElement.value.trim();

  if (!clienteLogueado) {
    console.log("Debes iniciar sesión como cliente para solicitar un turno.");
    return;
  }

  mascotasEncontradas = clienteLogueado.mascotas.filter(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

  if (mascotasEncontradas.length > 0) {
    // La mascota ya existe en la lista del cliente
    let horarioTurno;
    do {
      horarioTurno = prompt('Ingrese el horario para el turno entre las 10 y 18hs ⏰:');
    } while (!validarHorario(horarioTurno));

    // Obtener la fecha del próximo día hábil
    const fechaTurno = obtenerProximoDiaHabil();

    // Agregar el turno a la lista de turnos del cliente
    clienteLogueado.agregarTurno(mascotasEncontradas[0].nombre, fechaTurno, horarioTurno);

    console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
    // Mostrar los datos del turno
    mostrarDatosTurno(mascotasEncontradas[0].nombre, fechaTurno, horarioTurno);

    alert(`Turno solicitado para ${clienteLogueado.nomUsu}:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
    alert('Operación finalizada. Volviendo al menú principal...');
    mostrarMenuCliente(); // Volver al menú del cliente
  } else {
    // La mascota no existe en la lista del cliente
    const confirmacion = confirm('La mascota no se encuentra en la lista. ¿Desea agregarla?');

    if (confirmacion) {
      const tipoMascotaElement = document.getElementById('tipo-mascota');
      const sexoMascotaElement = document.getElementById('sexo-mascota');

      const tipoMascota = tipoMascotaElement.value;
      const sexoMascota = sexoMascotaElement.value;

      // Agregar la mascota a la lista de mascotas del cliente
      clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);

      let horarioTurno;
      do {
        horarioTurno = prompt('Ingrese el horario para el turno entre las 10 y 18hs ⏰:');
      } while (!validarHorario(horarioTurno));
      
      // Obtener la fecha del próximo día hábil
      const fechaTurno = obtenerProximoDiaHabil();

      // Agregar el turno a la lista de turnos del cliente
      clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);

      console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
      // Mostrar los datos del turno
      mostrarDatosTurno(nombreMascota, fechaTurno, horarioTurno);

      alert(`Turno solicitado para ${clienteLogueado.nomUsu}:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
      alert('Operación finalizada. Volviendo al menú principal...');
      mostrarMenuCliente(); // Volver al menú del cliente
    } else {
      alert('Operación cancelada. Volviendo al menú principal...');
      mostrarMenuCliente(); // Volver al menú del cliente
    }
  }
}

// Verificación de disponibilidad de horario
if (verificarDisponibilidadHorario(fechaTurno, horarioTurno)) {
  // Crear el objeto de turno
  Turno nuevoTurno = new Turno(nombreMascota, fechaTurno, horarioTurno);

  // Agregar el turno a la lista de turnos del cliente
  clienteLogueado.agregarTurno(nuevoTurno);

  // Mostrar un mensaje de éxito en la interfaz
  mostrarMensajeExito("Turno agregado correctamente para la mascota " + nombreMascota + 
                      " el día " + fechaTurno + " a las " + horarioTurno + ".");
} else {
  // Mostrar un mensaje de error en la interfaz
  mostrarMensajeError("Lo sentimos, el horario seleccionado no está disponible. Por favor, " + 
                      "intenta con otro horario.");
}

function mostrarFormularioAgregarTurno() {
  document.getElementById('menuCliente').style.display = 'none';
  document.getElementById('formAgregarTurno').style.display = 'block';
  document.getElementById('formularioCargarMascotas').style.display = 'none';
  document.getElementById('datosMascotaCargada').style.display = 'none';
  document.getElementById('datosTurno').style.display = 'none';
}

function cargarTurnoVeterinario(event) {
  event.preventDefault();

  const nombreMascotaElement = document.getElementById('nombre-mascota-turno');
  const nombreMascota = nombreMascotaElement.value.trim();

  // Asegúrate de que la variable clienteLogueado esté declarada y definida aquí
  // const clienteLogueado = ...

  if (!clienteLogueado) {
    console.log("Debes iniciar sesión como cliente para solicitar un turno.");
    return;
  }

  mascotasEncontradas = clienteLogueado.mascotas.filter(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

  if (mascotasEncontradas.length > 0) {
    // La mascota ya existe en la lista del cliente
    let horarioTurno;
    do {
      horarioTurno = prompt('Ingrese el horario para el turno entre las 10 y 18hs ⏰:');
    } while (!validarHorario(horarioTurno));

    // Obtener la fecha del próximo día hábil
    const fechaTurno = obtenerProximoDiaHabil();

    // Agregar el turno a la lista de turnos del cliente
    clienteLogueado.agregarTurno(mascotasEncontradas[0].nombre, fechaTurno, horarioTurno);

    console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
    // Mostrar los datos del turno
    mostrarDatosTurno(mascotasEncontradas[0].nombre, fechaTurno, horarioTurno);

    alert(`Turno solicitado para ${clienteLogueado.nomUsu}:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
    alert('Operación finalizada. Volviendo al menú principal...');
    mostrarMenuCliente(); // Volver al menú del cliente
  } else {
    // La mascota no existe en la lista del cliente
    const confirmacion = confirm('La mascota no se encuentra en la lista. ¿Desea agregarla?');

    if (confirmacion) {
      const tipoMascotaElement = document.getElementById('tipo-mascota');
      const sexoMascotaElement = document.getElementById('sexo-mascota');

      const tipoMascota = tipoMascotaElement.value;
      const sexoMascota = sexoMascotaElement.value;

      // Agregar la mascota a la lista de mascotas del cliente
      clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);

      let horarioTurno;
      do {
        horarioTurno = prompt('Ingrese el horario para el turno entre las 10 y 18hs ⏰:');
      } while (!validarHorario(horarioTurno));
      
      // Obtener la fecha del próximo día hábil
      const fechaTurno = obtenerProximoDiaHabil();

      // Agregar el turno a la lista de turnos del cliente
      clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);

      console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
      // Mostrar los datos del turno
      mostrarDatosTurno(nombreMascota, fechaTurno, horarioTurno);

      alert(`Turno solicitado para ${clienteLogueado.nomUsu}:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
      alert('Operación finalizada. Volviendo al menú principal...');
      mostrarMenuCliente(); // Volver al menú del cliente
    } else {
      alert('Operación cancelada. Volviendo al menú principal...');
      mostrarMenuCliente(); // Volver al menú del cliente
    }
  }

  // Verificación de disponibilidad de horario y agregado de turno
  if (verificarDisponibilidadHorario(fechaTurno, horarioTurno)) {
    // Crear el objeto de turno
    const nuevoTurno = new Turno(nombreMascota, fechaTurno, horarioTurno);

    // Agregar el turno a la lista de turnos del cliente
    clienteLogueado.agregarTurno(nuevoTurno);

    // Mostrar un mensaje de éxito en la interfaz
    mostrarMensajeExito(`Turno agregado correctamente para la mascota ${nombreMascota} el día ${fechaTurno} a las ${horarioTurno}.`);
  } else {
    // Mostrar un mensaje de error en la interfaz
    mostrarMensajeError(`Lo sentimos, el horario seleccionado no está disponible. Por favor, intenta con otro horario.`);
  }
}

// Función para agregar un turno veterinario
function validarHorario(horario) {
  let hora = parseInt(horario);
  return hora >= 10 && hora <= 18;
}

// Función para verificar si un horario está disponible
function verificarDisponibilidadHorario(fechaTurno, horarioTurno) {
  // Primero, verificamos si el horario es válido utilizando la función validarHorario
  if (!validarHorario(horarioTurno)) {
    console.log('Horario inválido.');
    return false;
  }

  // Obtenemos los turnos del localStorage
  const turnosExistente = JSON.parse(localStorage.getItem('turnos')) || [];

  // Verificamos si el horario está ocupado en los turnos existentes
  for (const turno of turnosExistente) {
    if (turno.fecha === fechaTurno && turno.horario === horarioTurno) {
      // El horario solicitado ya está ocupado
      return false;
    }
  }

  // Si el loop termina y no se encontró un horario ocupado, entonces el horario está disponible
  return true;
}

// Función para agregar un turno veterinario
function agregarTurnoVeterinario(event) {
  event.preventDefault();

  const nombreMascotaElement = document.getElementById('nombre-mascota-turno');
  const nombreMascota = nombreMascotaElement.value.trim();

  if (!clienteLogueado) {
    console.log("Debes iniciar sesión como cliente para solicitar un turno.");
    return;
  }

  let mascotasEncontradas = clienteLogueado.mascotas.filter(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

  if (mascotasEncontradas.length > 0) {
    // La mascota ya existe en la lista del cliente
    const horarioTurnoElement = document.getElementById('horario-turno');
    const horarioTurno = horarioTurnoElement.value;

    // Validar el horario del turno
    if (!validarHorario(horarioTurno)) {
      alert('El horario del turno debe estar entre las 10 y las 18 horas.');
      return;
    }

    // Obtener la fecha del próximo día hábil
    const fechaTurno = obtenerProximoDiaHabil();

    // Agregar el turno a la lista de turnos del cliente
    clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);

    // Mostrar los datos del turno solicitado
    mostrarDatosTurno(nombreMascota, fechaTurno, horarioTurno);

    alert(`Turno solicitado para ${clienteLogueado.nomUsu}:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
    alert('Operación finalizada. Volviendo al menú principal...');
    mostrarMenuCliente(); // Volver al menú del cliente
  } else {
    // La mascota no existe en la lista del cliente
    let confirmacion = confirm('La mascota no se encuentra en la lista. ¿Desea agregarla?');

    if (confirmacion) {
      const tipoMascotaElement = document.getElementById('tipo-mascota');
      const sexoMascotaElement = document.getElementById('sexo-mascota');

      const tipoMascota = tipoMascotaElement.value;
      const sexoMascota = sexoMascotaElement.value;

      // Agregar la mascota a la lista de mascotas del cliente
      clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);

      const horarioTurnoElement = document.getElementById('horario-turno');
      const horarioTurno = horarioTurnoElement.value;

      // Validar el horario del turno
      if (!validarHorario(horarioTurno)) {
        alert('El horario del turno debe estar entre las 10 y las 18 horas.');
        return;
      }

      // Obtener la fecha del próximo día hábil
      const fechaTurno = obtenerProximoDiaHabil();

      // Agregar el turno a la lista de turnos del cliente
      clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);

      // Mostrar los datos del turno solicitado
      mostrarDatosTurno(nombreMascota, fechaTurno, horarioTurno);

      alert(`Turno solicitado:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
      let agregarMasMascotas = confirm('¿Desea agregar otra mascota?');
      if (agregarMasMascotas) {
        cargarMascotas();
      } else {
        alert('Operación finalizada. Volviendo al menú principal...');
        mostrarMenuCliente();
      }
    } else {
      alert('Operación cancelada. Volviendo al menú principal...');
      mostrarMenuCliente();
    }
  }

  // Actualizar las mascotas del cliente en el LocalStorage
  localStorage.setItem('mascotasClienteLogueado', JSON.stringify(clienteLogueado.mascotas));
}


// Función para mostrar el formulario de carga de nueva mascota
function mostrarFormularioCargarMascota(nombreMascota, fechaTurno, horarioTurno) {
  document.getElementById("formAgregarTurno").style.display = "none";
  document.getElementById("formularioCargarMascotas").style.display = "block";
  document.getElementById("nombreNuevaMascota").innerText = `Nombre de la mascota: ${nombreMascota}`;
  document.getElementById("fechaTurnoNuevo").innerText = `Fecha del turno: ${fechaTurno}`;
  document.getElementById("horarioTurnoNuevo").innerText = `Horario del turno: ${horarioTurno}`;
}

// Función para cargar la nueva mascota
function cargarMascotaNueva(nombreMascota, tipoMascota, sexoMascota, fechaTurno, horarioTurno) {
  // Validar que se ingresen todos los campos para agregar la mascota
  if (nombreMascota === '' || tipoMascota === '' || sexoMascota === '') {
    console.log("Por favor, complete todos los campos para agregar la mascota.");
    return;
  }

  // Agregar la mascota a la lista de mascotas del cliente
  clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);

  // Agregar el turno a la lista de turnos del cliente
  clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);

  // Mostrar los datos del turno en la consola
  mostrarDatosTurno(nombreMascota, fechaTurno, horarioTurno);

  // Mostrar el formulario para agregar turno veterinario nuevamente
  document.getElementById("formAgregarTurno").style.display = "block";
  document.getElementById("formularioCargarMascotas").style.display = "none";
}


// Función para cargar la mascota
function cargarMascotas() {
  const nombreMascotaElement = document.getElementById('nombre-mascota');
  const tipoMascotaElement = document.getElementById('tipo-mascota');
  const sexoMascotaElement = document.getElementById('sexo-mascota');

  const nombreMascota = nombreMascotaElement.value;
  const tipoMascota = tipoMascotaElement.value;
  const sexoMascota = sexoMascotaElement.value;

  // Validar que se ingrese el nombre, tipo y sexo de la mascota
  if (nombreMascota.trim() === '' || tipoMascota.trim() === '' || sexoMascota.trim() === '') {
    alert('Por favor, complete todos los campos para agregar la mascota.');
    return;
  }

  // Verificar si la mascota ya existe en la lista de mascotas del cliente
  let mascotaExistente = clienteLogueado.mascotas.find(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

  if (mascotaExistente) {
    alert('La mascota ya existe en la lista.');
  } else {
    // Agregar la mascota a la lista de mascotas del cliente
    clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);
    console.log('Mascota agregada:', clienteLogueado.mascotas[clienteLogueado.mascotas.length - 1]); // Muestra la última mascota agregada

    // Mostrar los datos de la mascota cargada en el formulario
    document.getElementById('nombreMascotaCargada').innerText = `Nombre: ${nombreMascota}`;
    document.getElementById('tipoMascotaCargada').innerText = `Tipo: ${tipoMascota}`;
    document.getElementById('sexoMascotaCargada').innerText = `Sexo: ${sexoMascota}`;
    document.getElementById('formularioCargarMascotas').style.display = 'none';
    document.getElementById('datosMascotaCargada').style.display = 'block';
  }
}
function mostrarDatosTurno(turno) {
  console.log("=== Datos del turno ===");
  console.log("Fecha: ", turno.fecha);
  console.log("Hora: ", turno.hora);
  console.log("Nombre del cliente: ", turno.cliente.nombre);
  console.log("Nombre de la mascota: ", turno.mascota.nombre);
  console.log("========================");
}

function cargarTurnoVeterinario() {
  function obtenerProximoDiaHabil(fecha) {
    let proximoDia = new Date(fecha);
    proximoDia.setDate(proximoDia.getDate() + 1); // Incrementar un día
    const diaSemana = proximoDia.getDay();

    // Si es sábado (6), sumamos 2 días para que sea lunes
    if (diaSemana === 6) {
      proximoDia.setDate(proximoDia.getDate() + 2);
    }
    // Si es domingo (0), sumamos 1 día para que sea lunes
    else if (diaSemana === 0) {
      proximoDia.setDate(proximoDia.getDate() + 1);
    }

    return proximoDia;
  }
  const nombreMascotaElement = document.getElementById('nombre-mascota');
  const nombreMascota = nombreMascotaElement.value.trim();

  // Buscar la mascota en la lista de mascotas del cliente logueado
  if (clienteLogueado.mascotas && Array.isArray(clienteLogueado.mascotas)) {
    let mascotasEncontradas = clienteLogueado.mascotas.filter(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());
  } 
  if (mascotasEncontradas.length > 0) {
    // La mascota ya existe en la lista del cliente
    let horarioTurno;
    do {
      horarioTurno = prompt('Ingrese el horario para el turno entre las 10 y 18hs ⏰ :');
    } while (!validarHorario(horarioTurno));

    let fechaTurno = obtenerProximoDiaHabil();

    // Agregar el turno a la lista de turnos del cliente
    clienteLogueado.agregarTurno(mascotasEncontradas[0].nombre, fechaTurno, horarioTurno);

    console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
    datosDeLasMascotas();
    alert(`Turno solicitado para ${clienteLogueado.nomUsu}:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}\n\n Por consola veremos también las mascotas del cliente 🐶🐱`);
    alert('Operación finalizada. Volviendo al menú principal...');
    mostrarMenuCliente(); // Volver al menú del cliente
  } else {
    // La mascota no existe en la lista del cliente
    let confirmacion = prompt('La mascota no se encuentra en la lista. ¿Desea agregarla? (S/N)');

    if (confirmacion.toLowerCase() === 's') {
      let tipoMascota = prompt('Ingrese el tipo de mascota (ejemplo Perro, Gato 🐶🐱):');
      let sexoMascota = prompt('Ingrese el sexo de la mascota (Macho, Hembra, No lo sé):');

      // Agregar la mascota a la lista de mascotas del cliente
      clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);

      let horarioTurno;
      do {
        horarioTurno = prompt('Ingrese el horario para el turno entre las 10 y 18hs ⏰:');
      } while (!validarHorario(horarioTurno));
      let fechaTurno = obtenerProximoDiaHabil();

      // Agregar el turno a la lista de turnos del cliente
      clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);

      console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
      datosDeLasMascotas();

      alert(`Turno solicitado:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}\n\n Por consola veremos también las mascotas del cliente 🐶🐱`);
      let agregarMasMascotas = prompt('¿Desea agregar otra mascota? (S/N)');
      if (agregarMasMascotas.toLowerCase() === 's') {
        cargarMascotas();
      } else {
        alert('Operación finalizada. Volviendo al menú principal...');
        mostrarMenuCliente();
      }
    } else {
      alert('No se agregó la mascota. Operación cancelada.');
      mostrarMenuCliente();
    }
  }
}
// Objeto turno
const turno = {
  fecha: "2023-07-20",
  hora: "15:00",
  cliente: cliente,
  mascota: mascota,
};

function mostrarDatosTurno(turno) {
  console.log("=== Datos del turno ===");
  console.log("Fecha: ", turno.fecha);
  console.log("Hora: ", turno.hora);
  console.log("Cliente: ", turno.cliente); // Solo se muestra el objeto cliente completo
  console.log("Mascota: ", turno.mascota); // Solo se muestra el objeto mascota completo
  console.log("========================");
}

// Función para mostrar el menú del cliente una vez que haya iniciado sesión
function mostrarMenuCliente() {
  document.getElementById("bienvenidaCliente").innerText = `¡Bienvenido, ${clienteLogueado.nombre}!`;
  document.getElementById("login-form").style.display = "none";
  document.getElementById("menuCliente").style.display = "block";
}

// Función para mostrar los datos del turno solicitado
function mostrarDatosTurno(nombreMascota, fechaTurno, horarioTurno) {
  document.getElementById("datosTurno").style.display = "block";
  document.getElementById("nombreMascotaTurno").innerText = `Nombre de la mascota: ${nombreMascota}`;
  document.getElementById("fechaTurno").innerText = `Fecha del turno: ${fechaTurno}`;
  document.getElementById("horarioTurno").innerText = `Horario del turno: ${horarioTurno}`;
}

// Función para mostrar el formulario para agregar un turno veterinario
// Función para mostrar el formulario para agregar un turno veterinario
function mostrarFormularioAgregarTurno() {
  document.getElementById('menuCliente').style.display = 'none';
  document.getElementById('formAgregarTurno').style.display = 'block';
  document.getElementById('datosTurno').style.display = 'none';
}

// Funcion para el login del veterinario
function loginVeterinario(nombreUsuario, contrasenia) {
  // En caso de que decidas implementar el inicio de sesión para veterinarios
  return listaVetes.find(veterinario => veterinario.nomVet === nombreUsuario && veterinario.contraVet === contrasenia);
}

function logout() {
  clienteLogueado = null;
  // Eliminar los datos del cliente logueado del localStorage
  localStorage.removeItem('clienteLogueado');

  document.getElementById('menuCliente').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
  alert('Sesión cerrada. ¡Hasta pronto! 👋');
}
