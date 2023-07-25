console.log("Bienvenido clase 10 - EVENTOS")

// Eventos

// Eventos

// Ejemplo 1: addEventListener
function Ejemplo1() {
  function respuestaClick() {
    console.log('Respuesta evento');
  }

  let boton = document.getElementById('btn1');
  boton.addEventListener('click', respuestaClick);
}

// Ejemplo 2
function Ejemplo2() {
  let boton = document.getElementById('btn1');
  boton.addEventListener('click', () => {
    alert('Hola!');
  });
}

// Ejemplo 3: onclick
function Ejemplo3() {
  let boton = document.getElementById('btn1');
  boton.onclick = () => alert('Hola coders!');
}

// Ejemplo 4 --> Esta directamente en el HTML

// Ejemplo 5: Agregar Productos.
function Ejemplo5() {
  let boton = document.getElementById('ejemplo5');
  let productos = [
    {
      nombre: 'Coca Cola',
      precio: 100,
    },
    {
      nombre: 'Pepsi',
      precio: 90,
    },
    {
      nombre: 'Manaos',
      precio: 80,
    }
  ];
  boton.onclick = () => {
    for (const producto of productos) {
      let container = document.createElement('div');
      container.innerHTML = `<h3>Nombre: ${producto.nombre}</h3>
                                  <p>Precio: ${producto.precio}</p>`;
      document.body.append(container);
    }
  };
}


// Ejemplo 6: eventos del mouse
function Ejemplo6() {
  let boton = document.getElementById('ejemplo6');
  // boton.onmousedown = () => console.log('Mouse down');
  boton.onmouseup = () => console.log('Mouse up');
  // boton.onmouseover = () => console.log('Mouse over');
  // boton.onmouseout = () => console.log('Mouse out');
  // boton.onmousemove = () => console.log('Mouse move');
}

// Ejemplo 7: eventos del teclado
function Ejemplo7() {
  let input = document.getElementById('ejemplo7');
  input.onkeydown = () => console.log('Key down');
}

// Ejemplo 8
function Ejemplo8() {
  let input = document.getElementById('ejemplo7');
  let parrafo = document.getElementById('p7');
  input.onkeyup = () => {
    parrafo.innerHTML = input.value;
  };
}


// Ejemplo 9: onchange
function Ejemplo9() {
  let input = document.getElementById('ejemplo7');

  input.onchange = (evento) => {
    console.log(evento.target.value);
  };
}


// Ejemplo 10: evento input
function Ejemplo10() {
  let input = document.getElementById('ejemplo7');
  let parrafo = document.getElementById('p7');
  input.oninput = () => {
    parrafo.innerHTML = input.value;
  };
}


// ******* EJERCITACIÓN *******// 

//// Ejercitación 1:
//// Crear un elemento de html que tenga un contador con un número y arranque en 0.
//// Crear un botón que cada vez que se aprieta, el contador suma 1
//// Extra (opcional): Crear un segundo botón, que cada vez que se aprieta, resta 1 al contador

// Tip: Recuerden que para convertir un string en número podemos usar la función parseInt :)
//  https://docs.google.com/presentation/d/1G6SOcbI3W6RXGM5dWPq_3BtZvTI5xjdTcFMxptFAXRM/edit#slide=id.g257d4274100_0_0

// Ejercicio 1
function Ejercicio1() {
  let contador = document.getElementById('contador')
  let botonSuma = document.getElementById('sumar')
  let botonResta = document.getElementById('restar')

  botonSuma.onclick = () => {
    let nuevoValor = parseInt(contador.innerText) + 1
    contador.innerText = nuevoValor
  }

  botonResta.onclick = () => {
    let nuevoValor = parseInt(contador.innerText) - 1
    contador.innerText = nuevoValor
  }
}

function Ejercicio2() {
  let botonSumar = document.getElementById("sumar");
  let botonRestar = document.getElementById("restar");

  botonSumar.onclick = () => {
    let contenedor = document.getElementById("resultado");
    let resultado = parseInt(contenedor.innerHTML) + 1;
    contenedor.innerHTML = resultado;
  };

  botonRestar.onclick = () => {
    let contenedor = document.getElementById("resultado");
    let resultado = parseInt(contenedor.innerHTML) - 1;
    contenedor.innerHTML = resultado;
  };
}



// Ejemplo 11: submit
function Ejemplo11() {
  let miFormulario = document.getElementById('formulario');
  miFormulario.onsubmit = (e) => {
    e.preventDefault();
    console.log('Formulario Enviado');
  }
}

// Ejemplo 12: submit Con Target.Children 
function Ejemplo12() {
  let miFormulario = document.getElementById('formulario');
  miFormulario.onsubmit = (e) => {
    e.preventDefault();
    console.log(e.target.children)
    console.log(e.target.children[0].value)
    console.log(e.target.children[1].value)
  }
}


// ******* EJERCITACIÓN *******// 

//// Ejercitación 2:
// Crear un formulario para que el usuario llene con su información: nombre, apellido, edad y dirección
// Cuando el usuario apreta click en enviar, se debe agregar un div que posea toda la información del usuario y se le informe al usuario que la información fue agregada a la base de datos

function Ejercicio2() {
  let formulario = document.getElementById('formulario2');
  formulario.onsubmit = (evento) => {
    evento.preventDefault();

    let informacion = document.createElement('div');
    informacion.innerHTML = `
        <p>Nombre: ${evento.target.children[0].value} </p>
        <p>Apellido: ${evento.target.children[1].value}</p>
        <p>Edad: ${evento.target.children[2].value} </p>
        <p>Direccion: ${evento.target.children[3].value}</p>`;

    document.body.append(informacion);

    console.log(document.body.append(informacion));
  };
}


// ******* EJERCITACIÓN  *******//

// Ejercitación 3:  (HACER TIENE TODO LO VISTO EN TODAS LAS CLASES de 1 a 10) Si lo pueden realizar estan muy bien parados!!.
//  https://docs.google.com/presentation/d/1G6SOcbI3W6RXGM5dWPq_3BtZvTI5xjdTcFMxptFAXRM/edit#slide=id.g252b604880e_0_0
//  Crear un botón que al apretarlo, muestre en html el producto ingresado por los inputs
//  Se debe poder seguir creando productos luego de crear el primero, se deben agregar abajo del primer producto cuando se vuelva a presionar el botón para agregar
//  Extra (opcional): Mostrar también el precio con iva



// ****** CODER ALERT --> Se sugiere hacer estas actividades **** //
// https://docs.google.com/presentation/d/1JKDzZ4aNnqyTfZENxEvtHN-nbex-aOoL7wwH3BmsxyI/edit#slide=id.g138399dea8c_2_4