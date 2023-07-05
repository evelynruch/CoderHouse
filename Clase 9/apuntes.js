// DOM

// Ejemplo 1: getElementById

function Ejemplo1() {
    let div = document.getElementById('ejemplo1');
    let parrafo = document.getElementById('parrafo1');
    console.log(div);
    console.log(div.innerHTML); // Muestra el contenido html del <div> en tipo string
    console.log(parrafo.innerHTML);
    console.log(parrafo.innerText); // Muestra el texto del <p>, en este caso coincide con el innerHTML porque el <p> solo tiene texto dentro
}

// Ejemplo 2: modificar el contenido de un elemento
function Ejemplo2() {
    let parrafo = document.getElementById('parrafo1');
    parrafo.innerText = 'Hola Coders';
    console.log(parrafo.innerText);
    console.log(parrafo.innerHTML);
}

// Ejemplo 3

function Ejemplo3() {
    let parrafo = document.getElementById('parrafo1');
    parrafo.innerHTML = 'Hola Coders, como estan?';
    console.log(parrafo.innerText);
    console.log(parrafo.innerHTML);
}

// HTML
// <div id="ejemplo4">
//       <p class="parrafo">Como estan?</p>
//       <p class="parrafo">Les gusta la clase?</p>
//     </div>

// Ejemplo 4: getElementsByClass

function Ejemplo4() {
    let parrafos = document.getElementsByClassName('parrafo');
    console.log(parrafos);
    console.log(parrafos[0].innerHTML);
    console.log(parrafos[1].innerHTML);
}

// Ejemplo 5: getElementsByTagName
function Ejemplo5() {
    let parrafos = document.getElementsByTagName('p');
    console.log(parrafos);
    console.log(parrafos[0].innerHTML);
    console.log(parrafos[1].innerHTML);
    console.log(parrafos[2].innerHTML);
}

// Ejemplo 6
function Ejemplo6() {
    let parrafos = document.getElementsByClassName('parrafo');
    for (const parrafo of parrafos) {
        console.log(parrafo);
    }
}

// Ejemplo 7: modificar class del elemento

function Ejemplo7() {
    let parrafo = document.getElementById('parrafo1');
    parrafo.className = 'parrafo2';
    console.log(parrafo);
}

// Ejemplo 8: Crear nodos/elementos

function Ejemplo8() {
    let contenedor = document.createElement('div');
  
    contenedor.innerHTML = '<h2>Titulo</h2>';
    document.body.append(contenedor);
}

// Ejemplo 9: Remover elementos

function Ejemplo9() {
    let div = document.getElementById('ejemplo4');
    div.remove();
}

{/* <div id="ejemplo10">
      <label>Nombre</label>
      <input id="nombre" type="text">
      <label>Edad</label>
      <input id="edad" type="number">
    </div> */}


// Ejemplo 10: modificar formulario

function Ejemplo10() {
  let nombre = document.getElementById('nombre');
  let edad = document.getElementById('edad');
  nombre.value = 'Juan';
  edad.value = 30;
}

// Ejemplo 11: en cualquier momento podemos obtener el valor actualizado de un input

function Ejemplo11() {
  let nombre = document.getElementById('nombre');
  let edad = document.getElementById('edad');
  console.log(nombre.value);
  console.log(edad.value);
}

{/* <ul id="ejemplo12">
    </ul> */}

// Ejemplo 12: practica

function Ejemplo12() {
  let lista = document.getElementById('ejemplo12');
  let personas = ['HOMERO', 'MARGE', 'BART', 'LISA', 'MAGGIE'];
  for (const persona of personas) {
      let li = document.createElement('li');
      li.innerHTML = persona;
      lista.append(li);
  }
}

// Ejemplo 12: practica

function Ejemplo12() {
  let lista = document.getElementById('ejemplo12');
  let personas = ['HOMERO', 'MARGE', 'BART', 'LISA', 'MAGGIE'];
  for (const persona of personas) {
      let li = document.createElement('li');
      li.innerHTML = persona;
      li.className = 'lista'
      lista.append(li);
  }
}

// Ejemplo 13

function Ejemplo13() {
  let producto = { id: 1, nombre: 'Arroz', precio: 125 };
  let contenedor = document.createElement('div');
  //Definimos el innerHTML del elemento con una plantilla de texto
  contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                          <p>  Producto: ${producto.nombre}</p>
                          <b> Precio: $${producto.precio}</b>`;
  //Agregamos el contenedor creado al body
  document.body.appendChild(contenedor);
}

// Ejemplo 14

function Ejemplo14() {
  let productos = [
      { id: 1, nombre: 'Arroz', precio: 125 },
      { id: 2, nombre: 'Fideo', precio: 70 },
      { id: 3,  nombre: "Pan"  , precio: 50 },
  ];
  for (const producto of productos) {
      let contenedor = document.createElement('div');
      //Definimos el innerHTML del elemento con una plantilla de texto
      contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                              <p> Producto: ${producto.nombre}</p>
                              <b> Precio: $${producto.precio}</b>`;
      //Agregamos el contenedor creado al body
      document.body.appendChild(contenedor);
  }
}

// Crear un algoritmo que:
// Permita al usuario cargar 1 product mediante prompt
// El producto debe tener nombre y precio
// Debemos crear un elemento en html que tenga el nombre utilizando una etiqueta h3
// Además debemos mostrar el precio del producto y el precio con iva

// Ejercicio 1

function Ejercicio1() {
  const producto = prompt('ingrese su producto')
  const precio = parseFloat(prompt('precio'))
  const precioIva = precio * 1.21
  const contenedor = document.createElement('div')

  contenedor.innerHTML = `<h3>Nombre: ${producto}</h3>
                          <p>Precio: $${precio}</p>
                          <p>Precio con IVA: $${precioIva}</p>`
  document.body.appendChild(contenedor)
}

{/* <div id="ejemplo15">
      <p class="texto">Parrafo ejemplo 15</p>
    </div> */}

// Ejemplo 15: querySelector

function Ejemplo15(){
  // puedo seleccionar la etiqueta <p> siguiendo la sintaxis de CSS para selectores:
  let parrafo = document.querySelector("#ejemplo15 p")
  console.log(parrafo)

  // seleccionar sólo el contenedor por id con #
  let contenedor = document.querySelector("#ejemplo15")
  console.log(contenedor)

  // o por clase:
  let p = document.querySelector(".texto")
  console.log(p)
}

// Crear una funcion que:
// Reciba como parametro un array de productos
// Cada producto debe ser un objeto con nombre y precio
// Debemos iterar el array de productos y por cada producto crear un elemento html que muestre su nombre, su precio y su precio con un descuento del 10%

// AYUDA PARA EL EJERCICIO
function ejemplo(array) {
  for (const elemento of array) {
    console.log(elemento)
  }
}
ejemplo([1,2,3])

// Ejercicio 2
function Ejercicio2() {
  function mostrarProductos(productos) {
      for (const producto of productos) {
          let precioDescuento = Math.round(producto.precio * 0.9);
          let contenedor = document.createElement('div');
          contenedor.innerHTML = `<h3> Producto: ${producto.nombre}</h3>
                                  <p>  Precio: $${producto.precio}</p>
                                  <p>  Precio con descuento: $${precioDescuento}</p>`
          document.body.appendChild(contenedor);
      }
  }
  let productos = [
      { nombre: 'Arroz', precio: 100 },
      { nombre: 'Fideo', precio: 240 },
      { nombre: "Pan", precio: 50 },
  ];
  mostrarProductos(productos);
}



