// Variables de estado
let ingresoExitoso = false;
let esVete = false;
let arrayTurnos = []; // Declaración de la lista de turnos como una variable global

// Solicitar nombre de usuario y contraseña al usuario
let login = prompt("Ingrese su nombre de usuario: ");
let passLogin = prompt("Ingrese su contraseña: ");

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
    let nombreMascota = prompt("Ingrese el nombre de la mascota: ");
    let tipoMascota = prompt("Ingrese el tipo de mascota: ");
    let sexoMascota = prompt("Ingrese el sexo de la mascota: ");

    cliente.agregarMascota(nombreMascota, tipoMascota, sexoMascota);
    console.log("Mascota cargada correctamente.");
  }
}

// Creación de instancias de UsuarioClientes
let clientesUsers = [
  new UsuarioClientes("maria", "lopez", "maria@mail.com", "maria1979"),
  new UsuarioClientes("jose", "perez", "jose@mail.com", "jose1983"),
  new UsuarioClientes("pedro", "sanchez", "pedro@mail.com", "pedrosan"),
  new UsuarioClientes("laila", "gallegos", "laila@mail.com", "laila1234"),
  new UsuarioClientes("milena", "blondel", "milena@mail.com", "mile123"),
];

//Vamos a Cargar algunas mascotas
// Buscar la instancia de UsuarioClientes correspondiente a "maria"
let maria = clientesUsers.find((cliente) => cliente.nomUsu === "maria");
// Verificar si se encontró la instancia de "maria"
if (maria) {
  maria.agregarMascota("Luna", "Gato", "Hembra");
  maria.agregarMascota("Max", "Perro", "Macho");
} else {
  console.log('No se encontró al cliente "maria" en la lista de clientes.');
}

// Definición de la clase UsuarioVete
class UsuarioVete {
  constructor(nombre, mail, contrasenia) {
    this.nomVete = nombre;
    this.mailVete = mail;
    this.contraVete = contrasenia;
    this.tipoUsu = "veterinario";
  }

  validarPassVete(contraseniaIngresadaVete) {
    return this.contraVete === contraseniaIngresadaVete;
  }
}

// Creación de instancias de UsuarioVete
let veterinariosUsers = [
  new UsuarioVete('Carlos', 'carlos@mail.com', 'carlos123'),
  new UsuarioVete('Laura', 'laura@mail.com', 'laura1980'),
  new UsuarioVete('Pablo', 'pablo@mail.com', 'pablo1985'),
];

// Verificar si el login corresponde a un cliente
let clienteEncontrado = clientesUsers.find(
  (cliente) => cliente.nomUsu === login
);

// Si el cliente es encontrado, se valida la contraseña
if (clienteEncontrado) {
  if (clienteEncontrado.validarPassCliente(passLogin)) {
    ingresoExitoso = true;
    esVete = false;
  }
}

// Si no se encontró el cliente, se verifica si el login corresponde a un veterinario
if (!clienteEncontrado) {
  let veterinarioEncontrado = veterinariosUsers.find(
    (veterinario) => veterinario.nomVete === login
  );

  // Si el veterinario es encontrado, se valida la contraseña
  if (veterinarioEncontrado) {
    if (veterinarioEncontrado.validarPassVete(passLogin)) {
      ingresoExitoso = true;
      esVete = true;
    }
  }
}

// Si el ingreso fue exitoso, se procede con el menú
if (ingresoExitoso) {
  // Mostrar mensaje de bienvenida
  if (esVete) {
    console.log(
      `Bienvenido(a), ${login}. Usted ha ingresado como veterinario.`
    );
  } else {
    console.log(`Bienvenido(a), ${login}. Usted ha ingresado como cliente.`);
  }

  let opcion;
  while (opcion !== "0") {
    // Mostrar menú
    console.log("-------- Menú --------");
    console.log("1. Ver lista de mascotas");
    console.log("2. Agendar turno");
    console.log("3. Buscar cliente por apellido");
    console.log("0. Salir");

    // Solicitar opción al usuario
    opcion = prompt("Ingrese el número de opción que desea realizar: ");

    switch (opcion) {
      case "1":
        // Ver lista de mascotas
        if (esVete) {
          console.log("No tiene permisos para ver la lista de mascotas.");
        } else {
          if (clienteEncontrado.mascotas.length > 0) {
            console.log("----- Lista de mascotas -----");
            clienteEncontrado.mascotas.forEach((mascota) => {
              console.log(`Nombre: ${mascota.nombre}`);
              console.log(`Tipo: ${mascota.tipo}`);
              console.log(`Sexo: ${mascota.sexo}`);
              console.log("-------------------------------");
            });
          } else {
            console.log("El cliente no tiene mascotas registradas.");
          }
        }
        break;
      case "2":
        // Agendar turno
        if (esVete) {
          let fechaTurno = prompt("Ingrese la fecha del turno: ");
          let horaTurno = prompt("Ingrese la hora del turno: ");
          let turno = {
            fecha: fechaTurno,
            hora: horaTurno,
            cliente: clienteEncontrado,
          };
          arrayTurnos.push(turno);
          console.log("Turno agendado correctamente.");
        } else {
          console.log("No tiene permisos para agendar turnos.");
        }
        break;
      case "3":
        // Buscar cliente por apellido
        if (esVete) {
          let apellidoBuscado = prompt("Ingrese el apellido del cliente: ");
          let clientesEncontrados = clientesUsers.filter(
            (cliente) => cliente.apeUsu === apellidoBuscado
          );

          if (clientesEncontrados.length > 0) {
            console.log("----- Clientes encontrados -----");
            clientesEncontrados.forEach((cliente) => {
              console.log(`Nombre: ${cliente.nomUsu}`);
              console.log(`Apellido: ${cliente.apeUsu}`);
              console.log(`Email: ${cliente.mailUsu}`);
              console.log("-------------------------------");
            });
          } else {
            console.log("No se encontraron clientes con ese apellido.");
          }
        } else {
          console.log("No tiene permisos para buscar clientes.");
        }
        break;
      case "0":
        // Salir
        console.log("Saliendo del programa...");
        break;
      default:
        console.log("Opción inválida. Por favor ingrese un número válido.");
        break;
    }
  }
} else {
  console.log(
    "Usuario o contraseña incorrectos. Por favor, vuelva a intentarlo."
  );
}
