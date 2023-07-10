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


// El código proporcionado es un sistema simplificado de gestión de usuarios y turnos para un portal de usuarios. 
// A continuación, se proporciona una explicación comentada del código:
// Portal de Usuarios

let listaClientes = []; // Arreglo para almacenar la lista de clientes
let listaVetes = []; // Arreglo para almacenar la lista de Veterinarios
let usuario;
let clienteLogueado = null;
let clienteEncontrado = null; // Variable global para almacenar el cliente encontrado

// Función de inicio de sesión
// La función login() se encarga de solicitar al usuario que ingrese el tipo de usuario (cliente o veterinario) 
// y luego llama a las funciones loginCliente() o loginVeterinario() según corresponda. Si las credenciales son correctas, 
// se muestra un mensaje de inicio de sesión exitoso y se llama a las funciones mostrarMenuCliente() o mostrarMenuVeterinario() respectivamente.
function login() {
  let tipoUsuario = prompt('Ingrese el tipo de usuario (Cliente/Veterinario):');
  tipoUsuario = tipoUsuario.toLowerCase();

  if (tipoUsuario === 'cliente') {
    clienteLogueado = loginCliente();
    if (clienteLogueado) {
      alert('¡Inicio de sesión exitoso para el cliente 🐾!');
      clienteLogueado = clienteEncontrado; // Actualizar clienteLogueado con clienteEncontrado
      mostrarMenuCliente();
    } else {
      alert('Credenciales incorrectas. Por favor, intente nuevamente 😢.');
      login();
    }
  } else if (tipoUsuario === 'veterinario') {
    clienteLogueado = loginVeterinario();
    if (clienteLogueado) {
      alert('¡Inicio de sesión exitoso para el veterinario 🐾!');
      mostrarMenuVeterinario();
    } else {
      alert('Credenciales incorrectas. Por favor, intente nuevamente 😢');
      login();
    }
  } else {
    alert('Tipo de usuario inválido. Por favor, ingrese "Cliente" o "Veterinario" 🤔');
    login()
  }
}
// Las funciones loginCliente() y loginVeterinario() se encargan de solicitar al usuario que ingrese 
// el nombre de usuario y la contraseña, y luego buscan en las respectivas listas (listaClientes y listaVetes) 
// si existe un cliente o veterinario con esas credenciales. Si se encuentra una coincidencia, 
// se asigna el cliente o veterinario encontrado a clienteLogueado y se devuelve true. En caso contrario, se devuelve false.

// Funcion para el login del cliente
function loginCliente() {
  usuario = prompt('Ingrese el nombre de usuario 🐾:');
  let contrasenia = prompt('Ingrese la contraseña:');
  clienteEncontrado = listaClientes.find(cliente => cliente.nomUsu === usuario && cliente.contraUsu === contrasenia);
  if (clienteEncontrado) {
    clienteLogueado = clienteEncontrado; // Asignar clienteEncontrado a clienteLogueado
    return true;
  } else {
    return false;
  }
}

// La función loginVeterinario solicita al usuario el nombre de usuario y la contraseña del veterinario. 
// Luego, busca en la lista de veterinarios si existe un veterinario con ese nombre de usuario y contraseña. 
// Si se encuentra un veterinario con las credenciales ingresadas, se devuelve true. En caso contrario, se devuelve false.
// Funcion para el login del veterinario
function loginVeterinario() {
  usuario = prompt('Ingrese el nombre de usuario 🐾:');
  let contrasenia = prompt('Ingrese la contraseña:');
  return listaVetes.find(veterinario => veterinario.nomVet === usuario && veterinario.contraVet === contrasenia);
}
// La función datosDeLasMascotas muestra por consola los datos de las mascotas del cliente logueado. 
// Primero, ordena las mascotas alfabéticamente por nombre. Luego, itera sobre las mascotas y muestra su nombre, tipo y sexo. 
// Los nombres de las mascotas se capitalizan para que la primera letra sea mayúscula y el resto sea minúscula.
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
//cargarMascotas(): 
// Esta función permite al cliente agregar nuevas mascotas a su lista de mascotas. 
// Se utiliza un bucle while para permitir al cliente agregar múltiples mascotas. 
// Dentro del bucle, se solicita al cliente el nombre de la mascota y se verifica si la mascota ya existe en la lista de mascotas del cliente. 
// Si la mascota ya existe, se muestra un mensaje de alerta. Si la mascota no existe, se solicita al cliente el tipo y el sexo de la mascota. 
// Luego, se llama al método agregarMascota() del cliente logueado para agregar la nueva mascota a su lista de mascotas. 
// Se muestra un mensaje con la última mascota agregada y se pregunta al cliente si desea agregar otra mascota. 
// Si el cliente elige continuar agregando mascotas, el bucle continúa. 
// Si el cliente no desea agregar más mascotas, se muestra un mensaje de finalización 
// y se llaman a las funciones datosDeLasMascotas() para mostrar los datos de las mascotas en la consola y mostrarMenuCliente() 
// para volver al menú principal del cliente.
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
        mostrarMenuCliente(); // Volver al menú del cliente
      }
    }
  }
}
// mostrarTurnosVeterinarios(tipoUsuario): 
// Esta función muestra los turnos veterinarios en función del tipo de usuario (cliente o veterinario). 
// Si el tipo de usuario es "cliente", se obtienen los turnos del cliente logueado. 
// Si el tipo de usuario es "veterinario", se obtienen los turnos de todos los clientes. 
// Luego, los turnos se ordenan por hora en orden ascendente. 
// Si hay turnos disponibles, se muestra una lista de turnos por consola y en un mensaje de alerta. 
// Si no hay turnos disponibles, se muestra un mensaje indicando que no hay turnos registrados. 
// Al final, la función vuelve al menú anterior dependiendo del tipo de usuario.
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
    mostrarMenuCliente();
  } else if (tipoUsuario === 'veterinario') {
    mostrarMenuVeterinario();
  }
}
// validarHorario(horario): 
// Esta función recibe un horario como argumento y valida si está dentro del rango de horario permitido (de 10 a 18). 
// Devuelve true si el horario es válido y false si no lo es.
function validarHorario(horario) {
  let hora = parseInt(horario);
  return hora >= 10 && hora <= 18;
}
//La función cargarTurnoVeterinario() permite al cliente solicitar un turno veterinario para una mascota. 
// A continuación, se explica el flujo de la función:
// 1.Se solicita al cliente el nombre de la mascota para la cual desea solicitar un turno veterinario.
// 2.Se utiliza el método find() para buscar al cliente logueado en la lista de clientes (listaClientes).
// 3.Se utiliza el método filter() en la lista de mascotas del cliente logueado para buscar las mascotas que coincidan con el nombre ingresado 
// por el cliente. Si se encuentran mascotas, se almacenan en la variable mascotasEncontradas.
// 4.Si se encontraron mascotas en la lista del cliente, se continúa con la solicitud de turno. 
// De lo contrario, se le pregunta al cliente si desea agregar la mascota a su lista.
// 5.Si el cliente decide agregar la mascota, se solicita el tipo y el sexo de la mascota, 
// y se utiliza el método agregarMascota() del cliente logueado para agregar la nueva mascota a su lista.
// 6.Luego, se solicita al cliente el horario para el turno. Se utiliza un bucle do-while junto con la función validarHorario() 
// para asegurarse de que el horario ingresado esté dentro del rango permitido (de 10 a 18).
// 7.Se llama a la función obtenerProximoDiaHabil() para obtener la próxima fecha hábil y se almacena en la variable fechaTurno.
// 8.Se utiliza el método agregarTurno() del cliente logueado para agregar el turno a su lista de turnos, 
// utilizando el nombre de la mascota, la fecha del turno y el horario.
// 9.Se muestra por consola el último turno agregado y se llaman a las funciones datosDeLasMascotas() 
// para mostrar los datos de las mascotas en la consola y mostrarMenuCliente() para volver al menú principal del cliente.
// 10.Se muestra un mensaje de confirmación del turno solicitado con los detalles de la mascota, la fecha y el horario. 
// Luego, se muestra un mensaje de finalización y se vuelve al menú principal del cliente.
// 11.Si el cliente decide agregar otra mascota, se llama a la función cargarMascotas() para agregar una nueva mascota.
// 12.Si el cliente no desea agregar más mascotas, se muestra un mensaje de finalización y se vuelve al menú principal del cliente.
// 13.Si el cliente decide no agregar la mascota, se muestra un mensaje indicando que no se agregó la mascota 
// y se vuelve al menú principal del cliente.
function cargarTurnoVeterinario() {
  // Lógica para solicitar turno veterinario
  let nombreMascota = prompt('Ingrese el nombre de la mascota:');
  clienteLogueado = listaClientes.find(cliente => cliente.nomUsu === usuario);

  // Buscar la mascota en la lista de mascotas del cliente
  let mascotasEncontradas = clienteLogueado.mascotas.filter(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

  if (mascotasEncontradas.length > 0) {
    // La mascota ya existe en la lista del cliente
    let horarioTurno;
    do {
      horarioTurno = prompt('Ingrese el horario para el turno entre las 10 y 18hs⏰ :');
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
        cargarMascotas();// aca le saque clienteLogueado
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

// La función mostrarMenuCliente() muestra el menú para el cliente logueado. 
// Se utiliza un switch para manejar las diferentes opciones seleccionadas por el usuario. 
// Por ejemplo, si se selecciona la opción 1, se llama a la función cargarTurnoVeterinario(). 
// Si se selecciona la opción 2, se llama a la función cargarMascotas(). 
// Para otras opciones, se muestra un mensaje de error y se vuelve a llamar a mostrarMenuCliente().
function mostrarMenuCliente() {
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
      mostrarMenuCliente(); // Volver al menú del cliente
      break;
  }
}
// La función enviarPedidoProveedor() permite al usuario, en este caso un veterinario, enviar un pedido al proveedor. A continuación, se explica el flujo de la función:
// 1.Se inicializan variables necesarias, como arrayProductos (un array vacío para almacenar los productos del pedido), 
// sumaTotal (para calcular el costo total del pedido) y continuarAgregandoProductos (un booleano para controlar si se deben agregar más productos).
// 2.Se utiliza un bucle do-while para solicitar al veterinario los detalles de los productos del pedido, como el artículo, la cantidad y el precio.
// 3.Se crea un objeto producto con las propiedades articulo, cantidad y precio, y se agrega al arrayProductos.
// 4.Se calcula la suma parcial del producto (cantidad * precio) y se suma a sumaTotal.
// 5.Se solicita al veterinario si desea agregar más productos al pedido. Si la respuesta es "N" (no), 
// se cambia el valor de continuarAgregandoProductos a false. Si la respuesta no es "S" (sí) o "N" (no), se muestra un mensaje de error.
// 6.El bucle se repite mientras continuarAgregandoProductos sea true.
// 7.Se muestra por consola los detalles de la compra, incluyendo el artículo, el precio unitario, el valor unitario con IVA, 
// el valor total, y el valor total con IVA, para cada producto en arrayProductos.
// 8.Se calcula el total sin IVA (totalSinIva) como la suma total del pedido y se calcula el total con IVA (totalConIva) 
// como el total sin IVA multiplicado por 1.21.
// 9.Se calcula el total financiado (totalFinanciado) como el total sin IVA multiplicado por 1.09.
// 10.Se muestra un mensaje con el total a pagar, incluyendo el total sin IVA, el total con IVA y el total financiado.
// 11.Se utiliza un bucle do-while para solicitar al veterinario una opción. 
// Las opciones posibles son: ver el total a pagar sin IVA, ver el total a pagar con IVA, 
// ver el total financiado a 30 días con una tasa del 9%, o volver al menú anterior.
// 12.Dependiendo de la opción elegida, se muestra un mensaje con el total correspondiente.
// 13.Si se elige la opción de volver al menú anterior, se muestra un mensaje de confirmación y se llama a la función mostrarMenuVeterinario() 
// para volver al menú principal del veterinario.
// 14.El bucle se repite hasta que se elija la opción de volver al menú anterior.
// 15.Finalmente, se llama a la función mostrarMenuVeterinario() para volver al menú principal del veterinario.
// Esta función permite al veterinario enviar un pedido al proveedor y calcular el total a pagar de diferentes formas. 
// Los detalles del pedido y los totales se muestran en la consola y a través de alertas en el navegador.
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
// La función mostrarMenuVeterinario() muestra el menú de opciones para el usuario veterinario y realiza acciones según la opción seleccionada.
// A continuación, se explica el flujo de la función:
// 1.Se muestra un menú al usuario veterinario utilizando la función prompt(), donde se le solicita seleccionar una opción del menú.
// El valor ingresado se guarda en la variable opcion.
// 2.Se convierte el valor de opcion a un número entero utilizando parseInt().
// 3.Se utiliza un bloque switch para realizar acciones según la opción seleccionada:
// 4.En el caso 1, se llama a la función cargarTurnosVeterinarios(listaClientes), 
// que permite al veterinario asignar un turno veterinario a un cliente. 
// Se le pasa como argumento la lista de clientes.
// 5.En el caso 2, se muestra un mensaje de alerta y se llama a la función agregarUsuarioVeterinario() 
// para agregar un usuario veterinario. Luego, se vuelve a llamar a la función mostrarMenuVeterinario() 
// para mostrar nuevamente el menú.
// 6.En el caso 3, se muestra un mensaje de alerta y se llama a la función enviarPedidoProveedor() para enviar un pedido al proveedor.
// 7.En el caso 4, se muestra un mensaje de alerta y se llama a la función mostrarTurnosVeterinarios('veterinario')
// para ver la agenda de turnos veterinarios. Se le pasa el argumento 'veterinario' para indicar que se trata de un veterinario 
// quien desea ver los turnos.
// 8.En el caso 5, se muestra un mensaje de despedida y se llama a la función login() para volver al menú inicial de inicio de sesión.
// 9.Si ninguna de las opciones anteriores coincide, se muestra un mensaje de alerta indicando que la opción seleccionada es inválida. 
// Luego, se vuelve a llamar a la función mostrarMenuVeterinario() para mostrar nuevamente el menú.
// 10.La función se repite hasta que se seleccione una opción válida.
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

//La función agregarUsuarioVeterinario() permite agregar un nuevo usuario veterinario a la lista de veterinarios. 
// A continuación, se explica el flujo de la función:
// 1.Se utilizan las funciones prompt() para solicitar al usuario el nombre, apellido, correo electrónico y contraseña del nuevo veterinario. 
// Los valores ingresados se guardan en las variables nombreVeterinario, apellidoVeterinario, mailVeterinario y contraseniaVeterinario, respectivamente.
// 2.Se crea un nuevo objeto UsuarioVetes utilizando los valores ingresados. Este objeto representa al nuevo veterinario.
// 3.El nuevo veterinario se agrega a la lista listaVetes utilizando el método push().
// 4.Se muestra un mensaje de alerta indicando que el usuario veterinario ha sido agregado correctamente. 
// Además, se utiliza un bucle for para recorrer la lista de veterinarios (listaVetes) 
// y mostrar por consola los nombres, apellidos y correos electrónicos de los veterinarios. 
// Los nombres y apellidos se capitalizan para tener la primera letra en mayúscula y las siguientes en minúscula.

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
// Función para obtener el próximo día hábil
// La función obtenerProximoDiaHabil() se encarga de calcular el próximo día hábil a partir de la fecha actual. A continuación, se explica el flujo de la función:
// 1.Se crea un objeto Date() para obtener la fecha actual.
// 2.Se obtiene el día de la semana utilizando el método getDay(). Los días de la semana van desde el 0 (domingo) hasta el 6 (sábado). 
// Se guarda el valor en la variable diaSemana.
// 3.Se determina la cantidad de días a agregar para llegar al próximo día hábil:
// Si diaSemana es igual a 5 (viernes), se agregan 3 días para llegar al próximo martes (día hábil).
// Si diaSemana es igual a 6 (sábado), se agregan 2 días para llegar al próximo martes (día hábil).
// En los demás casos, se agrega 1 día para llegar al próximo día hábil (martes).
// 4.Se utiliza el método setDate() para sumar los días necesarios a la fecha actual y obtener la fecha del próximo día hábil.
// 5.Se obtienen el día, mes y año de la fecha hábil resultante y se formatean en una cadena de texto con el formato "día/mes/año".
// 6.Se retorna la fecha hábil obtenida.
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
// buscarClientePorApellido(listaClientes, apellido): 
// Esta función recibe dos parámetros: listaClientes, que representa una lista de clientes, y apellido, que es el apellido del cliente que se desea buscar. 
// La función utiliza el método find() en la lista de clientes para buscar un cliente cuyo apellido (apeUsu) coincida con el apellido proporcionado. 
// Devuelve el primer cliente que cumple con esta condición o undefined si no se encuentra ningún cliente con ese apellido.
function buscarClientePorApellido(listaClientes, apellido) {
  return listaClientes.find(cliente => cliente.apeUsu === apellido);
}

// buscarVetePorApellido(listaVetes, apellidoVeterinario): 
// Similar a la función anterior, esta función recibe dos parámetros: listaVetes, que es una lista de veterinarios, y apellidoVeterinario, 
// que es el apellido del veterinario que se desea buscar. 
// Utiliza el método find() en la lista de veterinarios para buscar un veterinario cuyo apellido (apeVet) coincida con el apellido proporcionado. 
// Devuelve el primer veterinario que cumple con esta condición o undefined si no se encuentra ningún veterinario con ese apellido.
function buscarVetePorApellido(listaVetes, apellidoVeterinario) {
  return listaVetes.find(elVete => elVete.apeVet === apellidoVeterinario);
}

// nuevaMascota(): 
// Esta función se encarga de mostrar un mensaje de confirmación después de agregar una nueva mascota al cliente. 
// Primero, obtiene la última mascota agregada del cliente encontrado utilizando clienteEncontrado.mascotas[clienteEncontrado.mascotas.length - 1]. 
// Luego, capitaliza el nombre, tipo y sexo de la mascota utilizando métodos como charAt(), toUpperCase() y slice(). 
// Finalmente, muestra un mensaje de alerta con los detalles de la mascota agregada y también muestra un mensaje por consola. 
// Esta función se utiliza después de agregar una mascota en la función cargarMascotas().

function nuevaMascota() {
  let nuevaMascota = clienteEncontrado.mascotas[clienteEncontrado.mascotas.length - 1];
  let nombreMascotaCapitalizado = nuevaMascota.nombre.charAt(0).toUpperCase() + nuevaMascota.nombre.slice(1).toLowerCase();
  let tipoMascotaCapitalizado = nuevaMascota.tipo.charAt(0).toUpperCase() + nuevaMascota.tipo.slice(1).toLowerCase();
  let sexoMascotaCapitalizado = nuevaMascota.sexo.charAt(0).toUpperCase() + nuevaMascota.sexo.slice(1).toLowerCase();
  alert(`Mascota agregada correctamente!🐶🐱 :\nNombre: ${nombreMascotaCapitalizado}\nTipo: ${tipoMascotaCapitalizado}\nSexo: ${sexoMascotaCapitalizado}`);
  console.log(`Mascota de ${clienteEncontrado.nomUsu} cargada correctamente.`);
}

// Función para cargar turnos veterinarios
// cargarTurnosVeterinarios(listaClientes): 
// Esta función se encarga de cargar los turnos veterinarios para un cliente específico. 
// Recibe la lista de clientes como parámetro. Primero, solicita al usuario que ingrese el apellido del cliente. 
// Luego, utiliza la función buscarClientePorApellido(listaClientes, apellidoCliente) para encontrar al cliente en la lista de clientes.
// Si se encuentra al cliente, muestra su nombre y apellido en un mensaje de alerta y pregunta al usuario si es el cliente al que se desea cargar el turno. 
// Si el usuario confirma, se procede con la carga del turno.

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
login();