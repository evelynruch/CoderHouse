// // Declaración de array vacío
// const arrayA = [];
// // Declaracion de array con números
// const arrayB = [1,2];
// // Declaracion de array con strings
// const arrayC = ["C1","C2","C3"];
// // Declaracion de array con booleanos
// const arrayD = [true,false,true,false];
// // Declaracion de array mixto
// const arrayE = [1,false,"C4"];

// // Acceso al array
// const  numeros = [1,2,3,4,5];
// console.log( numeros[0] ) // 1; 
// console.log( numeros[3] ) // 4; 
// let resultado  = numeros[1] + numeros[2] 
// console.log( resultado  ) // 5;

// // Acceso al array
// const  animales = ['perro','gato','raton','oso','tortuga'];
// console.log( animales[0] ) // perro; 
// console.log( animales[3] ) // oso; 


// Arrays

// Ejemplo 1: Declarar Array
// Los arrays son una lista ordenada de elementos

// function ejemplo1() {
//     let arrayA = []; // es un array vacio
//     let arrayB = [1, 2, 3]; // array de numeros
//     let arrayC = ['A', 'B', 'C']; // array de strings
//     let arrayD = [true, false, true]; // array de booleans
//     let arrayE = [1, 'A', true]; // array de varios tipos de datos
//     console.log(arrayA);
//     console.log(arrayB);
//     console.log(arrayC);
//     console.log(arrayD);
//     console.log(arrayE);
// }
// Los array pueden tener cualquier tipo de dato dentro

// Ejemplo 2: Acceso al Array
// Para acceder a los elementos de un array se utiliza la posición del elemento al 
// que queremos acceder
// Esta posición se llama "index" o índice en español, y arranca desde la posición 0
// la sintaxis es array[0] para acceder al primer elemento del array

// function ejemplo2() {
//     let numeros = [1, 2, 3, 4, 5];
//     console.log(numeros[0]); // 1
//     console.log(numeros[1]); // 2
//     console.log(numeros[4]); // 5
  
//     let numerosB = [0, 10, 15];
//     console.log(numerosB[0]); // 0
//     console.log(numerosB[1]); // 10
//     console.log(numerosB[2]); // 15
// }


// Ejemplo 3: Modificar un elemento del Array
// function ejemplo3() {
//     let numeros = [1, 2, 3, 4, 5];
//     numeros[0] = 10;
//     console.log(numeros[0]); // 10 (El resto del array sigue igual)
// }

// Ejemplo 4: Iterar un array
// Para poder recorrer todos los elementos de un array podemos utilizar los conceptos 
// vistos previamente tal como el for loop

// function ejemplo4() {
//     let numeros = [1, 2, 3, 4, 5];
//     for (let i = 0; i < 5; i++) {
//         console.log(numeros[i]); // va a mostrar cada uno de los numeros del array
//     }
//   }
  
  // Metodos y propiedades de los Arrays
  
  // Ejemplo 5: length
  // length es una propiedad de los arrays que nos indica la cantidad de elementos 
  // que tiene el array
  
// function ejemplo5() {
// let numeros = [1, 2, 3, 4, 5, 6 ,7];
// console.log(numeros.length); // 7

// // La podemos utilizar en conjunto con el for para iterar todos los elementos de un array

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]); // va a mostrar cada uno de los numeros del array
// }
// }

// // Ejemplo 6: push
// // push se utiliza para agregar elementos al final del array
// function ejemplo6() {
//     let numeros = [1, 2, 3, 4, 5];
//     console.log(numeros); // [1, 2, 3, 4, 5]
//     numeros.push(6);
//     console.log(numeros); // [1, 2, 3, 4, 5, 6]
//   }
  
// // Ejemplo 7: unshift
// // unshift se utiliza para agregar elementos al principio del array
  
//   function ejemplo7() {
//     let numeros = [1, 2, 3, 4, 5];
//     console.log(numeros); // [1, 2, 3, 4, 5]
//     numeros.unshift(0);
//     console.log(numeros); // [0, 1, 2, 3, 4, 5]
//   }

// // Ejemplo 8: pop, es para quitar el ultimo elemento
// function ejemplo8() {
//     let numeros = [1, 2, 3, 4, 5];
//     console.log(numeros); // [1, 2, 3, 4, 5]
//     numeros.pop();
//     console.log(numeros); // [1, 2, 3, 4]
// }
  
//   // Ejemplo 9: shift
//   // shift se utiliza para eliminar el primer elemento del array
  
//   function ejemplo9() {
//     let numeros = [1, 2, 3, 4, 5];
//     console.log(numeros); // [1, 2, 3, 4, 5]
//     numeros.shift();
//     console.log(numeros); // [2, 3, 4, 5]
//   }

// // Ejemplo 10: indexOf
// // indexOf se utiliza para buscar un elemento dentro del array y nos devuelve la posición del elemento dentro del array
//   function ejemplo10() {
//     let numeros = [1, 2, 3, 4, 5];
//     console.log(numeros.indexOf(3)); // 2
//     console.log(numeros.indexOf(6)); // -1 (si no encuentra el elemento devuelve -1)
//   }

// // Ejemplo 11: join
// // join se utiliza para convertir un array en un string
// // dentro del string, cada elemento estará separado por el caracter que pasemos como parametro al metodo join

// function ejemplo11() {
//     let numeros = [1, 2, 3, 4, 5];
//     console.log(numeros.join('-')); // 1-2-3-4-5
//     console.log(numeros.join(' ')); // 1 2 3 4 5
//     console.log(numeros.join('')); // 12345
//   }

// El resto de los métodos tienen ejemplos en el powerpoint
// Lo importante no es recordar todos los métodos, sino saber cómo funciona conceptualmente un array, que es una lista de elementos y que podemos recorrerla utilizando bucles
// Y saber que existen ciertos metodos que nos ayudan a trabajar con arrays, sin embargo si no recordamos exactamente su sintaxis siempre podemos buscarla a la hora de usarlos

// function ejemplo12() {
//     //Declaracion de array vacío y variable para determinar cantidad
//     const listaNombres = [];
//     let cantidad = 5;
//     //Empleo de do...while para cargar nombres en el array por prompt()
//     do {
//         let entrada = prompt('Ingresar nombre');
//         listaNombres.push(entrada.toUpperCase());
//     } while (listaNombres.length != cantidad);
//     console.log(listaNombres);

//     //Concatenamos un nuevo array de dos elementos
//     const nuevaLista = listaNombres.concat(['ANA', 'EMA']);
//     //Salida con salto de línea usando join
//     alert(nuevaLista.join('\n')); // \n es el caracter de salto de línea (enter)
//   }


// Ejemplo 13
// En este ejemplo buscamos el indice del elemento para eliminarlo
// indexOf va a buscar el indice del valor que le proporcione
// el splice recibe en index el valor 1 que tiene Pedro y va a borrar
// 1 elemento porque SPLICE pide dos parametros, el primero es el inicial
// y el segundo cuantos indices borra.

// function ejemplo13() {
//     const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
  
//     // recibo el elemento a borrar por parámetro
//     function eliminar(nombre) {
//         // busco su índice en el array
//         let index = nombres.indexOf(nombre);
  
//         // si existe, o sea es distinto a -1, lo borro con splice
//         if (index != -1) {
//             nombres.splice(index, 1);
//         }
//     }
//     console.log(nombres);
  
//     eliminar('Pedro');
//     eliminar('Ana');
//     eliminar('Julieta')
//     console.log(nombres);
// }

// Ejemplo 14: for...of
// Otra manera de iterar el array, es utilizar el for of
// // FOR OF
//   function ejemplo14() {
//     const prods = [
//         { id: 1, producto: 'Arroz' },
//         { id: 2, producto: 'Fideo' },
//         { id: 3, producto: 'Pan' },
//     ]
//     for (const i of prods) {
//       console.log(`id: ${i.id}, producto: ${i.producto}`);
//     }
// }


// Diferencia con for in: nos devuelve cada atributo de un objeto
//   function ejemplo14b() {
//     const producto = {
//       id: 101,
//       producto: 'Milanesa'
//     }
//       for (const x in producto) {
//         // console.log(x); // - ID - PRODUCTO
//         // console.log(producto[x]) // veo los valores 101 y milanesa
//         // console.log(`${x} : ${producto[x]}`) // veo id:101 y producto:milanesa
//     }
//   }

// Arrays y objetos, clases e instancias
// // ARRAYS DE OBJETOS
// const objeto1 = { id: 1, producto: "Arroz" };
// const array   = [objeto1, { id: 2, producto: "Fideo" }];
// array.push({ id: 3, producto: "Pan" });

// Ejemplo 15

// function ejemplo15() {
//     class Producto {
//         constructor(nombre, precio) {
//             this.nombre = nombre.toUpperCase();
//             this.precio = parseInt(precio);
//             this.vendido = false;
//         }
//         precioConIva() {
//             return this.precio * 1.21;
//         }
//     }
//     //Declaramos un array de productos para almacenar objetos
//     const productos = [];

//     productos.push(new Producto('arroz', '125'));
//     productos.push(new Producto('fideo', '70'));
//     productos.push(new Producto('pan', '50'));

//     //Iteramos el array con for...of para modificarlos a todos
//     for (const i of productos) {
//         console.log(i.nombre + ': $' + i.precioConIva());
//     }

// }


// FILMINAS
// LENGHT
// const miArray = ["marca", 3 ,"palabra"];
// console.log( miArray.length ); //imprime 3


// const numeros = [1, 2,'pera', 4, 5, 6, 7, 8]
// for (let i= 0; i < numeros.length; i++) {
//     alert(numeros[i]);
// }

// // PUSH
// const miArray = ["marca", 3, "palabra"]
// miArray.push('otro elemento')

// console.log(miArray.length) // ⇒ 4
// console.log(miArray) //["marca", 3, "palabra", “otro elemento”]


// const miArray = ["marca", 3, "palabra"]
// miArray.unshift('otro elemento')
// console.log(miArray)
// //[“otro elemento”, "marca", 3, "palabra"]


// // POP y SHIFT
// const nombres = ["Luis", "Ana", "Julia", “Juan”]

// nombres.pop() borra el ultimo
// console.log(nombres) // ["Luis", "Ana", "Julia"]

// nombres.shift() borra el primero 
// console.log(nombres) // ["Ana", "Julia"]

// // SPLICE se ponen dos parametros
// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// nombres.splice(1, 2)
// console.log(nombres)
// // ['Rita', 'Ana', 'Vanesa']

// // JOIN
// const nombres = ["Luis", "Ana", "Julia", “Juan”]

// console.log( nombres.join(“, ”) ) 
// // Luis, Ana, Julia

// console.log( nombres.join(“*”) ) 
// // Luis*Ana*Julia


// // CONCAT
// const perros   = ["Pupy", “Ronnie”]
// const gatos = ["Mishi", “Garfield”, "Zuri"]
// const mascotas = perros.concat(gatos)
// console.log(mascotas)
// // ["Pupy", “Ronnie”, "Mishi", “Garfield”, "Zuri"]


// // SLICE
// const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// const masculinos = nombres.slice(1, 3); // Nuevo array desde la posición 1 a 3 sin el ultimo.
// // masculinos contiene ['Pedro','Miguel']


// //INDEXOF
// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

// console.log( nombres.indexOf('Rita') ) // ⇒ 0
// console.log( nombres.indexOf('Ana') ) // ⇒ 3
// console.log( nombres.indexOf('Julieta') ) // ⇒ -1

// // INCLUDES
// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// console.log( nombres.includes('Rita') ) // ⇒ true
// console.log( nombres.includes('Miguel') ) // ⇒ true
// console.log( nombres.includes('Julieta') ) // ⇒ false

// // REVERSE
// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
// nombres.reverse()
// console.log( nombres ) 
// // ⇒ ['Vanesa', 'Ana','Miguel', 'Pedro','Rita']

//EJEMPLO
//Declaraciòn de array vacío y variable para determinar cantidad
// const listaNombres = [];
// let   cantidad     = 5;
// //Empleo de do...while para cargar nombres en el array por prompt()
// do{
//    let entrada = prompt("Ingresar nombre");
//    listaNombres.push(entrada.toUpperCase());
//    console.log(listaNombres.length);
// }while(listaNombres.length != cantidad)
// //Concatenamos un nuevo array de dos elementos
// const nuevaLista = listaNombres.concat(["ANA","EMA"]);
// //Salida con salto de línea usando join
// alert(nuevaLista.join("\n"));

// //EJEMPLO
// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// // recibo el elemento a borrar por parámetro
// const eliminar = (nombre) => {
//     // busco su índice en el array
//     let index = nombres.indexOf(nombre)

//      // si existe, o sea es distinto a -1, lo borro con splice
//     if (index != -1 ) {
//         nombres.splice(index, 1)
//     } 
// }

// eliminar('Pedro')






