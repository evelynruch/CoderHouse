function ejercicio2() {
    let productos = [];
  
    class Producto {
      constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
      }
    }
  
    for (let i = 1; i < 4; i++) {
      let nombre = prompt("Escriba el nombre del producto: " + i);
      let precio = parseFloat(
        prompt(`Escriba el precio del producto: ${nombre}`)
      );
  
      let producto = new Producto(nombre, precio);
  
      productos.push(producto);
    }
  
    let precioFiltro = parseFloat(prompt("Escriba el precio a filtrar: "));
  
    let filtroPrecio = productos.filter((producto) => producto.precio < precioFiltro);
    console.log(filtroPrecio);
  
    let sorted = productos.sort((a, b) => a.nombre > b.nombre)
    console.log(sorted);
  
  }

  // Objeto Math

// Ejemplo 1: propiedades

function Ejemplo1() {
    console.log(Math.PI); // 3.141592653589793
    console.log(Math.E); // 2.718281828459045
  }
  
  // Ejemplo 2: min & max
  
  function Ejemplo2() {
    console.log(Math.min(1, 2, 3, 4, 5)); // 1
    console.log(Math.max(1, 2, 3, 4, 5)); // 5
  }

  // Ejemplo 3: round

function Ejemplo3() {
    console.log(Math.round(4.5)); // 5
    console.log(Math.round(4.4)); // 4
  }

  // Ejemplo 4: floor & ceil

function Ejemplo4() {
    console.log(Math.floor(4.9)); // 4
    console.log(Math.ceil(4.1)); // 5
  }

  // Ejemplo 5: sqrt (Squared root/raiz cuadrada)

function Ejemplo5() {
    console.log(Math.sqrt(4)); // 2
    console.log(Math.sqrt(9)); // 3
    console.log(Math.sqrt(-1)); // NaN (Not a Number)
  }
  // Ejemplo 6: random (numero aleatorio entre 0 y 1)
  function Ejemplo6() {
    console.log(Math.random()); // 0.123456789
    console.log(Math.random()); // 0.987654321
  }

  // Ejemplo 7

function Ejemplo7() {
    // números entre 0 y 10
    console.log(Math.random() * 10);
    // números entre 0 y 50
    console.log(Math.random() * 50);
    // números entre 20 y 50
    console.log(Math.random() * 30 + 20);
  }

// Ejemplo 8

function Ejemplo8() {
    // Genera numero aleatorio entre 0 y 100
    function generadorNumero() {
        return Math.round(Math.random() * 100);
    }
    console.log(generadorNumero());
  }

// Clase Date

// Ejemplo 9: Date

function Ejemplo9() {
  const fecha = new Date();
  console.log(fecha);
}

// Ejemplo 10

function Ejemplo10() {
    const fecha = new Date(2021, 11, 25); // año, mes, día (El mes comienza en 0, entonces enero es 0 y diciembre es 11)
    console.log(fecha);
  
    const fechaConHorario = new Date(2021, 11, 25, 10, 30, 0);
    console.log(fechaConHorario);
  
    const fechaDesdeString = new Date('2021-12-25');
    console.log(fechaDesdeString);
    const fechaDesdeString2 = new Date('December 17, 2021');
    console.log(fechaDesdeString2);
  }

  // Ejemplo 11

function Ejemplo11() {
    const fecha = new Date();
    console.log(fecha.getFullYear()); // año
    console.log(fecha.getMonth()); // mes
    console.log(fecha.getDate()); // día
    console.log(fecha.getDay()); // día de la semana
    console.log(fecha.getHours()); // hora
    console.log(fecha.getMinutes()); // minutos
    console.log(fecha.getSeconds()); // segundos
  }
  // Ejemplo 12

function Ejemplo12() {
    const fecha = new Date('December 17, 2021');
  
    console.log(fecha.toDateString()); // Fri Dec 17 2021
    console.log(fecha.toLocaleString()); // 17/12/2021 00:00:00
    console.log(fecha.toLocaleDateString()); // 17/12/2021
    console.log(fecha.toTimeString()); // 00:00:00 GMT-0300 (hora estándar de Argentina)
  }

  // Diferencia entre dos fechas

// Ejemplo 13

function Ejemplo13() {
    const hoy = new Date();
    const navidad = new Date('December 25, 2023');
  
    const diferencia = navidad - hoy;
    console.log(diferencia); // milisegundos que faltan para navidad
    const milisegundosEnUnDia = 1000 * 60 * 60 * 24;
    const diasQueFaltan = Math.round(diferencia / milisegundosEnUnDia);
    console.log(diasQueFaltan); // días que faltan para navidad
  }

  // Ejemplo 14: Calcular tiempo de ejecución

function Ejemplo14() {
    const inicio = new Date();
  
    for (let i = 0; i < 1000; i++) {
        console.log('haciendo tiempo');
    }
  
    const final = new Date();
  
    console.log('El proceso tardo: ' + (final - inicio) + ' milisegundos');
  }

  // Ejemplo 15: Práctica

function Ejemplo15() {
    const inicio = new Date();
    let productos = [];
    for (let i = 1; i <= 3; i++) {
        let nombreProducto = prompt(`Ingrese el nombre del producto ${i}`);
        let precioSinIva = parseFloat(
            prompt(`Ingrese el precio del producto ${i}`)
        );
        let fechaDeVencimiento = prompt(
            `Ingrese la fecha de vencimiento en formato YYYY-MM-DD (1900-01-01), producto ${i}`
        );
        const producto = {
            nombre: nombreProducto,
            precio: Math.round(precioSinIva * 1.21),
            fechaDeVto: new Date(fechaDeVencimiento),
            fechaDeCarga: new Date(),
        };
        productos.push(producto);
    }
    // Ordenar productos por precio
  productos.sort((a, b) => a.precio - b.precio); // de menor a mayor
  productos.sort((a, b) => b.precio - a.precio); // de mayor a menor
  console.log(productos);

  // // Filtrar productos por fecha de vencimiento
  const productosNuevos = productos.filter(
      (producto) => producto.fechaDeVto > new Date()
  );
  console.log(productosNuevos);

  // // Aplicar descuento del 10% a los productos
  const productosConDescuento = productos.map((producto) => {
      producto.precio = Math.round(producto.precio * 0.9);
      return producto;
  });
  console.log(productosConDescuento);

  const final = new Date();

  console.log('El proceso tardo: ' + (final - inicio) + ' milisegundos');
}

// Crear un algoritmo que:
// Permita al usuario cargar 2 productos mediante prompt
// Los productos deben estar en un array y cada producto debe ser un objeto
// Los productos deben tener nombre, precio, unidades en stock y fecha de vencimiento

// Debemos calcular el precio con iva para cada producto
// Debemos ordenar el array de productos por unidades en stock, de mayor a menor
// Debemos filtrar el array para obtener los productos que aún no están vencidos
// Debemos calcular el monto total de todos los productos no vencidos (Para ello debemos multiplicar el precio por la cantidad de unidades de cada producto, luego sumar todos esos resultados)
// Debemos crear un nuevo array que tenga todos los productos no vencidos y cada producto debe tener un 20% de descuento
// Debemos permitir al usuario ingresar un nombre de un producto y mostrar por consola solamente ese producto (find)

// class ejercicio1 {
//     constructor() {
//         let productos = [];

//         producto: {
//             (nombre, precio, unidades, fechaVen);
//             this.nomProd = nombre;
//             this.precioProd = precio;
//             this.uniProd = unidades;
//             this.fechaProd = fechaVen;
//             this.precioIvaProd = precioIva;
//         }

//         let nombre = prompt('Ingrese el nombre ');
//         let precio = parseInt(prompt('Ingrese el precio '));
//         let unidades = parseInt(prompt('Ingrese las unidades dispo '));
//         let fechaVen = (prompt('Ingrese la fecha de Vto'));

//         push.producto = new productos(nombre, precio, unidades, fechaVen)

//         function calcularIva(){
//             let precioIva = precio *1.21
//         }
//     }
// }



// Inciso A
let productos = [];
for (let i = 1; i <= 2; i++) {
  let nombreProducto = prompt(`Ingrese el nombre del producto ${i}`);
  let precioSinIva = parseFloat(prompt(`Ingrese el precio del producto ${i}`));
  let unidades = parseInt(prompt(`Ingrese la cantidad de unidades del producto ${i}`))
  let fechaDeVencimiento = prompt(`Ingrese la fecha de vencimiento en formato YYYY-MM-DD (1900-01-01), producto ${i}`);
  const producto = {
    nombre: nombreProducto,
    precio: Math.round(precioSinIva * 1.21),
    unidades: unidades,
    fechaDeVto: new Date(fechaDeVencimiento),
  };
  productos.push(producto);
}

console.log(productos);


