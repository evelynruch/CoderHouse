// // // let opcionCliente = prompt('Seleccione una opción:\n1. Nuevo cliente\n2. Cliente existente\n3. Buscar cliente en lista');

// // // if (opcionCliente === '1') {
// // //   // Nuevo cliente
// // //   let apellido = prompt('Ingrese el apellido: ');
// // //   let nombreMascota = prompt('Nombre Mascota: ');
// // //   let tipo = prompt('Especie/Tipo: ');
// // //   let sexo = prompt('Sexo: ');
// // //   let mailDeContacto = prompt('Ingrese mail de Contacto para enviar recordatorio: ');

// // //   let cliente = new Cliente(apellido, nombreMascota, tipo, sexo, mailDeContacto);
// // //   arrayClientes.push(cliente);

// // //   // Agregar turno para el nuevo cliente
// // //   agregarTurno(cliente);
// // // } else if (opcionCliente === '2') {
// // //   // Cliente existente
// // // let loginCliente = prompt('Ingrese el nombre de usuario del cliente: ');
// // // // CONTINUAR EL CODIGO

// // // } else if (opcionCliente === '3') {
// // //   // Buscar cliente en lista
// // //   let apellidoCliente = prompt('Ingrese el apellido del cliente a buscar: ');
// // //   let clienteEncontrado = buscarCliente(arrayClientes, apellidoCliente);
// // //   if (clienteEncontrado) {
// // //     console.log('Cliente encontrado:', clienteEncontrado);
// // //     // Agregar turno para el cliente encontrado
// // //     agregarTurno(clienteEncontrado);
// // //   } else {
// // //     console.log('Cliente no encontrado');
// // //     // Aquí puedes agregar código adicional para manejar el caso de cliente no encontrado
// // //   }
// // // } else {
// // //   console.log('Opción inválida');
// // //   // Aquí puedes agregar código adicional para manejar el caso de opción inválida
// // // }

// // // function agregarTurno(cliente) {
// // //   // Aquí puedes agregar el código para agregar un turno para el cliente seleccionado
// // //   // Puedes utilizar el código previo que te proporcioné para agregar los turnos a un array y mostrarlos
// // // }




// // //     // Función para mostrar los turnos agendados
// // //     function mostrarTurnosAgendados() {
// // //         let turnosMensaje = 'Turnos agendados:\n';
// // //         for (let i = 0; i < arrayTurnos.length; i++) {
// // //             let turno = arrayTurnos[i];
// // //             turnosMensaje += `Cliente: ${turno.cliente.apellido}, Mascota: ${turno.cliente.nombreMascota}, Fecha: ${turno.fecha}\n`;
// // //         }
// // //         alert(turnosMensaje);
// // //     }

// // //     mostrarTurnosAgendados();
// // //     break;





// // function agregarTurno(clienteEncontrado) {
// //     let mascotas = clienteEncontrado.mascotas;

// //     if (mascotas.length === 1) {
// //         // Si el cliente tiene solo una mascota
// //         let mascotaUnica = mascotas[0];
// //         console.log(`El cliente tiene una mascota: ${mascotaUnica.nombre}`);

// //         let respuesta = prompt('¿Desea agendar un turno para esta mascota? (si/no)').toLowerCase();
// //         if (respuesta === 'si') {
// //             // Agendar turno para la única mascota del cliente
// //             let nuevoTurno = {
// //                 cliente: clienteEncontrado,
// //                 mascota: mascotaUnica,
// //                 fecha: obtenerProximoDiaHabil(),
// //                 hora: '10am'
// //             };

// //             arrayTurnos.push(nuevoTurno);

// //             console.log('Turno agregado exitosamente');
// //         } else if (respuesta !== 'no') {
// //             console.log('Respuesta inválida. Por favor, ingrese "si" o "no".');
// //         }
// //     } else if (mascotas.length > 1) {
// //         // Si el cliente tiene más de una mascota
// //         console.log('El cliente tiene las siguientes mascotas:');
// //         mascotas.forEach((mascota, index) => {
// //             console.log(`${index + 1}. ${mascota.nombre}`);
// //         });

// //         let indiceMascota = parseInt(prompt('Seleccione la mascota para agendar el turno (ingrese el número):'));
// //         if (indiceMascota >= 1 && indiceMascota <= mascotas.length) {
// //             let mascotaSeleccionada = mascotas[indiceMascota - 1];

// //             // Agendar turno para la mascota seleccionada
// //             let nuevoTurno = {
// //                 cliente: clienteEncontrado,
// //                 mascota: mascotaSeleccionada,
// //                 fecha: obtenerProximoDiaHabil(),
// //                 hora: '10am'
// //             };

// //             arrayTurnos.push(nuevoTurno);

// //             console.log('Turno agregado exitosamente');
// //         } else {
// //             console.log('Índice de mascota inválido');
// //         }
// //     } else {
// //         console.log('El cliente no tiene mascotas registradas');
// //     }
// // }

// // function obtenerProximoDiaHabil() {
// //     // Lógica para obtener el próximo día hábil (puede variar según tus necesidades)
// //     let fechaActual = new Date();
// //     let diaSemana = fechaActual.getDay();
// //     let diasAgregados = 0;

// //     // 0 = Domingo, 6 = Sábado
// //     if (diaSemana === 5) {
// //         // Si es viernes, se agrega 3 días para llegar al próximo martes (día hábil)
// //         diasAgregados = 3;
// //     } else if (diaSemana === 6) {
// //         // Si es sábado, se agrega 2 días para llegar al próximo martes (día hábil)
// //         diasAgregados = 2;
// //     } else {
// //         // Para los demás días, se agrega 1 día para llegar al próximo día hábil (martes)
// //         diasAgregados = 1;
// //     }

// //     fechaActual.setDate(fechaActual.getDate() + diasAgregados);

// //     let dia = fechaActual.getDate();
// //     let mes = fechaActual.getMonth() + 1; // Sumar 1 porque los meses van de 0 a 11
// //     let anio = fechaActual.getFullYear();

// //     return `${dia}/${mes}/${anio}`;
// // }



// // class UsuarioClientes {
// //     // ...

// //     establecerContrasenia(contrasenia) {
// //       this.contraUsu = contrasenia;
// //     }

// //     // ...
// //   }




//   // Tu código aquí (con las correcciones)




//   // Tu código aquí (con las correcciones)

// // ...

// // Aquí ya estaría bien el resto del código

// function mostrarDetallesCompra() {
//     // ...
//     let opcionElegida = prompt('Ingrese el número deseado:\n1. Ver Total a Pagar (Sin IVA)\n2. Ver Total a Pagar (Con IVA)\n3. Ver Total Financiado a 30 días con una tasa del 9%');

//     switch (opcionElegida) {
//         case '1':
//             alert(`Total a pagar (Sin IVA): $${totalSinIva.toFixed(2)}`);
//             break;
//         case '2':
//             alert(`Total a pagar (Con IVA): $${totalConIva.toFixed(2)}`);
//             break;
//         case '3':
//             alert(`Total Financiado a 30 días con una tasa del 9%: $${totalFinanciado.toFixed(2)}`);
//             break;
//         default:
//             // Si no es ninguna opción válida, mostramos los detalles de la compra nuevamente
//             mostrarDetallesCompra();
//             break;
//     }
// }

// // ...

// let continuarAgendandoTurnos = true;
// while (continuarAgendandoTurnos) {
//     let opcionCliente = prompt('Seleccione una opción:\n1. Nuevo cliente\n2. Cliente existente\n3. Buscar cliente en lista');
//     switch (opcionCliente) {
//         case '1':
//             // ... (Código para crear nuevo cliente)
//             break;
//         case '2':
//             // ... (Código para buscar cliente existente y agregar turno)
//             break;
//         case '3':
//             // ... (Código para buscar cliente en lista)
//             break;
//         default:
//             // Opción inválida
//             console.log('Opción inválida');
//             break;
//     }
//     // ... (Código para verificar si se desea agregar más turnos o salir)
// }

// // ...

// // Tu código aquí (sin los comentarios)



// Función para cargar mascotas a un cliente
function cargarMascotas(cliente, cantidadMascotas) {
    for (let i = 0; i < cantidadMascotas; i++) {
        let nombreMascota = prompt('Ingrese el nombre de la mascota: ');
        let tipoMascota = prompt('Ingrese el tipo de mascota: ');
        let sexoMascota = prompt('Ingrese el sexo de la mascota: ');

        cliente.agregarMascota(nombreMascota, tipoMascota, sexoMascota);
        console.log('Mascota cargada correctamente.');
    }
}

// Buscar al cliente ingresado en la lista de usuarios
let clienteEncontrado = buscarUsuario(clientesUsers, login, passLogin);

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
                // Código para ver datos de las mascotas
                break;

            case '2':
                // Código para agendar turno
                break;

            case '3':
                let cantidadMascotas = parseInt(prompt('Ingrese la cantidad de mascotas a cargar: '));
                cargarMascotas(clienteEncontrado, cantidadMascotas);
                break;

            case '4':
                console.log('Sesión finalizada.');
                ingresoExitoso = true;
                break;

            default:
                console.log('Opción inválida. Por favor, intente nuevamente.');
                break;
        }
    }
}
