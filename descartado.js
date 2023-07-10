// // // // // // let opcionCliente = prompt('Seleccione una opción:\n1. Nuevo cliente\n2. Cliente existente\n3. Buscar cliente en lista');

// // // // // // if (opcionCliente === '1') {
// // // // // //   // Nuevo cliente
// // // // // //   let apellido = prompt('Ingrese el apellido: ');
// // // // // //   let nombreMascota = prompt('Nombre Mascota: ');
// // // // // //   let tipo = prompt('Especie/Tipo: ');
// // // // // //   let sexo = prompt('Sexo: ');
// // // // // //   let mailDeContacto = prompt('Ingrese mail de Contacto para enviar recordatorio: ');

// // // // // //   let cliente = new Cliente(apellido, nombreMascota, tipo, sexo, mailDeContacto);
// // // // // //   arrayClientes.push(cliente);

// // // // // //   // Agregar turno para el nuevo cliente
// // // // // //   agregarTurno(cliente);
// // // // // // } else if (opcionCliente === '2') {
// // // // // //   // Cliente existente
// // // // // // let loginCliente = prompt('Ingrese el nombre de usuario del cliente: ');
// // // // // // // CONTINUAR EL CODIGO

// // // // // // } else if (opcionCliente === '3') {
// // // // // //   // Buscar cliente en lista
// // // // // //   let apellidoCliente = prompt('Ingrese el apellido del cliente a buscar: ');
// // // // // //   let clienteEncontrado = buscarCliente(arrayClientes, apellidoCliente);
// // // // // //   if (clienteEncontrado) {
// // // // // //     console.log('Cliente encontrado:', clienteEncontrado);
// // // // // //     // Agregar turno para el cliente encontrado
// // // // // //     agregarTurno(clienteEncontrado);
// // // // // //   } else {
// // // // // //     console.log('Cliente no encontrado');
// // // // // //     // Aquí puedes agregar código adicional para manejar el caso de cliente no encontrado
// // // // // //   }
// // // // // // } else {
// // // // // //   console.log('Opción inválida');
// // // // // //   // Aquí puedes agregar código adicional para manejar el caso de opción inválida
// // // // // // }

// // // // // // function agregarTurno(cliente) {
// // // // // //   // Aquí puedes agregar el código para agregar un turno para el cliente seleccionado
// // // // // //   // Puedes utilizar el código previo que te proporcioné para agregar los turnos a un array y mostrarlos
// // // // // // }




// // // // // //     // Función para mostrar los turnos agendados
// // // // // //     function mostrarTurnosAgendados() {
// // // // // //         let turnosMensaje = 'Turnos agendados:\n';
// // // // // //         for (let i = 0; i < arrayTurnos.length; i++) {
// // // // // //             let turno = arrayTurnos[i];
// // // // // //             turnosMensaje += `Cliente: ${turno.cliente.apellido}, Mascota: ${turno.cliente.nombreMascota}, Fecha: ${turno.fecha}\n`;
// // // // // //         }
// // // // // //         alert(turnosMensaje);
// // // // // //     }

// // // // // //     mostrarTurnosAgendados();
// // // // // //     break;





// // // // // function agregarTurno(clienteEncontrado) {
// // // // //     let mascotas = clienteEncontrado.mascotas;

// // // // //     if (mascotas.length === 1) {
// // // // //         // Si el cliente tiene solo una mascota
// // // // //         let mascotaUnica = mascotas[0];
// // // // //         console.log(`El cliente tiene una mascota: ${mascotaUnica.nombre}`);

// // // // //         let respuesta = prompt('¿Desea agendar un turno para esta mascota? (si/no)').toLowerCase();
// // // // //         if (respuesta === 'si') {
// // // // //             // Agendar turno para la única mascota del cliente
// // // // //             let nuevoTurno = {
// // // // //                 cliente: clienteEncontrado,
// // // // //                 mascota: mascotaUnica,
// // // // //                 fecha: obtenerProximoDiaHabil(),
// // // // //                 hora: '10am'
// // // // //             };

// // // // //             arrayTurnos.push(nuevoTurno);

// // // // //             console.log('Turno agregado exitosamente');
// // // // //         } else if (respuesta !== 'no') {
// // // // //             console.log('Respuesta inválida. Por favor, ingrese "si" o "no".');
// // // // //         }
// // // // //     } else if (mascotas.length > 1) {
// // // // //         // Si el cliente tiene más de una mascota
// // // // //         console.log('El cliente tiene las siguientes mascotas:');
// // // // //         mascotas.forEach((mascota, index) => {
// // // // //             console.log(`${index + 1}. ${mascota.nombre}`);
// // // // //         });

// // // // //         let indiceMascota = parseInt(prompt('Seleccione la mascota para agendar el turno (ingrese el número):'));
// // // // //         if (indiceMascota >= 1 && indiceMascota <= mascotas.length) {
// // // // //             let mascotaSeleccionada = mascotas[indiceMascota - 1];

// // // // //             // Agendar turno para la mascota seleccionada
// // // // //             let nuevoTurno = {
// // // // //                 cliente: clienteEncontrado,
// // // // //                 mascota: mascotaSeleccionada,
// // // // //                 fecha: obtenerProximoDiaHabil(),
// // // // //                 hora: '10am'
// // // // //             };

// // // // //             arrayTurnos.push(nuevoTurno);

// // // // //             console.log('Turno agregado exitosamente');
// // // // //         } else {
// // // // //             console.log('Índice de mascota inválido');
// // // // //         }
// // // // //     } else {
// // // // //         console.log('El cliente no tiene mascotas registradas');
// // // // //     }
// // // // // }

// // // // // function obtenerProximoDiaHabil() {
// // // // //     // Lógica para obtener el próximo día hábil (puede variar según tus necesidades)
// // // // //     let fechaActual = new Date();
// // // // //     let diaSemana = fechaActual.getDay();
// // // // //     let diasAgregados = 0;

// // // // //     // 0 = Domingo, 6 = Sábado
// // // // //     if (diaSemana === 5) {
// // // // //         // Si es viernes, se agrega 3 días para llegar al próximo martes (día hábil)
// // // // //         diasAgregados = 3;
// // // // //     } else if (diaSemana === 6) {
// // // // //         // Si es sábado, se agrega 2 días para llegar al próximo martes (día hábil)
// // // // //         diasAgregados = 2;
// // // // //     } else {
// // // // //         // Para los demás días, se agrega 1 día para llegar al próximo día hábil (martes)
// // // // //         diasAgregados = 1;
// // // // //     }

// // // // //     fechaActual.setDate(fechaActual.getDate() + diasAgregados);

// // // // //     let dia = fechaActual.getDate();
// // // // //     let mes = fechaActual.getMonth() + 1; // Sumar 1 porque los meses van de 0 a 11
// // // // //     let anio = fechaActual.getFullYear();

// // // // //     return `${dia}/${mes}/${anio}`;
// // // // // }



// // // // // class UsuarioClientes {
// // // // //     // ...

// // // // //     establecerContrasenia(contrasenia) {
// // // // //       this.contraUsu = contrasenia;
// // // // //     }

// // // // //     // ...
// // // // //   }




// // // //   // Tu código aquí (con las correcciones)




// // // //   // Tu código aquí (con las correcciones)

// // // // // ...

// // // // // Aquí ya estaría bien el resto del código

// // // // function mostrarDetallesCompra() {
// // // //     // ...
// // // //     let opcionElegida = prompt('Ingrese el número deseado:\n1. Ver Total a Pagar (Sin IVA)\n2. Ver Total a Pagar (Con IVA)\n3. Ver Total Financiado a 30 días con una tasa del 9%');

// // // //     switch (opcionElegida) {
// // // //         case '1':
// // // //             alert(`Total a pagar (Sin IVA): $${totalSinIva.toFixed(2)}`);
// // // //             break;
// // // //         case '2':
// // // //             alert(`Total a pagar (Con IVA): $${totalConIva.toFixed(2)}`);
// // // //             break;
// // // //         case '3':
// // // //             alert(`Total Financiado a 30 días con una tasa del 9%: $${totalFinanciado.toFixed(2)}`);
// // // //             break;
// // // //         default:
// // // //             // Si no es ninguna opción válida, mostramos los detalles de la compra nuevamente
// // // //             mostrarDetallesCompra();
// // // //             break;
// // // //     }
// // // // }

// // // // // ...

// // // // let continuarAgendandoTurnos = true;
// // // // while (continuarAgendandoTurnos) {
// // // //     let opcionCliente = prompt('Seleccione una opción:\n1. Nuevo cliente\n2. Cliente existente\n3. Buscar cliente en lista');
// // // //     switch (opcionCliente) {
// // // //         case '1':
// // // //             // ... (Código para crear nuevo cliente)
// // // //             break;
// // // //         case '2':
// // // //             // ... (Código para buscar cliente existente y agregar turno)
// // // //             break;
// // // //         case '3':
// // // //             // ... (Código para buscar cliente en lista)
// // // //             break;
// // // //         default:
// // // //             // Opción inválida
// // // //             console.log('Opción inválida');
// // // //             break;
// // // //     }
// // // //     // ... (Código para verificar si se desea agregar más turnos o salir)
// // // // }

// // // // // ...

// // // // // Tu código aquí (sin los comentarios)



// // // // Función para cargar mascotas a un cliente
// // // function cargarMascotas(cliente, cantidadMascotas) {
// // //     for (let i = 0; i < cantidadMascotas; i++) {
// // //         let nombreMascota = prompt('Ingrese el nombre de la mascota: ');
// // //         let tipoMascota = prompt('Ingrese el tipo de mascota: ');
// // //         let sexoMascota = prompt('Ingrese el sexo de la mascota: ');

// // //         cliente.agregarMascota(nombreMascota, tipoMascota, sexoMascota);
// // //         console.log('Mascota cargada correctamente.');
// // //     }
// // // }

// // // // Buscar al cliente ingresado en la lista de usuarios
// // // let clienteEncontrado = buscarUsuario(clientesUsers, login, passLogin);

// // // // Si el cliente es encontrado
// // // if (clienteEncontrado !== null) {
// // //     console.log('Bienvenido/a ' + clienteEncontrado.nomUsu + ' ' + clienteEncontrado.apeUsu);
// // //     console.log('Su mail de contacto es: ' + clienteEncontrado.mailUsu);
// // //     console.log('Usted es un cliente.');

// // //     // Mientras el ingreso no sea exitoso
// // //     while (ingresoExitoso === false) {
// // //         let operacionDeseada = prompt(
// // //             'Indique la operación que desea realizar:\n1. Ver datos de sus mascotas\n2. Agendar turno para sus mascotas\n3. Cargar mascotas\n4. Salir'
// // //         );

// // //         switch (operacionDeseada) {
// // //             case '1':
// // //                 // Código para ver datos de las mascotas
// // //                 break;

// // //             case '2':
// // //                 // Código para agendar turno
// // //                 break;

// // //             case '3':
// // //                 let cantidadMascotas = parseInt(prompt('Ingrese la cantidad de mascotas a cargar: '));
// // //                 cargarMascotas(clienteEncontrado, cantidadMascotas);
// // //                 break;

// // //             case '4':
// // //                 console.log('Sesión finalizada.');
// // //                 ingresoExitoso = true;
// // //                 break;

// // //             default:
// // //                 console.log('Opción inválida. Por favor, intente nuevamente.');
// // //                 break;
// // //         }
// // // //     }
// // // // }





// // // // function cargarTurnosVeterinarios(listaClientes) {
// // // //   let apellidoCliente = prompt('Ingrese el apellido del cliente: ');
// // // //   let clienteEncontrado = buscarClientePorApellido(listaClientes, apellidoCliente);

// // // //   if (clienteEncontrado) {
// // // //     let continuarCarga = true;
// // // //     while (continuarCarga) {
// // // //       let nombreMascota = prompt('Ingrese el nombre de la mascota: ');
// // // //       let mascotaEncontrada = clienteEncontrado.mascotas.find(mascota => mascota.nombre === nombreMascota);

// // // //       if (mascotaEncontrada) {
// // // //         let fechaTurno = obtenerProximoDiaHabil();
// // // //         let horaTurno = prompt('Ingrese la hora del turno: ');

// // // //         clienteEncontrado.agregarTurno(nombreMascota, fechaTurno, horaTurno);
// // // //         alert(`Turno agregado correctamente para el ${fechaTurno} a las ${horaTurno}.`);

// // // //         let seguirCargando = prompt('¿Desea cargar otro turno? (s/n): ');
// // // //         if (seguirCargando.toLowerCase() !== 's') {
// // // //           continuarCarga = false;
// // // //         }
// // // //       } else {
// // // //         let cargarMascota = prompt('La mascota no se encuentra en la lista del cliente. ¿Desea cargarla? (s/n): ');
// // // //         if (cargarMascota.toLowerCase() === 's') {
// // // //           let tipoMascota = prompt('Ingrese el tipo de mascota: ');
// // // //           let sexoMascota = prompt('Ingrese el sexo de la mascota: ');

// // // //           clienteEncontrado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);
// // // //           console.log('Mascota cargada correctamente.');
// // // //         } else {
// // // //           console.log('No se pudo cargar el turno porque la mascota no está en la lista del cliente.');
// // // //         }
// // // //       }
// // // //     }
// // // //   } else {
// // // //     console.log('No se encontró al cliente con el apellido ingresado.');
// // // //   }
// // // // }

// // // function login() {
// // //   let tipoUsuario = prompt('Ingrese el tipo de usuario (Cliente/Veterinario):');
// // //   tipoUsuario = tipoUsuario.toLowerCase();

// // //   let usuario;
// // //   if (tipoUsuario === 'cliente') {
// // //     usuario = prompt('Ingrese el nombre de usuario:');
// // //     let contrasenia = prompt('Ingrese la contraseña:');

// // //     // Verificar los datos del cliente
// // //     let clienteEncontrado = listaClientes.find(cliente => cliente.nomUsu === usuario && cliente.contraUsu === contrasenia);

// // //     if (clienteEncontrado) {
// // //       // Login exitoso para el cliente
// // //       alert('¡Inicio de sesión exitoso para el cliente!');
// // //       // Mostrar opciones del menú para el cliente
// // //       mostrarMenuCliente();
// // //     } else {
// // //       // Credenciales incorrectas para el cliente
// // //       alert('Credenciales incorrectas. Por favor, intente nuevamente.');
// // //     }
// // //   } else if (tipoUsuario === 'veterinario') {
// // //     usuario = prompt('Ingrese el nombre de usuario:');
// // //     let contrasenia = prompt('Ingrese la contraseña:');

// // //     // Verificar los datos del veterinario
// // //     let veterinarioEncontrado = listaVetes.find(veterinario => veterinario.nomVet === usuario && veterinario.contraVet === contrasenia);

// // //     if (veterinarioEncontrado) {
// // //       // Login exitoso para el veterinario
// // //       alert('¡Inicio de sesión exitoso para el veterinario!');
// // //       // Mostrar opciones del menú para el veterinario
// // //       mostrarMenuVeterinario();
// // //     } else {
// // //       // Credenciales incorrectas para el veterinario
// // //       alert('Credenciales incorrectas. Por favor, intente nuevamente.');
// // //     }
// // //   } else {
// // //     // Tipo de usuario inválido
// // //     alert('Tipo de usuario inválido. Por favor, ingrese "Cliente" o "Veterinario".');
// // //   }
// // // }

// // // function mostrarMenuCliente() {
// // //   let opcion = prompt('Seleccione una opción:\n1. Solicitar turno Veterinario\n2. Agregar mascota\n3. Comprar Productos');
// // //   opcion = parseInt(opcion);

// // //   switch (opcion) {
// // //     case 1:
// // //       // Lógica para solicitar turno veterinario
// // //       alert('Solicitando turno veterinario...');
// // //       break;
// // //     case 2:
// // //       // Lógica para agregar mascota
// // //       alert('Agregando mascota...');
// // //       break;
// // //     case 3:
// // //       // Lógica para comprar productos
// // //       alert('Comprando productos...');
// // //       break;
// // //     default:
// // //       alert('Opción inválida.');
// // //       break;
// // //   }
// // // }

// // // function mostrarMenuVeterinario() {
// // //   let opcion = prompt('Seleccione una opción:\n1. Asignar turno veterinario\n2. Agregar Usuario Veterinario\n3. Sumar Stock de nuevos Productos');
// // //   opcion = parseInt(opcion);

// // //   switch (opcion) {
// // //     case 1:
// // //       // Lógica para asignar turno veterinario
// // //       alert('Asignando turno veterinario...');
// // //       break;
// // //     case 2:
// // //       // Lógica para agregar usuario veterinario
// // //       alert('Agregando usuario veterinario...');
// // //       break;
// // //     case 3:
// // //       // Lógica para sumar stock de nuevos productos
// // //       alert('Sumando stock de nuevos productos...');
// // //       break;
// // //     default:
// // //       alert('Opción inválida.');
// // //       break;
// // //   }
// // // }

// // // function mostrarMenuCliente() {
// // //   let opcion = prompt('Seleccione una opción:\n1. Solicitar turno Veterinario\n2. Agregar mascota\n3. Comprar Productos');
// // //   opcion = parseInt(opcion);

// // //   switch (opcion) {
// // //     case 1:
// // //       // Lógica para solicitar turno veterinario
// // //       let nombreMascota = prompt('Ingrese el nombre de la mascota:');
// // //       let usuario = prompt('Ingrese el nombre de usuario:');
// // //       let clienteLogueado = listaClientes.find(cliente => cliente.nomUsu === usuario);
// // //       let mascotaEncontrada = clienteLogueado.mascotas.find(mascota => mascota.nombre === nombreMascota);

// // //       if (mascotaEncontrada) {
// // //         // La mascota ya existe en la lista del cliente
// // //         let horarioTurno = prompt('Ingrese el horario para el turno:');
// // //         let fechaTurno = obtenerProximoDiaHabil();

// // //         // Agregar el turno a la lista de turnos del cliente
// // //         clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);

// // //         alert(`Turno solicitado:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
// // //       } else {
// // //         // La mascota no existe en la lista del cliente
// // //         let confirmacion = prompt('La mascota no se encuentra en la lista. ¿Desea agregarla? (S/N)');

// // //         if (confirmacion.toLowerCase() === 's') {
// // //           let tipoMascota = prompt('Ingrese el tipo de mascota:');
// // //           let sexoMascota = prompt('Ingrese el sexo de la mascota:');
          
// // //           // Agregar la mascota a la lista de mascotas del cliente
// // //           clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);

// // //           let horarioTurno = prompt('Ingrese el horario para el turno:');
// // //           let fechaTurno = obtenerProximoDiaHabil();

// // //           // Agregar el turno a la lista de turnos del cliente
// // //           clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);

// // //           alert(`Turno solicitado:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
// // //         } else {
// // //           alert('No se agregó la mascota. Operación cancelada.');
// // //         }
// // //       }
// // //       break;
// // //     case 2:
// // //       // Lógica para agregar mascota
// // //       alert('Agregando mascota...');
// // //       break;
// // //     case 3:
// // //       // Lógica para comprar productos
// // //       alert('Comprando productos...');
// // //       break;
// // //     default:
// // //       alert('Opción inválida.');
// // //       break;
// // //   }
// // // }

// // // Lógica para solicitar turno veterinario
// // // let nombreMascota = prompt('Ingrese el nombre de la mascota:');
// // // let clienteLogueado = listaClientes.find(cliente => cliente.nomUsu === usuario);

// // // // Buscar la mascota en la lista de mascotas del cliente
// // // let mascotasEncontradas = clienteLogueado.mascotas.filter(mascota => mascota.nombre === nombreMascota);

// // // if (mascotasEncontradas.length > 0) {
// // //   // La mascota ya existe en la lista del cliente
// // //   let horarioTurno = prompt('Ingrese el horario para el turno:');
// // //   let fechaTurno = obtenerProximoDiaHabil();

// // //   // Agregar el turno a la lista de turnos del cliente
// // //   clienteLogueado.agregarTurno(mascotasEncontradas[0].nombre, fechaTurno, horarioTurno);

// // //   console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
// // //   console.log('Mascotas del usuario:', clienteLogueado.mascotas); // Muestra todas las mascotas del usuario

// // //   alert(`Turno solicitado:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
// // // } else {
// // //   // La mascota no existe en la lista del cliente
// // //   let confirmacion = prompt('La mascota no se encuentra en la lista. ¿Desea agregarla? (S/N)');

// // //   if (confirmacion.toLowerCase() === 's') {
// // //     let tipoMascota = prompt('Ingrese el tipo de mascota:');
// // //     let sexoMascota = prompt('Ingrese el sexo de la mascota:');

// // //     // Agregar la mascota a la lista de mascotas del cliente
// // //     clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);

// // //     let horarioTurno = prompt('Ingrese el horario para el turno:');
// // //     let fechaTurno = obtenerProximoDiaHabil();

// // //     // Agregar el turno a la lista de turnos del cliente
// // //     clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);

// // //     console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
// // //     console.log('Mascotas del usuario:', clienteLogueado.mascotas); // Muestra todas las mascotas del usuario

// // //     alert(`Turno solicitado:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
// // //   } else {
// // //     alert('No se agregó la mascota¡Mis disculpas por la confusión anterior! Parece que el código necesita una revisión adicional para solucionar el problema. 

// // // Aquí tienes el código actualizado:

// // // ```javascript
// // // function mostrarMenuCliente() {
// // //   let opcion = prompt('Seleccione una opción:\n1. Solicitar turno Veterinario\n2. Agregar mascota\n3. Comprar Productos');
// // //   opcion = parseInt(opcion);

// // //   switch (opcion) {
// // //     case 1:
// // //       // Lógica para solicitar turno veterinario
// // //       let nombreMascota = prompt('Ingrese el nombre de la mascota:');
// // //       let clienteLogueado = listaClientes.find(cliente => cliente.nomUsu === usuario);

// // //       // Buscar la mascota en la lista de mascotas del cliente
// // //       let mascotaEncontrada = clienteLogueado.mascotas.find(mascota => mascota.nombre === nombreMascota);

// // //       if (mascotaEncontrada) {
// // //         // La mascota ya existe en la lista del cliente
// // //         let horarioTurno = prompt('Ingrese el horario para el turno:');
// // //         let fechaTurno = obtenerProximoDiaHabil();

// // //         // Agregar el turno a la lista de turnos del cliente
// // //         clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);
// // //         console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
// // //         console.log('Mascotas del usuario:', clienteLogueado.mascotas); // Muestra todas las mascotas del usuario
// // //         alert(`Turno solicitado:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
// // //       } else {
// // //         // La mascota no existe en la lista del cliente
// // //         let confirmacion = prompt('La mascota no se encuentra en la lista. ¿Desea agregarla? (S/N)');

// // //         if (confirmacion.toLowerCase() === 's') {
// // //           let tipoMascota = prompt('Ingrese el tipo de mascota:');
// // //           let sexoMascota = prompt('Ingrese el sexo de la mascota:');
          
// // //           // Agregar la mascota a la lista de mascotas del cliente
// // //           clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);

// // //           let horarioTurno = prompt('Ingrese el horario para el turno:');
// // //           let fechaTurno = obtenerProximoDiaHabil();

// // //           // Agregar el turno a la lista de turnos del cliente
// // //           clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);
// // //           console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
// // //           console.log('Mascotas del usuario:', clienteLogueado.mascotas); // Muestra todas las mascotas del usuario
// // //           alert(`Turno solicitado:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
// // //         } else {
// // //           alert('No se agregó la mascota. Operación cancelada.');
// // //         }
// // //       }
// // //       break;
// // //     case 2:
// // //       // Lógica para agregar mascota
// // //       alert('Agregando mascota...');
// // // //       break;
// // // //     case 3:
// // // //       // Lógica para comprar productos
// // // //       alert('Comprando productos...');
// // // //       break;
// // // //     default:

// // // case 2:
// // //   // Lógica para agregar mascota
// // //   cargarMascotas();
// // //   break;

// // // // ...

// // // function cargarMascotas() {
// // //   let nombreMascota = prompt('Ingrese el nombre de la mascota:');
// // //   let clienteLogueado = listaClientes.find(cliente => cliente.nomUsu === usuario);

// // //   // Verificar si la mascota ya existe en la lista de mascotas del cliente
// // //   let mascotaExistente = clienteLogueado.mascotas.find(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

// // //   if (mascotaExistente) {
// // //     alert('La mascota ya existe en la lista.');
// // //   } else {
// // //     let tipoMascota = prompt('Ingrese el tipo de mascota:');
// // //     let sexoMascota = prompt('Ingrese el sexo de la mascota:');

// // //     // Agregar la mascota a la lista de mascotas del cliente
// // //     clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);

// // //     console.log('Mascota agregada:', clienteLogueado.mascotas[clienteLogueado.mascotas.length - 1]); // Muestra la última mascota agregada

// // //     alert('Mascota agregada exitosamente.');
// // //   }
// // // }



// // function mostrarMenuCliente() {
// //   let opcion = prompt('Seleccione una opción:\n1. Solicitar turno Veterinario\n2. Agregar mascota\n3. Comprar Productos');
// //   opcion = parseInt(opcion);

// //   switch (opcion) {
// //     case 1:
// //       // Lógica para solicitar turno veterinario
// //       let nombreMascota = prompt('Ingrese el nombre de la mascota:');
// //       let clienteLogueado = listaClientes.find(cliente => cliente.nomUsu === usuario);

// //       // Buscar la mascota en la lista de mascotas del cliente
// //       let mascotasEncontradas = clienteLogueado.mascotas.filter(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

// //       if (mascotasEncontradas.length > 0) {
// //         // La mascota ya existe en la lista del cliente
// //         let horarioTurno = prompt('Ingrese el horario para el turno:');
// //         let fechaTurno = obtenerProximoDiaHabil();

// //         // Agregar el turno a la lista de turnos del cliente
// //         clienteLogueado.agregarTurno(mascotasEncontradas[0].nombre, fechaTurno, horarioTurno);

// //         console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
// //         console.log('Mascotas del usuario:', clienteLogueado.mascotas); // Muestra todas las mascotas del usuario

// //         alert(`Turno solicitado:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
// //       } else {
// //         // La mascota no existe en la lista del cliente
// //         let confirmacion = prompt('La mascota no se encuentra en la lista. ¿Desea agregarla? (S/N)');

// //         if (confirmacion.toLowerCase() === 's') {
// //           cargarMascotas(clienteLogueado);
// //         } else {
// //           alert('No se agregó la mascota. Operación cancelada.');
// //         }
// //       }
// //       break;
// //     case 2:
// //       // Lógica para agregar mascota
// //       cargarMascotas();
// //       break;
// //     case 3:
// //       // Lógica para comprar productos
// //       alert('Comprando productos...');
// //       break;
// //     default:
// //       alert('Opción inválida.');
// //       break;
// //   }
// // }

// // function cargarMascotas(cliente) {
// //   let agregarMasMascotas = true;

// //   while (agregarMasMascotas) {
// //     let nombreMascota = prompt('Ingrese el nombre de la mascota:');
  
// //     // Verificar si la mascota ya existe en la lista de mascotas del cliente
// //     let mascotaExistente = cliente.mascotas.find(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());
  
// //     if (mascotaExistente) {
// //       alert('La mascota ya existe en la lista.');
// //     } else {
// //       let tipoMascota = prompt('Ingrese el tipo de mascota:');
// //       let sexoMascota = prompt('Ingrese el sexo de la mascota:');
  
// //       // Agregar la mascota a la lista de mascotas del cliente
// //      cliente.agregarMascota(nombreMascota, tipoMascota, sexoMascota);

// //       console.log('Mascota agregada:', cliente.mascotas[cliente.mascotas.length - 1]); // Muestra la última mascota agregada

// //       let continuar = prompt('¿Desea agregar otra mascota? (S/N)');
// //       if (continuar.toLowerCase() === 's') {
// //         agregarMasMascotas = true;
// //       } else {
// //         agregarMasMascotas = false;
// //       }
// //     }
// //   }
// // }

// // case 2:
// //   // Lógica para agregar mascota
// //   cargarMascotas(clienteLogueado);
// //   break;


//   //De esta manera, se pasará el objeto clienteLogueado como argumento a la función cargarMascotas, lo que permitirá agregar las mascotas al cliente correcto.

//   // function mostrarMenuCliente() {
//   //   let opcion = prompt('Seleccione una opción:\n1. Solicitar turno Veterinario\n2. Agregar mascota\n3. Comprar Productos');
//   //   opcion = parseInt(opcion);
  
//   //   switch (opcion) {
//   //     case 1:
//   //       // Lógica para solicitar turno veterinario
//   //       let nombreMascota = prompt('Ingrese el nombre de la mascota:');
//   //       let clienteLogueado = listaClientes.find(cliente => cliente.nomUsu === usuario);
  
//   //       // Buscar la mascota en la lista de mascotas del cliente
//   //       let mascotasEncontradas = clienteLogueado.mascotas.filter(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());
  
//   //       if (mascotasEncontradas.length > 0) {
//   //         // La mascota ya existe en la lista del cliente
//   //         let horarioTurno = prompt('Ingrese el horario para el turno:');
//   //         let fechaTurno = obtenerProximoDiaHabil();
  
// //   //         // Agregar el turno a la lista de turnos del cliente
// //   //         clienteLogueado.agregarTurno(mascotasEncontradas[0].nombre, fechaTurno, horarioTurno);
  
// //   //         console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
// //   //         console.log('Mascotas del usuario:', clienteLogueado.mascotas); // Muestra todas las mascotas del usuario
  
// //   //         alert(`Turno solicitado:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
// //   //       } else {
// //   //         // La mascota no existe en la lista del cliente
// //   //         let confirmacion = prompt('La mascota no se encuentra en la lista. ¿Desea agregarla? (S/N)');
  
// //   //         if (confirmacion.toLowerCase() === 's') {
// //   //           let tipoMascota = prompt('Ingrese el tipo de mascota:');
// //   //           let sexoMascota = prompt('Ingrese el sexo de la mascota:');
  
// //   //           // Agregar la mascota a la lista de mascotas del cliente
// //   //           clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);
  
// //   //           let horarioTurno = prompt('Ingrese el horario para el turno:');
// //   //           let fechaTurno = obtenerProximoDiaHabil();
  
// //   //           // Agregar el turno a la lista de turnos del cliente
// //   //           clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);

// //   //           console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
// //   //           console.log('Mascotas del usuario:', clienteLogueado.mascotas); // Muestra todas las mascotas del usuario

// //   //           alert(`Turno solicitado:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);

// //   //           let agregarMasMascotas = prompt('¿Desea agregar otra mascota? (S/N)');
// //   //           if (agregarMasMascotas.toLowerCase() === 's') {
// //   //             cargarMascotas(clienteLogueado);
// //   //           } else {
// //   //             alert('Operación finalizada. Volviendo al menú principal...');
// //   //             mostrarMenuCliente();
// //   //           }

// //   //Mueve la función cargarMascotas antes de la función mostrarMenuCliente.

// //   function cargarMascotas(cliente) {
// //     let nombreMascota = prompt('Ingrese el nombre de la mascota:');
// //     let tipoMascota = prompt('Ingrese el tipo de mascota:');
// //     let sexoMascota = prompt('Ingrese el sexo de la mascota:');
  
// //     cliente.agregarMascota(nombreMascota, tipoMascota, sexoMascota);
  
// //     console.log('Mascotas del usuario:', cliente.mascotas); // Muestra todas las mascotas del usuario
  
// //     let agregarMasMascotas = prompt('¿Desea agregar otra mascota? (S/N)');
// //     if (agregarMasMascotas.toLowerCase() === 's') {
// //       cargarMascotas(cliente);
// //     } else {
// //       alert('Operación finalizada. Volviendo al menú principal...');
// //       mostrarMenuCliente();
// //     }
// //   }
  
// //   function mostrarMenuCliente() {
// //     // ...
// //   }


// //   // Asegúrate de llamar a la función cargarMascotas correctamente en el case 2 de mostrarMenuCliente.
// //   case 2:
// //     // Lógica para agregar mascota
// //     cargarMascotas(clienteLogueado);
// //     break;
  

// // // //////////////////////////////


// // function mostrarMenuCliente() {
// //   let opcion = prompt('Seleccione una opción:\n1. Solicitar turno Veterinario\n2. Agregar mascota\n3. Comprar Productos');
// //   opcion = parseInt(opcion);

// //   switch (opcion) {
// //     case 1:
// //       // Lógica para solicitar turno veterinario
// //       let nombreMascota = prompt('Ingrese el nombre de la mascota:');

// //       // Buscar la mascota en la lista de mascotas del cliente
// //       let mascotasEncontradas = clienteLogueado.mascotas.filter(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

// //       if (mascotasEncontradas.length > 0) {
// //         // La mascota ya existe en la lista del cliente
// //         let horarioTurno = prompt('Ingrese el horario para el turno:');
// //         let fechaTurno = obtenerProximoDiaHabil();

// //         // Agregar el turno a la lista de turnos del cliente
// //         clienteLogueado.agregarTurno(mascotasEncontradas[0].nombre, fechaTurno, horarioTurno);

// //         console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
// //         console.log('Mascotas del usuario:', clienteLogueado.mascotas); // Muestra todas las mascotas del usuario

// //         alert(`Turno solicitado:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
// //       } else {
// //         // La mascota no existe en la lista del cliente
// //         let confirmacion = prompt('La mascota no se encuentra en la lista. ¿Desea agregarla? (S/N)');

// //         if (confirmacion.toLowerCase() === 's') {
// //           let tipoMascota = prompt('Ingrese el tipo de mascota:');
// //           let sexoMascota = prompt('Ingrese el sexo de la mascota:');

// //           // Agregar la mascota a la lista de mascotas del cliente
// //           clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);

// //           let horarioTurno = prompt('Ingrese el horario para el turno:');
// //           let fechaTurno = obtenerProximoDiaHabil();

// //           // Agregar el turno a la lista de turnos del cliente
// //           clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);

// //           console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
// //           console.log('Mascotas del usuario:', clienteLogueado.mascotas); // Muestra todas las mascotas del usuario

// //           alert(`Turno solicitado:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
// //           let agregarMasMascotas = prompt('¿Desea agregar otra mascota? (S/N)');
// //           if (agregarMasMascotas.toLowerCase() === 's') {
// //             cargarMascotas(clienteLogueado);
// //           } else {
// //             alert('Operación finalizada. Volviendo al menú principal...');
// //             mostrarMenuCliente();
// //           }
// //         }
// //       }
// //       break;
// //     case 2:
// //       // Lógica para agregar mascota
// //       cargarMascotas(clienteLogueado);
// //       break;
// //     case 3:
// //       // Lógica para comprar productos
// //       alert('Comprando productos...');
// //       break;
// //     default:
// //       alert('Opción inválida.');
// //       break;
// //     }
// // }
  
// //   function mostrarMenuVeterinario() {
// //     let opcion = prompt('Seleccione una opción:\n1. Asignar turno veterinario\n2. Agregar Usuario Veterinario\n3. Sumar Stock de nuevos Productos');
// //     opcion = parseInt(opcion);
  
// //     switch (opcion) {
// //       case 1:
// //         // Lógica para asignar turno veterinario
// //         alert('Asignando turno veterinario...');
// //         break;
// //       case 2:
// //         // Lógica para agregar usuario veterinario
// //         alert('Agregando usuario veterinario...');
// //         break;
// //       case 3:
// //         // Lógica para sumar stock de nuevos productos
// //         alert('Sumando stock de nuevos productos...');
// //         break;
// //       default:
// //         alert('Opción inválida.');
// //         break;
// //     }
// // }
  
// //   class UsuarioClientes {
// //     constructor(nombrU, apellidoU, mailDeContactoU, contrasenia) {
// //       this.nomUsu = nombrU;
// //       this.apeUsu = apellidoU;
// //       this.mailUsu = mailDeContactoU;
// //       this.contraUsu = contrasenia;
// //       this.mascotas = []; // Arreglo para almacenar las mascotas del cliente
// //       this.turnos = []; // Arreglo para almacenar los turnos del cliente
// //     }
  
// //     agregarMascota(nombreMascota, tipoMascota, sexoMascota) {
// //       const mascota = {
// //         nombre: nombreMascota,
// //         tipo: tipoMascota,
// //         sexo: sexoMascota,
// //       };
// //       this.mascotas.push(mascota);
// // //     }
  
// // //     agregarTurno(nombreMascota, fechaTurno, horaTurno) {
// // //       const turno = {
// // //         apellidoCliente: this.apeUsu,
// // //         nombreMascota: nombreMascota,
// // //         fechaTurno: fechaTurno,
// // //         horaTurno: horaTurno,
// // //       };
// // //       this.turnos.push(turno);
// // //     }
// // //   }
  
// // //   // Creación de instancias de UsuarioClientes
// // //   let cliente = new UsuarioClientes('maria', 'lopez', 'maria@mail.com', 'maria123');
// // //   let cliente2 = new UsuarioClientes('jose', 'perez', 'jose@mail.com', 'jose123');
// // //   let cliente3 = new UsuarioClientes('juan', 'antuan', 'juan@mail.com', 'juan123');
// // //   let cliente4 = new UsuarioClientes('ramiro', 'firpo', 'ramiro@mail.com', 'ramiro123');
// // //   let cliente5 = new UsuarioClientes('lucia', 'martinez', 'lucia@mail.com', 'lucia123');
  
// // //   // Agregar clientes a la lista de clientes
// // //   listaClientes.push(cliente, cliente2, cliente3, cliente4, cliente5);
  
// // //   // Agregar mascotas
// // // cliente.agregarMascota('Luna', 'Gato', 'Hembra');
// // // cliente.agregarMascota('Sol', 'Gato', 'Hembra');
// // // cliente.agregarMascota('Estrella', 'Perro', 'Hembra');
// // // cliente2.agregarMascota('Oshy', 'Perro', 'Macho');
// // // cliente2.agregarMascota('Saky', 'Perro', 'Hembra');
// // // cliente3.agregarMascota('Max', 'Gato', 'Macho');
// // // cliente3.agregarMascota('Bella', 'Perro', 'Hembra');
// // // cliente4.agregarMascota('Rocky', 'Perro', 'Macho');
// // // cliente4.agregarMascota('Lola', 'Gato', 'Hembra');
// // // cliente5.agregarMascota('Toby', 'Perro', 'Macho');
// // // cliente5.agregarMascota('Mia', 'Gato', 'Hembra');

// // // // Mostrar opciones del menú para el cliente
// // // mostrarMenuCliente();

// // // // Función para obtener el próximo día hábil
// // // function obtenerProximoDiaHabil() {
// // //   // Lógica para obtener el próximo día hábil
// // //   // ...
// // // }




// // /////////////////////////////

// // function mostrarMenuCliente() {
// //   let opcion = prompt('Seleccione una opción:\n1. Solicitar turno Veterinario\n2. Agregar mascota\n3. Comprar Productos');
// //   opcion = parseInt(opcion);

// //   switch (opcion) {
// //     case 1:
// //       // Lógica para solicitar turno veterinario
// //       let nombreMascota = prompt('Ingrese el nombre de la mascota:');

// //       // Buscar la mascota en la lista de mascotas del cliente
// //       let clienteLogueado = listaClientes.find(cliente => cliente.nomUsu === usuario);
// //       let mascotasEncontradas = clienteLogueado.mascotas.filter(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

// //       if (mascotasEncontradas.length > 0) {
// //         // La mascota ya existe en la lista del cliente
// //         let horarioTurno = prompt('Ingrese el horario para el turno:');
// //         let fechaTurno = obtenerProximoDiaHabil();

// //         // Agregar el turno a la lista de turnos del cliente
// //         clienteLogueado.agregarTurno(mascotasEncontradas[0].nombre, fechaTurno, horarioTurno);

// //         console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
// //         console.log('Mascotas del usuario:', clienteLogueado.mascotas); // Muestra todas las mascotas del usuario

// //         alert(`Turno solicitado:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
// //       } else {
// //         // La mascota no existe en la lista del cliente
// //         let confirmacion = prompt('La mascota no se encuentra en la lista. ¿Desea agregarla? (S/N)');

// //         if (confirmacion.toLowerCase() === 's') {
// //           let tipoMascota = prompt('Ingrese el tipo de mascota:');
// //           let sexoMascota = prompt('Ingrese el sexo de la mascota:');

// //           // Agregar la mascota a la lista de mascotas del cliente
// //           clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);

// //           let horarioTurno = prompt('Ingrese el horario para el turno:');
// //           let fechaTurno = obtenerProximoDiaHabil();

// //           // Agregar el turno a la lista de turnos del cliente
// //           clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);

// //           console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
// //           console.log('Mascotas del usuario:', clienteLogueado.mascotas); // Muestra todas las mascotas del usuario

// //           alert(`Turno solicitado:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
// //           let agregarMasMascotas = prompt('¿Desea agregar otra mascota? (S/N)');
// //           if (agregarMasMascotas.toLowerCase() === 's') {
// //             cargarMascotas(clienteLogueado);
// //           } else {
// //             alert('Operación finalizada. Volviendo al menú principal...');
// //             mostrarMenuCliente();
// //           }
// //         } else {
// //           alert('No se agregó la mascota. Operación cancelada.');
// //         }
// //       }
// //       break;
// //     case 2:
// //       // Lógica para agregar mascota
// //       cargarMascotas(clienteLogueado);
// //       break;
// //     case 3:
// //       // Lógica para comprar productos
// //       alert('Comprando productos...');
// //       break;
// //     default:
// //       alert('Opción inválida.');
// //       break;
// //   }
// // }



// // function mostrarMenuCliente() {
// //   let opcion = prompt('Seleccione una opción:\n1. Solicitar turno Veterinario\n2. Agregar mascota\n3. Comprar Productos');
// //   opcion = parseInt(opcion);
// //   let clienteLogueado = null;
  
// //   switch (opcion) {
// //     case 1:
// //       // Lógica para solicitar turno veterinario
// //       let nombreMascota = prompt('Ingrese el nombre de la mascota:');
// //       clienteLogueado = listaClientes.find(cliente => cliente.nomUsu === usuario);

// //       // Resto del código...
      
// //       break;
// //     case 2:
// //       // Lógica para agregar mascota
// //       cargarMascotas(clienteLogueado);
// //       break;
// //     case 3:
// //       // Lógica para comprar productos
// //       alert('Comprando productos...');
// //       break;
// //     default:
// //       alert('Opción inválida.');
// //       break;
// //   }
// // }

// // function cargarMascotas(clienteLogueado) {
// //   let agregarMasMascotas = true;

// //   while (agregarMasMascotas) {
// //     let nombreMascota = prompt('Ingrese el nombre de la mascota:');

// //     // Verificar si la mascota ya existe en la lista de mascotas del cliente
// //     let mascotaExistente = clienteLogueado.mascotas.find(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

// //     // Resto del código...
// //   }
// // }

// // Portal de Usuarios
// let listaClientes = []; // Arreglo para almacenar la lista de clientes
// let listaVetes = []; // Arreglo para almacenar la lista de Veterinarios
// let usuario;
// let clienteLogueado = null;
// let clienteEncontrado = null; // Variable global para almacenar el cliente encontrado


// function login() {
//   let tipoUsuario = prompt('Ingrese el tipo de usuario (Cliente/Veterinario):');
//   tipoUsuario = tipoUsuario.toLowerCase();

//   if (tipoUsuario === 'cliente') {
//     usuario = prompt('Ingrese el nombre de usuario:');
//     let contrasenia = prompt('Ingrese la contraseña:');

//     // Verificar los datos del cliente
//     clienteEncontrado = listaClientes.find(cliente => cliente.nomUsu === usuario && cliente.contraUsu === contrasenia);

//     if (clienteEncontrado) {
//       // Login exitoso para el cliente
//       alert('¡Inicio de sesión exitoso para el cliente!');
//       // Mostrar opciones del menú para el cliente
//       mostrarMenuCliente();
//     } else {
//       // Credenciales incorrectas para el cliente
//       alert('Credenciales incorrectas. Por favor, intente nuevamente.');
//     }
//   } else if (tipoUsuario === 'veterinario') {
//     usuario = prompt('Ingrese el nombre de usuario:');
//     let contrasenia = prompt('Ingrese la contraseña:');

//     // Verificar los datos del veterinario
//     let veterinarioEncontrado = listaVetes.find(veterinario => veterinario.nomVet === usuario && veterinario.contraVet === contrasenia);

//     if (veterinarioEncontrado) {
//       // Login exitoso para el veterinario
//       alert('¡Inicio de sesión exitoso para el veterinario!');
//       // Mostrar opciones del menú para el veterinario
//       mostrarMenuVeterinario();
//     } else {
//       // Credenciales incorrectas para el veterinario
//       alert('Credenciales incorrectas. Por favor, intente nuevamente.');
//     }
//   } else {
//     // Tipo de usuario inválido
//     alert('Tipo de usuario inválido. Por favor, ingrese "Cliente" o "Veterinario".');
//   }
// }

// function cargarMascotas() {
//   let agregarMasMascotas = true;

//   while (agregarMasMascotas) {
//     let nombreMascota = prompt('Ingrese el nombre de la mascota:');
  
//     // Verificar si la mascota ya existe en la lista de mascotas del cliente
//     let mascotaExistente = clienteLogueado.mascotas.find(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());
  
//     if (mascotaExistente) {
//       alert('La mascota ya existe en la lista.');
//     } else {
//       let tipoMascota = prompt('Ingrese el tipo de mascota:');
//       let sexoMascota = prompt('Ingrese el sexo de la mascota:');
  
//       // Agregar la mascota a la lista de mascotas del cliente
//       clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);

//       console.log('Mascota agregada:', clienteLogueado.mascotas[clienteLogueado.mascotas.length - 1]); // Muestra la última mascota agregada

//       let continuar = prompt('¿Desea agregar otra mascota? (S/N)');
//       if (continuar.toLowerCase() === 's') {
//         agregarMasMascotas = true;
//       } else {
//         agregarMasMascotas = false;
//         alert('Operación finalizada. Volviendo al menú principal...');
//         mostrarMenuCliente(); // Volver al menú del cliente
//       }
//     }
//   }
// }

// function mostrarMenuCliente() {
//   let opcion = prompt('Seleccione una opción:\n1. Solicitar turno Veterinario\n2. Agregar mascota\n3. Comprar Productos');
//   opcion = parseInt(opcion);
//   clienteLogueado = clienteEncontrado;

//   switch (opcion) {
//     case 1:
//       // Lógica para solicitar turno veterinario
//       let nombreMascota = prompt('Ingrese el nombre de la mascota:');
//       clienteLogueado = listaClientes.find(cliente => cliente.nomUsu === usuario);

//       // Buscar la mascota en la lista de mascotas del cliente
//       let mascotasEncontradas = clienteLogueado.mascotas.filter(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

//       if (mascotasEncontradas.length > 0) {
//         // La mascota ya existe en la lista del cliente
//         let horarioTurno = prompt('Ingrese el horario para el turno:');
//         let fechaTurno = obtenerProximoDiaHabil();

//         // Agregar el turno a la lista de turnos del cliente
//         clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);

//         console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
//         console.log('Mascotas del usuario:', clienteLogueado.mascotas); // Muestra todas las mascotas del usuario

//         alert(`Turno solicitado:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
//         alert('Operación finalizada. Volviendo al menú principal...');
//         mostrarMenuCliente(); // Volver al menú del cliente
//       } else {
//         // La mascota no existe en la lista del cliente
//         let confirmacion = prompt('La mascota no se encuentra en la lista. ¿Desea agregarla? (S/N)');

//         if (confirmacion.toLowerCase() === 's') {
//           let tipoMascota = prompt('Ingrese el tipo de mascota:');
//           let sexoMascota = prompt('Ingrese el sexo de la mascota:');

//           // Agregar la mascota a la lista de mascotas del cliente
//           clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);

//           let horarioTurno = prompt('Ingrese el horario para el turno:');
//           let fechaTurno = obtenerProximoDiaHabil();

//           // Agregar el turno a la lista de turnos del cliente
//           clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);

//           console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado
//           console.log('Mascotas del usuario:', clienteLogueado.mascotas); // Muestra todas las mascotas del usuario

//           alert(`Turno solicitado:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
//           let agregarMasMascotas = prompt('¿Desea agregar otra mascota? (S/N)');
//           if (agregarMasMascotas.toLowerCase() === 's') {
//             cargarMascotas();// aca le saque clienteLogueado
//           } else {
//             alert('Operación finalizada. Volviendo al menú principal...');
//             mostrarMenuCliente();
//           }
//         } else {
//           alert('No se agregó la mascota. Operación cancelada.');
//         }
//       }
//       break;
//     case 2:
//       // Lógica para agregar mascota
//       cargarMascotas(clienteLogueado);
//       break;
//     case 3:
//       // Lógica para comprar productos
//       alert('Comprando productos...');
//       break;
//     default:
//       alert('Opción inválida.');
//       break;
//   }
// }

// function mostrarMenuVeterinario() {
//   let opcion = prompt('Seleccione una opción:\n1. Asignar turno veterinario\n2. Agregar Usuario Veterinario\n3. Sumar Stock de nuevos Productos');
//   opcion = parseInt(opcion);

//   switch (opcion) {
//     case 1:
//       // Lógica para asignar turno veterinario
//       cargarTurnosVeterinarios(listaClientes);
//       break;
//     case 2:
//       // Lógica para agregar usuario veterinario
//       alert('Agregando usuario veterinario...');
//       break;
//     case 3:
//       // Lógica para sumar stock de nuevos productos
//       alert('Sumando stock de nuevos productos...');
//       break;
//     default:
//       alert('Opción inválida.');
//       break;
//   }
// }

// class UsuarioClientes {
//   constructor(nombrU, apellidoU, mailDeContactoU, contrasenia) {
//     this.nomUsu = nombrU;
//     this.apeUsu = apellidoU;
// //     this.mailUsu = mailDeContactoU;
// //     this.contraUsu = contrasenia;
// //     this.mascotas = []; // Arreglo para almacenar las mascotas del cliente
// //     this.turnos = []; // Arreglo para almacenar los turnos del cliente
// //   }

// //   agregarMascota(nombreMascota, tipoMascota, sexoMascota) {
// //     const mascota = {
// //       nombre: nombreMascota,
// //       tipo: tipoMascota,
// //       sexo: sexoMascota,
// //     };
// //     this.mascotas.push(mascota);
// //   }

// //   agregarTurno(nombreMascota, fechaTurno, horaTurno) {
// //     const turno = {
// //       apellidoCliente: this.apeUsu,
// //       nombreMascota: nombreMascota,
// //       fechaTurno: fechaTurno,
// //       horaTurno: horaTurno,
// //     };
// //     this.turnos.push(turno);
// //   }
// // }

// // // ...resto del código...

// // // Función para cargar turnos veterinarios
// // function cargarTurnosVeterinarios(listaClientes) {
// //   let apellidoCliente = prompt('Ingrese el apellido del cliente: ');
// //   let clienteEncontrado = buscarClientePorApellido(listaClientes, apellidoCliente);

// //   if (clienteEncontrado) {
// //     let continuarCarga = true;
// //     while (continuarCarga) {
// //       let nombreMascota = prompt('Ingrese el nombre de la mascota: ');
// //       let mascotaEncontrada = clienteEncontrado.mascotas.find(mascota => mascota.nombre === nombreMascota);

// //       if (mascotaEncontrada) {
// //         let fechaTurno = obtenerProximoDiaHabil();
// //         let horaTurno = prompt('Ingrese la hora del turno: ');

// //         clienteEncontrado.agregarTurno(nombreMascota, fechaTurno, horaTurno);
// //         alert(`Turno agregado correctamente para el ${fechaTurno} a las ${horaTurno}.`);

// //         let seguirCargando = prompt('¿Desea cargar otro turno? (s/n): ');
// //         if (seguirCargando.toLowerCase() !== 's') {
// //           continuarCarga = false;
// //         }
// //       } else {
// //         let cargarMascota = prompt('La mascota no se encuentra en la lista del cliente. ¿Desea cargarla? (s/n): ');/// 
// //         if (cargarMascota.toLowerCase() === 's') {
// //           let tipoMascota = prompt('Ingrese el tipo de mascota: ');
// //           let sexoMascota = prompt('Ingrese el sexo de la mascota: ');

// //           clienteEncontrado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);
// //           console.log('Mascota cargada correctamente.');
// //         } else {
// //           console.log('No se pudo cargar el turno porque la mascota no está en la lista del cliente.');
// //         }
// //       }
// //     }
// //   } else {
// //     console.log('No se encontró al cliente con el apellido ingresado.');
// //   }
// // }

// // // ...resto del código...

// // login();







// function cargarTurnosVeterinarios() {
//   let apellidoCliente = prompt('Ingrese el apellido del cliente: ');
//   let clienteEncontrado = buscarClientePorApellido(listaClientes, apellidoCliente);

//   if (clienteEncontrado) {
//     let continuarCarga = true;
//     while (continuarCarga) {
//       let nombreMascota = prompt('Ingrese el nombre de la mascota: ');
//       let mascotaEncontrada = clienteEncontrado.mascotas.find(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

//       if (mascotaEncontrada) {
//         let fechaTurno = obtenerProximoDiaHabil();
//         let horaTurno = prompt('Ingrese la hora del turno: ');

//         clienteEncontrado.agregarTurno(nombreMascota, fechaTurno, horaTurno);
//         alert(`Turno agregado correctamente para el ${fechaTurno} a las ${horaTurno}.`);

//         let seguirCargando = prompt('¿Desea cargar otro turno? (s/n): ');
//         if (seguirCargando.toLowerCase() !== 's') {
//           continuarCarga = false;
//         }
//       } else {
//         let cargarMascota = prompt('La mascota no se encuentra en la lista del cliente. ¿Desea cargarla? (s/n): ');
//         if (cargarMascota.toLowerCase() === 's') {
//           let tipoMascota = prompt('Ingrese el tipo de mascota: ');
//           let sexoMascota = prompt('Ingrese el sexo de la mascota: ');

//           clienteEncontrado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);
//           console.log('Mascota cargada correctamente.');

//           let fechaTurno = obtenerProximoDiaHabil();
//           let horaTurno = prompt('Ingrese la hora del turno: ');

//           clienteEncontrado.agregarTurno(nombreMascota, fechaTurno, horaTurno);
//           alert(`Turno agregado correctamente para el ${fechaTurno} a las ${horaTurno}.`);

//           let seguirCargando = prompt('¿Desea cargar otro turno? (s/n): ');
//           if (seguirCargando.toLowerCase() !== 's') {
//             continuarCarga = false;
//           }
//         } else {
//           console.log('No se pudo cargar el turno porque la mascota no está en la lista del cliente.');
//         }
//       }
//     }
//     mostrarMenuVeterinario();
//   } else {
// //     console.log('No se encontró al cliente con el apellido ingresado.');
// //   }
// // }
// function mostrarTurnosVeterinarios() {
//   let turnosVeterinarios = [];
//   for (let cliente of listaClientes) {
//     turnosVeterinarios = turnosVeterinarios.concat(cliente.turnos);
//   }
//   // Ordenar los turnos por hora (ascendente)
//   turnosVeterinarios.sort((a, b) => a.horaTurno.localeCompare(b.horaTurno));

//   if (turnosVeterinarios.length > 0) {
//     console.log('Lista de turnos veterinarios:');
//     let alertMessage = 'Lista de turnos veterinarios:\n\n';

//     for (let turno of turnosVeterinarios) {
//       alertMessage += `Cliente: ${turno.apellidoCliente}\nMascota: ${turno.nombreMascota}\nFecha: ${turno.fechaTurno}\nHora: ${turno.horaTurno}\n\n`;
//     }

//     alert(alertMessage);

//     // Volver al menú anterior
//     if (usuario === 'cliente') {
//       mostrarMenuCliente();
//     } else if (usuario === 'veterinario') {
//       mostrarMenuVeterinario();
//     }
//   } else {
//     alert('No hay turnos veterinarios registrados.');
//     console.log('No hay turnos veterinarios registrados.');

//     // Volver al menú anterior
//     if (usuario === 'cliente') {
//       mostrarMenuCliente();
//     } else if (usuario === 'veterinario') {
//       mostrarMenuVeterinario();
//     }
// // //   }
// // // }



// //         // Mostrar mensaje por consola con los datos de las mascotas del cliente
// //         console.log(`Datos de las mascotas del cliente ${clienteLogueado.nomUsu}:`);
// //         clienteLogueado.mascotas.sort((a, b) => a.nombre.localeCompare(b.nombre));
// //         for (let mascota of clienteLogueado.mascotas) {
// //           const nombreCapitalizado = mascota.nombre.charAt(0).toUpperCase() + mascota.nombre.slice(1).toLowerCase();
// //           const tipoCapitalizado = mascota.tipo.charAt(0).toUpperCase() + mascota.tipo.slice(1).toLowerCase();
// //           const sexoCapitalizado = mascota.sexo.charAt(0).toUpperCase() + mascota.sexo.slice(1).toLowerCase();
// //           console.log(`Nombre: ${nombreCapitalizado}, Tipo: ${tipoCapitalizado}, Sexo: ${sexoCapitalizado}`);
// //         }

// // Portal de Usuarios
// let listaClientes = []; // Arreglo para almacenar la lista de clientes
// let listaVetes = []; // Arreglo para almacenar la lista de Veterinarios
// let clienteLogueado = null;
// let clienteEncontrado = null; // Variable global para almacenar el cliente encontrado

// function login() {
//   let tipoUsuario = prompt('Ingrese el tipo de usuario (Cliente/Veterinario):');
//   tipoUsuario = tipoUsuario.toLowerCase();

//   if (tipoUsuario === 'cliente') {
//     let usuario = prompt('Ingrese el nombre de usuario:');
//     let contrasenia = prompt('Ingrese la contraseña:');

//     // Verificar los datos del cliente
//     clienteEncontrado = listaClientes.find(cliente => cliente.nomUsu === usuario && cliente.contraUsu === contrasenia);

//     if (clienteEncontrado) {
//       // Login exitoso para el cliente
//       alert('¡Inicio de sesión exitoso para el cliente!');
//       // Mostrar opciones del menú para el cliente
//       mostrarMenuCliente();
//     } else {
//       // Credenciales incorrectas para el cliente
//       alert('Credenciales incorrectas. Por favor, intente nuevamente.');
//       login();
//     }
//   } else if (tipoUsuario === 'veterinario') {
//     let usuario = prompt('Ingrese el nombre de usuario:');
//     let contrasenia = prompt('Ingrese la contraseña:');

//     // Verificar los datos del veterinario
//     let veterinarioEncontrado = listaVetes.find(veterinario => veterinario.nomVet === usuario && veterinario.contraVet === contrasenia);

//     if (veterinarioEncontrado) {
//       // Login exitoso para el veterinario
//       alert('¡Inicio de sesión exitoso para el veterinario!');
//       // Mostrar opciones del menú para el veterinario
//       mostrarMenuVeterinario();
//     } else {
//       // Credenciales incorrectas para el veterinario
//       alert('Credenciales incorrectas. Por favor, intente nuevamente.');
//       login();
//     }
//   } else {
//     // Tipo de usuario inválido
//     alert('Tipo de usuario inválido. Por favor, ingrese "Cliente" o "Veterinario".');
//     login();
//   }
// }

// function mostrarMenuCliente() {
//   clienteLogueado = clienteEncontrado;
//   let opcion = prompt(`-- Menú Cliente --\nTe damos la bienvenida ${clienteLogueado.nomUsu}\n\nSeleccione una opción:\n1. Solicitar turno veterinario\n2. Agregar mascota\n3. Comprar productos\n4. Mis turnos\n5. Cerrar sesión`);
//   opcion = parseInt(opcion);

//   switch (opcion) {
//     case 1:
//       // Lógica para solicitar turno veterinario
//       solicitarTurnoVeterinario();
//       break;
//     case 2:
//       // Lógica para agregar mascota
//       agregarMascota();
//       break;
//     case 3:
//       // Lógica para comprar productos
//       comprarProductos();
//       break;
//     case 4:
//       // Lógica para ver mis turnos
//       verMisTurnos();
//       break;
//     case 5:
//       // Cerrar sesión
//       alert('¡Hasta pronto!');
//       login();
//       break;
//     default:
//       alert('Opción inválida. Por favor, seleccione una opción válida.');
//       mostrarMenuCliente();
//       break;
//   }
// }

// function agregarMascota() {
//   let nombreMascota = prompt('Ingrese el nombre de la mascota:');
//   let tipoMascota = prompt('Ingrese el tipo de mascota:');
//   let sexoMascota = prompt('Ingrese el sexo de la mascota:');

//   clienteLogueado.agregarMascota(nombreMascota, tipoMascota, sexoMascota);

//   console.log('Mascota agregada:', clienteLogueado.mascotas[clienteLogueado.mascotas.length - 1]); // Muestra la última mascota agregada

//   let continuar = prompt('¿Desea agregar otra mascota? (S/N)');
//   if (continuar.toLowerCase() === 's') {
//     agregarMascota();
//   } else {
//     alert('Operación finalizada. Volviendo al menú principal...');
//     mostrarMenuCliente();
//   }
// }

// function solicitarTurnoVeterinario() {
//   let nombreMascota = prompt('Ingrese el nombre de la mascota:');
//   let mascotaEncontrada = clienteLogueado.mascotas.find(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

//   if (mascotaEncontrada) {
//     let horarioTurno = prompt('Ingrese el horario para el turno (entre las 10 y las 18hs):');
//     let fechaTurno = obtenerProximoDiaHabil();

//     clienteLogueado.agregarTurno(nombreMascota, fechaTurno, horarioTurno);

//     console.log('Turno nuevo:', clienteLogueado.turnos[clienteLogueado.turnos.length - 1]); // Muestra el último turno agregado

//     alert(`Turno solicitado para ${clienteLogueado.nomUsu}:\nMascota: ${nombreMascota}\nFecha: ${fechaTurno}\nHorario: ${horarioTurno}`);
//     alert('Operación finalizada. Volviendo al menú principal...');
//     mostrarMenuCliente(); // Volver al menú del cliente
//   } else {
//     let confirmacion = prompt('La mascota no se encuentra en la lista. ¿Desea agregarla? (S/N)');

//     if (confirmacion.toLowerCase() === 's') {
//       agregarMascota();
//     } else {
//       alert('No se agregó la mascota. Operación cancelada.');
//       mostrarMenuCliente();
//     }
//   }
// }

// function comprarProductos() {
//   alert('Comprando productos...');
//   // Lógica para comprar productos (en desarrollo)
//   mostrarMenuCliente();
// }

// function verMisTurnos() {
//   console.log(`Mis turnos:`);
//   for (let turno of clienteLogueado.turnos) {
//     console.log(`Mascota: ${turno.nombreMascota}, Fecha: ${turno.fechaTurno}, Hora: ${turno.horaTurno}`);
//   }
//   mostrarMenuCliente();
// }

// class UsuarioCliente {
//   constructor(nomUsu, apeUsu, mailUsu, contraUsu) {
//     this.nomUsu = nomUsu;
//     this.apeUsu = apeUsu;
//     this.mailUsu = mailUsu;
//     this.contraUsu = contraUsu;
//     this.mascotas = []; // Arreglo para almacenar las mascotas del cliente
//     this.turnos = []; // Arreglo para almacenar los turnos del cliente
//   }

//   agregarMascota(nombreMascota, tipoMascota, sexoMascota) {
//     const mascota = {
//       nombre: nombreMascota,
//       tipo: tipoMascota,
//       sexo: sexoMascota,
//     };
//     this.mascotas.push(mascota);
//   }

//   agregarTurno(nombreMascota, fechaTurno, horaTurno) {
//     const turno = {
//       apellidoCliente: this.apeUsu,
//       nombreMascota: nombreMascota,
//       fechaTurno: fechaTurno,
//       horaTurno: horaTurno,
//     };
//     this.turnos.push(turno);
//   }
// }


// Portal de Usuarios
let listaClientes = [];
let listaVetes = [];
let clienteLogueado = null;

function login() {
  let tipoUsuario = prompt('Ingrese el tipo de usuario (Cliente/Veterinario):');
  tipoUsuario = tipoUsuario.toLowerCase();

  if (tipoUsuario === 'cliente') {
    clienteLogueado = loginCliente();
    if (clienteLogueado) {
      alert('¡Inicio de sesión exitoso para el cliente 🐾!');
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
      alert('Credenciales incorrectas. Por favor, intente nuevamente 😢.');
      login();
    }
  } else {
    alert('Tipo de usuario inválido. Por favor, ingrese "Cliente" o "Veterinario" 😢.');
  }
}

// function loginCliente() {
//   let usuario = prompt('Ingrese el nombre de usuario 🐾:');
//   let contrasenia = prompt('Ingrese la contraseña:');
//   return listaClientes.find(cliente => cliente.nomUsu === usuario && cliente.contraUsu === contrasenia);
// }

// function loginVeterinario() {
//   let usuario = prompt('Ingrese el nombre de usuario:');
//   let contrasenia = prompt('Ingrese la contraseña:');
//   return listaVetes.find(veterinario => veterinario.nomVet === usuario && veterinario.contraVet === contrasenia);
// }

function mostrarMenuCliente() {
  let opcion = prompt('-- Menú Cliente --\n Te damos la bienvenida 🐾 ' + clienteLogueado.nomUsu + '\n\n Seleccione una opción:\n1. Solicitar turno Veterinario\n2. Agregar mascota\n3. Comprar Productos\n4.Mis Turnos\n5. Log Out');
  opcion = parseInt(opcion);

  switch (opcion) {
    case 1:
      // Lógica para solicitar turno veterinario
      cargarTurnoVeterinario();
      break;
    case 2:
      // Lógica para agregar mascota
      cargarMascota();
      break;
    case 3:
      // Lógica para comprar productos
      alert('Comprando productos...');
      // En Desarrollo
      break;
    case 4:
      // Lógica para Mis Turnos
      alert('Accediendo a Mis Turnos...');
      mostrarTurnosVeterinarios();
      break;
    case 5:
      // LogOut
      alert('Hasta Pronto...');
      login();
      break;
    default:
      alert('Opción inválida.');
      mostrarMenuCliente();
      break;
  }
}

function cargarTurnoVeterinario() {
  // Lógica para cargar turno veterinario
  let nombreMascota = prompt('Ingrese el nombre de la mascota:');
  // Resto del código
}

function cargarMascota() {
  // Lógica para agregar mascota
  let nombreMascota = prompt('Ingrese el nombre de la mascota:');
  // Resto del código
}

function mostrarTurnosVeterinarios() {
  // Lógica para mostrar turnos veterinarios
  let turnosVeterinarios = [];
  // Resto del código
}

function mostrarMenuVeterinario() {
  let opcion = prompt('-- Menú Veterinario --\n\n Seleccione una opción:\n1. Asignar turno veterinario\n2. Agregar Usuario Veterinario\n3. Enviar Pedido a Proveedor\n4. Ver agenda de Turnos\n5. LogOut');
  opcion = parseInt(opcion);

  switch (opcion) {
    case 1:
      // Lógica para asignar turno veterinario
      cargarTurnoVeterinario();
      break;
    case 2:
      // Lógica para agregar usuario veterinario
      agregarUsuarioVeterinario();
      break;
    case 3:
      // Hacer pedido al Mayorista
      enviarPedidoProveedor();
      break;
    case 4:
      // Lógica para ver turnos Veterinarios
      mostrarTurnosVeterinarios();
      break;
    case 5:
      // LogOut
      alert('Hasta Pronto...');
      login();
      break;
    default:
      alert('Opción inválida.');
      mostrarMenuVeterinario();
      break;
  }
}

function agregarUsuarioVeterinario() {
  // Lógica para agregar usuario veterinario
  let nombreVeterinario = prompt('Ingrese el nombre del nuevo veterinario:');
  // Resto del código
}

// Resto del código...

login();
