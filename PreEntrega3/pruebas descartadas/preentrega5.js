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

function agregarClientesYMascotas (){
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

function agregarVeterinarios(){
  let vete = new UsuarioVetes('daniel', 'gallegos', 'daniel@mail.com', 'daniel123');
  let vete2 = new UsuarioVetes('roman', 'maluma', 'roman@mail.com', 'roman123');
  let vete3 = new UsuarioVetes('silvina', 'rodriguez', 'silvina@mail.com', 'silvina123');
  let vete4 = new UsuarioVetes('magdalena', 'avellaneda', 'magdalena@mail.com', 'magda123');
  let vete5 = new UsuarioVetes('ruben', 'rivera', 'ruben@mail.com', 'ruben123');
  // Agregar clientes a la lista de clientes
  listaVetes.push(vete, vete2, vete3, vete4, vete5);

}

  document.addEventListener("DOMContentLoaded", function () {
  // Obtenemos una referencia al formulario y al contenedor del menú de cliente
  const loginForm = document.getElementById("loginForm");
  const clientMenu = document.getElementById("clientMenu");
  const errorMessage = document.getElementById("errorMessage");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitamos que el formulario se envíe (para este ejemplo)
  
    // Obtenemos los valores ingresados en el formulario
    const username = document.getElementById("username").value;
    usuario = username; // Agregar esta línea para asignar el valor del usuario
    const password = document.getElementById("password").value;
    const usertype = document.getElementById("usertype").value;
  
    // Verificamos si las credenciales son correctas para un usuario cliente o veterinario
    if (checkCredentials(username, password, usertype)) {
      // Guardar las credenciales en el localStorage
      localStorage.setItem("storedUsername", username);
      localStorage.setItem("storedUsertype", usertype);
  
      // Mostramos el menú correspondiente (cliente o veterinario) y ocultamos el formulario de inicio de sesión
      if (usertype === "cliente") {
        mostrarClienteMenu();
      } else if (usertype === "veterinario") {
        mostrarVeterinarioMenu();
      }
  
      errorMessage.style.display = "none"; // Ocultamos el mensaje de error
    } else {
      // Mostramos el mensaje de error y ocultamos los menús
      errorMessage.style.display = "block";
      document.getElementById("clientMenu").style.display = "none";
      document.getElementById("vetMenu").style.display = "none";
    }
  });

  function guardarCredenciales() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    localStorage.setItem("storedUsername", username);
    localStorage.setItem("storedPassword", password);

    alert("Credenciales guardadas correctamente.");
}


  // Comprobar si hay credenciales almacenadas en el localStorage y mostrar el menú del cliente o veterinario si es así
  const storedUsername = localStorage.getItem("storedUsername");
  const storedUsertype = localStorage.getItem("storedUsertype");
  if (storedUsername && (storedUsertype === "cliente" || storedUsertype === "veterinario")) {
    const validCredentials = checkCredentials(
      storedUsername,
      storedUsertype === "cliente" ? "contrasenia" : "contraseniaVete",
      storedUsertype
    );

    if (validCredentials) {
      if (storedUsertype === "cliente") {
        // Mostrar el menú del cliente
        loginForm.style.display = "none";
        clientMenu.style.display = "block";
        errorMessage.style.display = "none"; // Ocultamos el mensaje de error
      } else {
        // Mostrar el menú del veterinario
        loginForm.style.display = "none";
        vetMenu.style.display = "block";
        errorMessage.style.display = "none"; // Ocultamos el mensaje de error
      }
    }
  }
  // Agregar clientes y mascotas
  agregarClientesYMascotas();

  // Agregar veterinarios
  agregarVeterinarios();
});
function checkCredentials(username, password, usertype) {
  if (usertype === "cliente") {
    const clienteEncontrado = listaClientes.find(
      (cliente) => cliente.nomUsu === username && cliente.contraUsu === password
    );
    return clienteEncontrado !== undefined;
  } else if (usertype === "veterinario") {
    const veterinarioEncontrado = listaVetes.find(
      (veterinario) => veterinario.nomVet === username && veterinario.contraVet === password
    );
    return veterinarioEncontrado !== undefined;
  }

  return false;
}

function mostrarSubMenu() {
  // Ocultar el menú principal del cliente
  document.getElementById("clientMenu").style.display = "none";

  // Obtener el valor seleccionado en la lista desplegable
  const selectedOption = document.getElementById("menuOptions").value;

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
      // En caso de que no se seleccione ninguna opción válida, mostramos un mensaje de error
      alert("Opción no válida");
      // Mostramos nuevamente el menú principal del cliente
      document.getElementById("clientMenu").style.display = "block";
      break;
  }
}


// Función para mostrar el menú principal del cliente
// Función para mostrar el menú principal del cliente
function mostrarClienteMenu() {
  // Ocultar todos los submenús
  document.getElementById("menuCargarTurno").style.display = "none";
  document.getElementById("menuCargarMascota").style.display = "none";
  document.getElementById("menuComprarProductos").style.display = "none";
  document.getElementById("menuMisTurnos").style.display = "none";

  // Mostrar el menú principal del cliente
  document.getElementById("clientMenu").style.display = "block";
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


function datosDeLasMascotas() {
  console.log(`Datos de las mascotas del cliente ${clienteLogueado.nomUsu} ordenados Alfabéticamente :`);
  clienteLogueado.mascotas.sort((a, b) => a.nombre.localeCompare(b.nombre));
  for (let mascota of clienteLogueado.mascotas) {
    const nombreCapitalizado = mascota.nombre.charAt(0).toUpperCase() + mascota.nombre.slice(1).toLowerCase();
    const tipoCapitalizado = mascota.tipo.charAt(0).toUpperCase() + mascota.tipo.slice(1).toLowerCase();
    const sexoCapitalizado = mascota.sexo.charAt(0).toUpperCase() + mascota.sexo.slice(1).toLowerCase();
    console.log(`Nombre: ${nombreCapitalizado}, Tipo: ${tipoCapitalizado}, Sexo: ${sexoCapitalizado}`);
  }
}

function cargarMascotas() {
  let agregarMasMascotas = true;

  while (agregarMasMascotas) {
    let nombreMascota = prompt('Ingrese el nombre de la mascota 🐶🐱:');

    // Verificar si la mascota ya existe en la lista de mascotas del cliente
    let mascotaExistente = clienteLogueado.mascotas.find(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

    if (mascotaExistente) {
      alert('La mascota ya existe en la lista.');
    } else {
      let tipoMascota = prompt('Ingrese el tipo de mascota (ejemplo: Perro, Gato🐶🐱):');
      let sexoMascota = prompt('Ingrese el sexo de la mascota (Macho, Hembra, No lo sé):');

      // Agregar la mascota a la lista de mascotas del cliente
      clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);
      console.log('Mascota agregada:', clienteLogueado.mascotas[clienteLogueado.mascotas.length - 1]); // Muestra la última mascota agregada
      nuevaMascota();
      let continuar = prompt('¿Desea agregar otra mascota? (S/N) 🐾');
      if (continuar.toLowerCase() === 's') {
        agregarMasMascotas = true;
      } else {
        agregarMasMascotas = false;
        alert('Operación finalizada. Volviendo al menú principal...');

        // Mostrar mensaje por consola con los datos de las mascotas del cliente
        datosDeLasMascotas();
        mostrarClienteMenu(); // Volver al menú del cliente
      }
    }
  }
}

function mostrarTurnosVeterinarios(tipoUsuario) {
  let turnosVeterinarios = [];

  if (tipoUsuario === 'cliente') {
    turnosVeterinarios = clienteLogueado.turnos; // Obtener los turnos del cliente logueado
  } else {
    for (let cliente of listaClientes) {
      turnosVeterinarios = turnosVeterinarios.concat(cliente.turnos);
    }
  }
  // Ordenar los turnos por hora (ascendente)
  turnosVeterinarios.sort((a, b) => a.horaTurno.localeCompare(b.horaTurno));

  if (turnosVeterinarios.length > 0) {
    console.log('Lista de turnos veterinarios:');
    let alertMessage = 'Lista de turnos veterinarios:\n\nPor consola puedes ver mas detalles\n\n';

    for (let turno of turnosVeterinarios) {
      let cliente = buscarClientePorApellido(listaClientes, turno.apellidoCliente);
      if (cliente) {
        alertMessage += `Cliente: ${cliente.apeUsu}, ${cliente.nomUsu}\nMascota: ${turno.nombreMascota}\nFecha: ${turno.fechaTurno}\nHora: ${turno.horaTurno}\n\n`;
        console.log(`Cliente: ${cliente.apeUsu}, ${cliente.nomUsu}\nMascota: ${turno.nombreMascota}\nFecha: ${turno.fechaTurno}\nHora: ${turno.horaTurno}`);
      }
    }
    alert(alertMessage);
    console.log(alertMessage);
  } else {
    alert('No hay turnos veterinarios registrados.😢');
    console.log('No hay turnos veterinarios registrados.');
  }

  // Volver al menú anterior
  if (tipoUsuario === 'cliente') {
    mostrarClienteMenu();
  } else if (tipoUsuario === 'veterinario') {
    mostrarMenuVeterinario();
  }
}

function validarHorario(horario) {
  let hora = parseInt(horario);
  return hora >= 10 && hora <= 18;
}

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
function cargarTurnoVeterinario() {
  // Lógica para solicitar turno veterinario
  const nombreMascota = document.getElementById("nombreMascota").value;
  const horarioTurno = document.getElementById("horarioTurno").value;
  clienteLogueado = listaClientes.find(cliente => cliente.nomUsu === storedUsername);

  // Buscar la mascota en la lista de mascotas del cliente
  let mascotasEncontradas = clienteLogueado.mascotas.filter(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

  if (mascotasEncontradas.length > 0) {
    // La mascota ya existe en la lista del cliente
    let fechaTurno = obtenerProximoDiaHabil();

    // Agregar el turno a la lista de turnos del cliente
    clienteLogueado.agregarTurno(mascotasEncontradas[0].nombre, fechaTurno, horarioTurno);

    console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
    datosDeLasMascotas();
    alert(`Turno solicitado para ${clienteLogueado.nomUsu}:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}\n\n Por consola veremos también las mascotas del cliente 🐶🐱`);
    alert('Operación finalizada. Volviendo al menú principal...');
    mostrarClienteMenu(); // Volver al menú del cliente
  } else {
    // La mascota no existe en la lista del cliente
    let confirmacion = confirm('La mascota no se encuentra en la lista. ¿Desea agregarla?');

    if (confirmacion) {
      let tipoMascota = prompt('Ingrese el tipo de mascota (ejemplo Perro, Gato 🐶🐱):');
      let sexoMascota = prompt('Ingrese el sexo de la mascota (Macho, Hembra, No lo sé):');

      // Agregar la mascota a la lista de mascotas del cliente
      clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);

      let fechaTurno = obtenerProximoDiaHabil();

      // Agregar el turno a la lista de turnos del cliente
      clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);

      console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
      datosDeLasMascotas();

      alert(`Turno solicitado:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}\n\n Por consola veremos también las mascotas del cliente 🐶🐱`);
      let agregarMasMascotas = confirm('¿Desea agregar otra mascota?');
      if (agregarMasMascotas) {
        cargarMascotas();
      } else {
        alert('Operación finalizada. Volviendo al menú principal...');
        mostrarClienteMenu();
      }
    } else {
      alert('No se agregó la mascota. Operación cancelada.');
      mostrarClienteMenu();
    }
  }
}
// Event listener para el formulario de solicitar turno
const solicitarTurnoForm = document.getElementById("solicitarTurnoForm");
solicitarTurnoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe
});

function mostrarClienteMenu() {
  document.getElementById("vetMenu").style.display = "none";
    document.getElementById("clientMenu").style.display = "block";

  clienteLogueado = clienteEncontrado;
  let opcion = prompt(`-- Menú Cliente --\n Te damos la bienvenida 🐾 ${clienteLogueado.nomUsu}\n\n Seleccione una opción:\n1. Solicitar turno Veterinario\n2. Agregar mascota\n3. Comprar Productos\n4.Mis Turnos\n5. Log Out`);
  opcion = parseInt(opcion);

  switch (opcion) {
    case 1:
      cargarTurnoVeterinario();
      break;
    case 2:
      // Lógica para agregar mascota
      cargarMascotas();
      break;
    case 3:
      // Lógica para comprar productos
      alert('Comprando productos...');
      // En Desarrollo
      break;
    case 4:
      // Lógica para Mis Turnos
      alert('Accediendo a Mis Turnos...📅');
      mostrarTurnosVeterinarios('cliente'); // Llamar a mostrarTurnosVeterinarios con el argumento 'cliente'
      break;
    case 5:
      // LogOut
      alert('Hasta Pronto...👋');
      login(); // Volver al menú inicial de inicio de sesión
    default:
      alert('Opción inválida.');
      mostrarClienteMenu(); // Volver al menú del cliente
      break;
  }
}

function enviarPedidoProveedor() {
  let arrayProductos = [];
  let sumaTotal = 0;
  let continuarAgregandoProductos = true;

  do {
    let articulo = prompt('Ingrese el artículo, por ejemplo "Pipeta", "Correa", "Antiparasitario": ');
    let cantidad = parseInt(prompt('Ingrese la cantidad: '));
    let precio = parseFloat(prompt('Ingrese el precio'));

    let producto = {
      articulo: articulo,
      cantidad: cantidad,
      precio: precio
    };
    arrayProductos.push(producto);

    let sumaParcial = cantidad * precio;
    sumaTotal += sumaParcial;

    let respuesta = prompt('¿Desea agregar más productos? (S/N)').toLowerCase();
    if (respuesta === 'n') {
      continuarAgregandoProductos = false;
    } else if (respuesta !== 's') {
      alert('Respuesta errónea. Por favor, recuerde ingresar "S" o "N".');
    }
  } while (continuarAgregandoProductos);

  // Mostrar los detalles de la compra
  console.log('Detalles de la compra:');
  for (let producto of arrayProductos) {
    const articuloCapitalizado = producto.articulo.charAt(0).toUpperCase() + producto.articulo.slice(1).toLowerCase();
    const precioUnitario = producto.precio.toFixed(2);
    const valorTotal = (producto.cantidad * producto.precio).toFixed(2);
    const valorUnitarioConIva = (producto.precio * 1.21).toFixed(2);
    const valorTotalConIva = (producto.cantidad * producto.precio * 1.21).toFixed(2);
    console.log(`Artículo: ${articuloCapitalizado}`);
    console.log(`Precio Unitario: $${precioUnitario} - Valor Unitario con IVA: $${valorUnitarioConIva}`);
    console.log(`Valor Total: $${valorTotal} - Valor Total con IVA: $${valorTotalConIva}`);
    console.log('------------------');
  }

  let totalSinIva = sumaTotal; // El total sin IVA es la suma total
  let totalConIva = sumaTotal * 1.21; // El total con IVA es la suma total multiplicada por 1.21
  let totalFinanciado = sumaTotal * 1.09; // El total financiado es la suma total multiplicada por 1.09

  let totalMensaje = `Total a pagar:\nSin IVA: $${totalSinIva.toFixed(2)}\nCon IVA: $${totalConIva.toFixed(2)}\nFinanciado a 30 días con una tasa del 9%: $${totalFinanciado.toFixed(2)}`;

  let opcionElegida;
  do {
    opcionElegida = prompt('Ingrese el número deseado:\n1. Ver Total a Pagar (Sin IVA)\n2. Ver Total a Pagar (Con IVA)\n3. Ver Total Financiado a 30 días con una tasa del 9%\n\n\n Por Consola podrá ver el detalle\n4. Volver al Menú Anterior');

    switch (opcionElegida) {
      case '1':
        alert(`Total a pagar (Sin IVA): $${totalSinIva.toFixed(2)}`);
        break;
      case '2':
        alert(`Total a pagar (Con IVA): $${totalConIva.toFixed(2)}`);
        break;
      case '3':
      case '3':
        let valorFinanciadoSinIva = totalSinIva * 1.09; // Valor financiado a 30 días sin IVA
        let valorFinanciadoConIva = valorFinanciadoSinIva * 1.21; // Valor financiado a 30 días con IVA
        alert(`Total Financiado a 30 días con una tasa del 9% (sin IVA): $${valorFinanciadoSinIva.toFixed(2)}\n Total Financiado con IVA: $${(valorFinanciadoSinIva * 1.21).toFixed(2)}`);
        break;
      case '4':
        alert('Volviendo al menú anterior...');
        mostrarMenuVeterinario();
        return; // Salir de la función para evitar ejecutar el código después del switch
      default:
        alert('Opción inválida. Por favor, ingrese un número válido 😢');
        break;
    }
  } while (opcionElegida !== '4');

  mostrarMenuVeterinario();
}

function mostrarMenuVeterinario() {
  let opcion = prompt('-- Menú Veterinario --\n\n Seleccione una opción:\n1. Asignar turno veterinario\n2. Agregar Usuario Veterinario\n3. Enviar Pedido a Proveedor\n4. Ver agenda de Turnos\n5. LogOut');
  opcion = parseInt(opcion);

  switch (opcion) {
    case 1:
      // Lógica para asignar turno veterinario
      cargarTurnosVeterinarios(listaClientes);
      break;
    case 2:
      // Lógica para agregar usuario veterinario
      alert('Agregando usuario veterinario...');
      agregarUsuarioVeterinario();
      mostrarMenuVeterinario();
      break;
    case 3:
      // Hacer pedido al Mayorista
      alert('Pedidos al mayorista:');
      enviarPedidoProveedor();
      break;
    case 4:
      // Lógica para ver turnos Veterinarios
      alert('Ingresando a la agenda de turnos...📅');
      mostrarTurnosVeterinarios('veterinario'); // Llamar a mostrarTurnosVeterinarios con el argumento 'veterinario'
      break;
    case 5:
      // LogOut
      alert('Hasta Pronto...👋');
      login(); // Volver al menú inicial de inicio de sesión
      break;
    default:
      alert('Opción inválida 😢');
      mostrarMenuVeterinario();
      break;
  }
}


function agregarUsuarioVeterinario() {
  let nombreVeterinario = prompt('Ingrese el nombre del nuevo veterinario:');
  let apellidoVeterinario = prompt('Ingrese el apellido del nuevo veterinario:');
  let mailVeterinario = prompt('Ingrese el correo electrónico del nuevo veterinario:');
  let contraseniaVeterinario = prompt('Ingrese la contraseña del nuevo veterinario:');

  let nuevoVeterinario = new UsuarioVetes(nombreVeterinario, apellidoVeterinario, mailVeterinario, contraseniaVeterinario);

  // Agregar el nuevo veterinario a la lista de veterinarios
  listaVetes.push(nuevoVeterinario);

  alert('Usuario veterinario agregado correctamente 🐾\n\nPor consola podrá ver más datos de Usuarios Veterinarios.');
  // Ordenar la lista de veterinarios por apellido
  listaVetes.sort((a, b) => a.apeVet.localeCompare(b.apeVet));

  // Mostrar los nombres, apellidos y correos electrónicos de los veterinarios por consola
  console.log('Veterinarios ordenados por apellido:');
  for (let veterinario of listaVetes) {
    const nombreCapitalizado = veterinario.nomVet.charAt(0).toUpperCase() + veterinario.nomVet.slice(1).toLowerCase();
    const apellidoCapitalizado = veterinario.apeVet.charAt(0).toUpperCase() + veterinario.apeVet.slice(1).toLowerCase();
    console.log(`${nombreCapitalizado} ${apellidoCapitalizado} - ${veterinario.mailVet}`);
  }
}



function buscarClientePorApellido(listaClientes, apellido) {
  return listaClientes.find(cliente => cliente.apeUsu === apellido);
}


function buscarVetePorApellido(listaVetes, apellidoVeterinario) {
  return listaVetes.find(elVete => elVete.apeVet === apellidoVeterinario);
}


function nuevaMascota() {
  let nuevaMascota = clienteEncontrado.mascotas[clienteEncontrado.mascotas.length - 1];
  let nombreMascotaCapitalizado = nuevaMascota.nombre.charAt(0).toUpperCase() + nuevaMascota.nombre.slice(1).toLowerCase();
  let tipoMascotaCapitalizado = nuevaMascota.tipo.charAt(0).toUpperCase() + nuevaMascota.tipo.slice(1).toLowerCase();
  let sexoMascotaCapitalizado = nuevaMascota.sexo.charAt(0).toUpperCase() + nuevaMascota.sexo.slice(1).toLowerCase();
  alert(`Mascota agregada correctamente!🐶🐱 :\nNombre: ${nombreMascotaCapitalizado}\nTipo: ${tipoMascotaCapitalizado}\nSexo: ${sexoMascotaCapitalizado}`);
  console.log(`Mascota de ${clienteEncontrado.nomUsu} cargada correctamente.`);
}


function cargarTurnosVeterinarios(listaClientes) {
  let apellidoCliente = prompt('Ingrese el apellido del cliente:');
  let clienteEncontrado = buscarClientePorApellido(listaClientes, apellidoCliente);

  if (clienteEncontrado) {
    alert(`Cliente encontrado: ${clienteEncontrado.nomUsu} ${clienteEncontrado.apeUsu}`);
    let confirmarCliente = prompt('¿Es el cliente al que desea cargarle el turno? (s/n):');
    if (confirmarCliente.toLowerCase() === 's') {
      let continuarCarga = true;
      while (continuarCarga) {
        let nombreMascota = prompt('Ingrese el nombre de la mascota:');
        let mascotaEncontrada = clienteEncontrado.mascotas.find(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

        if (mascotaEncontrada) {
          // Mascota encontrada, proceder con la carga del turno
          let fechaTurno = obtenerProximoDiaHabil();
          let horarioTurno;
          do {
            horarioTurno = prompt('Ingrese el horario para el turno entre las 10 y 18hs ⏰ :');
          } while (!validarHorario(horarioTurno));
          clienteEncontrado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);
          alert(`Turno agregado correctamente para ${clienteEncontrado.nomUsu} el ${fechaTurno} a las ${horarioTurno}.`);
        } else {
          // Mascota no encontrada, dar opción al usuario de agregarla
          let cargarMascota = prompt('La mascota no se encuentra en la lista del cliente. ¿Desea cargarla? (s/n):');
          if (cargarMascota.toLowerCase() === 's') {
            let tipoMascota = prompt('Ingrese el tipo de mascota (ejemplo, Perro, Gato 🐶🐱):');
            let sexoMascota = prompt('Ingrese el sexo de la mascota:');

            clienteEncontrado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);
            nuevaMascota();

            let horarioTurno;
            do {
              horarioTurno = prompt('Ingrese el horario para el turno entre las 10 y 18hs ⏰ :');
            } while (!validarHorario(horarioTurno));
            let fechaTurno = obtenerProximoDiaHabil();
            clienteEncontrado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);
            alert(`Turno agregado correctamente para ${clienteEncontrado.nomUsu} el ${fechaTurno} a las ${horarioTurno}.`);
          } else {
            console.log('No se pudo cargar el turno porque la mascota no está en la lista del cliente.');
          }
        }

        let seguirCargando = prompt('¿Desea cargar otro turno? (s/n):');
        if (seguirCargando.toLowerCase() !== 's') {
          continuarCarga = false;
        }
      }
      mostrarMenuVeterinario();
    } else {
      console.log('No se cargará el turno para el cliente encontrado.');
      mostrarMenuVeterinario();
    }
  } else {
    console.log('No se encontró al cliente con el apellido ingresado.');
  }
}
