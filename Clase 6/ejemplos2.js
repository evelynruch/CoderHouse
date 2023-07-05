
// Crear un algoritmo que:
// Le pida al usuario que ingrese el nombre de un producto y su precio mediante prompts
// Repita el proceso de pedirle nombre y precio 3 veces
// Finalmente mostrar con alert (Puede ser un alert o varios alerts) todos los productos y sus respectivos precios con iva

// Podemos arrancar con un array vacio e ir metiendo objetos del estilo {nombre: string, precio: numero} (array.push())

// Arrays y objetos, clases e instancias

// // ARRAYS DE OBJETOS
// const objeto1 = { id: 1, producto: "Arroz" };
// const array   = [objeto1, { id: 2, producto: "Fideo" }];
// array.push({ id: 3, producto: "Pan" });


// function ejercicio1() {
//     let productos = [];
//     let limite = 3;
  
//     for (let i = 0; i < limite; i++) {
//       let nombre = prompt('Ingrese el nombre del producto')
//       let precio = prompt('Ingrese el precio del producto')

//       let objeto = {
//         nomb: nombre,
//         prec: parseInt(precio)
//       }
//       productos.push(objeto)
//       console.log(productos)
//     }
//     // opcion 1 con varios alerts
//     for (const i of productos) {
//     alert(i.nomb + ': $' + i.prec * 1.21)
//     }
// }
//      // Opcion 2 con un alert
//      let mensaje = ''
//      for (const i of productos) {
//      mensaje += prod.nomb + ': $' + prod.prec * 1.21 + '\n'
//      }
//      alert(mensaje)
// }

// EJEMPLO CON CLASES DEL PROFE
function cargarStock() {
    class ProductoVete {
        constructor(nombre, precio) {
            this.nombProd = nombre.toUpperCase();
            this.precioProd = parseFloat(precio);
        }
        precioConIva() {
            return this.precioProd * 1.21;
        }
    }
    let productosVete = [];
    for (let i = 0; i < 3; i++) {
        let nombre = prompt('Ingrese el nombre del producto');
        let precio = prompt('Ingrese el precio del producto');
        productosVete.push(new ProductoVete(nombre, precio));
    }
    let productosCargados = '';
    for (const producto of productosVete) {
        productosCargados += producto.nombProd + ': $' + producto.precioConIva().toFixed(2) + '\n';
    }
    alert(productosCargados);
}
