//Ejemplo 1

// Forma anterior para definir a una persona
// let nombre = 'Juan';
// let edad = 30;
// let ciudad = 'Buenos Aires';

// // Definir las propiedades del objeto persona
// let persona = {
//   nombre: 'Juan',
//   edad: 30,
//   ciudad: 'Buenos Aires',
// };

// console.log(persona.nombre);
// console.log(persona.edad);


// let nombre = "Homero";
// let edad   = 39;
// let calle  = "Av. Siempreviva 742";
// // Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal

// const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" }

//Anatomia de un objeto
// const persona1 = { 
//     nombre: "Homero", 
//     edad: 39, 
//     calle: "Av. Siempreviva 742" 
// }

//Obteniendo valores de un objeto
// const persona1 = { nombre: "Homero",
//                    edad: 39,
//                    calle: "Av. Siempreviva 742"}
                   
// console.log(persona1.nombre)
// console.log(persona1.edad)
// console.log(persona1.calle)

// Es lo mismo que llamar con []
// const persona1 = { nombre: "Homero",
//                    edad: 39,
//                    calle: "Av. Siempreviva 742"}
                   
// console.log(persona1["nombre"]) // igual a (persona1.nombre)
// console.log(persona1["edad"])
// console.log(persona1["calle"])

//asingnar valores a las propiedades
// const persona1 = { nombre: "Homero",
//                    edad: 39,
//                    calle: "Av. Siempreviva 742"}

// // si le pongo igual le estoy dando un nuevo valor, ya sea
// // con [] o con punto 
// persona1["nombre"] = "Marge"
// persona1.edad = 36

// Ejemplo 2: Acceder y Modificar las propiedades
// Notación punto
// console.log(persona.edad);
// persona.edad = 31;
// console.log(persona.edad);
// // //Notación ["propiedad"]
// console.log(persona['ciudad'])
// persona['ciudad'] ='santa fe'
// console.log(persona['ciudad']);

// Ejemplo 3
// Métodos

// Métodos del tipo de datos String
// let texto = 'Hola coders';

// console.log(texto.toUpperCase()); // Transforma el texto en mayuscula
// console.log(texto.toLowerCase()); // Transforma el texto en minuscula

// las propiedades son valores y los metodos son funciones

// Ejemplo 4
// Métodos en objetos personalizados

// let persona2 = {
//     nombre: 'Juan',
//     edad: 30,
//     ciudad: 'Buenos Aires',
//     saludar: function () {
//         console.log('Hola a todos!');
//     },
//   };
// persona2.saludar();
  
// En este caso, saludar es un método del objeto persona2, 
// mientras que nombre es una propiedad
  
// Ejemplo 5
// this: hace referencia al objeto en el que se encuentra
  
// let persona3 = {
//   nombre: 'Juan',
//   edad: 30,
//   ciudad: 'Buenos Aires',
//   saludar: function () {
//       console.log('Hola, soy ' + this.nombre + ' soy de ' + this.ciudad);
//   },
//   //En este caso this hace referencia al objeto persona3, por 
//   //lo tanto this.nombre equivale a 'Juan'
// };
// persona3.saludar();

// Ejemplo 6
// let nombreUsuario = prompt('Ingrese su nombre');
// let apellidoUsuario = prompt('Ingrese su apellido');
// let edadUsuario = prompt('Ingrese su edad');

// let usuario = {
//     nombre: nombreUsuario,
//     apellido: apellidoUsuario,
//     edad: parseInt(edadUsuario),
//     saludar: function () {
//         console.log('Hola, soy ' + this.nombre + ' ' + this.apellido);
//     }
// }
// usuario.saludar()

// METODOS
// let cadena = 'HOLA CODER';
// //Propiedad de objeto String: Largo de la cadena.
// console.log(`hola${cadena.length}`);
// //Método de objeto String: Pasar a minúscula.
// console.log(cadena.toLowerCase());
// //Método de objeto String: Pasar a mayúscula.
// console.log(cadena.toUpperCase());

// METODOS PERSONALIZADOS
// const persona1 = {
//     nombre: 'Homero',
//     edad: 39,
//     calle: 'Av. Siempreviva 742',
//     saludar: function () {
//         console.log('Hola a todos!');
//     },
// };
// persona1.saludar();


// USO DEL THIS
// const persona1 = {
//     nombre: 'Juan',
//     apellido: 'Perez',
//     saludar: function () {
//         console.log('Hola, soy ' + this.nombre + ' ' + this.apellido);
//     },
// };
// persona1.saludar();


// // Operador IN
// const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
// //devuelve true porque la clave "nombre" existe en el objeto persona1
// console.log( "nombre" in persona1);
// //devuelve false porque la clave "origen" no existe en el objeto persona1
// console.log( "origen" in persona1);
// //recorremos todas las propiedades del objeto con el ciclo for...in

// // FOR...IN -> Para recorrer el objeto
// for (const propiedad in persona1) {
//     console.log(persona1[propiedad]);
// }

// Es lo mismo porque 'propiedad' puede ser cualquier cosa, no es palabra reservada
// for (const i in persona1) {
//     console.log(persona1[i]);
// }

// // CLASES
// class Persona{
//     constructor(nombre, edad, calle) {
//         this.nomPer = nombre;
//         this.edadPer   = edad;
//         this.callePer  = calle;
//     }
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// console.log(persona1['nomPer']); // accedo al valor nomPer de la propiedad  persona1

// Clases y metodos
// class Persona{
//     constructor(nombre, edad, calle) {
//         this.nomPer = nombre;
//         this.edadPer   = edad;
//         this.callePer  = calle;
//     }
//     hablar(){
//         console.log("HOLA SOY "+ this.nomPer);
//     }
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// persona1.hablar(); // "objeto que acabo de crear.metodo"


// class Producto {
//     constructor(nombre, precio) {
//         this.nombreProd  = nombre.toUpperCase();
//         this.precioProd  = parseFloat(precio);
//         this.vendidoProd = false;
//     }
//     sumaIva() {
//         console.log(this.precioProd);
//         this.precioProd = this.precioProd * 1.21;
//         console.log(this.precioProd);
//     }
//     vender() {
//         this.vendidoProd = true;
//         return this.vendido;
//     }
// }
// const producto1 = new Producto("arroz", 125);
// const producto2 = new Producto("fideo", 50);
// producto1.sumaIva(); // lamar al metodo
// producto2.sumaIva();
// console.log(producto1.vender());



// Esta es una manera de definir un objeto usando una notación compatible con JSON
// JSON significa JavaScript Object Notation 
//y es un standard que se suele utilizar en la web para intercambiar datos


// Crear un algoritmo que:
// Le pida al usuario que ingrese su nombre y edad mediante prompts
// cree un objeto con las propiedades nombre y edad, y le asigne los valores ingresados 
// por el usuario
// El objeto debe tener un metodo que al ser ejecutado se muestre mediante alert 
// el siguiente string: “NOMBRE tiene EDAD años”. (“Juan tiene 30 años”)
// Se debe ejecutar el metodo para saber la edad del usuario

// let nombreUsuario = prompt('Ingrese su nombre');
// let edadUsuario = prompt('Ingrese su edad');

// let usuario = {
//     nombre: nombreUsuario,
//     edad: parseInt(edadUsuario),
    
//     presentacion: function () {
//         console.log(this.nombre + '  tiene  ' + this.edad + ' años');
//     }
// }
// usuario.presentacion() // objeto.metodo

// let ingresarNombre = prompt("Ingrese su Nombre");
// let ingresarEdad = prompt("Ingrese su edad");

// let persona = {
//   nombre : ingresarNombre,
//   edad : parseInt(ingresarEdad),
  
//   mensajeEdad: function () {
//     alert(`${this.nombre} tiene ${this.edad} anios de edad`)
//   }
// }
// persona.mensajeEdad();

//Strings con Backticks
// Las siguientes son equivalentes
// alert(`El nombre del usuario es: ${this.nombre}`)
// alert('El nombre del usuario es: ' + this.Nombre)


// Ejemplo 7
// Operador in: verificar si una propiedad existe en un objeto
// let persona4 = {
//     nombre: 'Juan',
//     edad: 30,
//   }
  
//   let tieneNombre = 'nombre' in persona4;
//   console.log(tieneNombre); // true
//   let tienePais = 'pais' in persona4; 
//   console.log(tienePais); // false
  
// Ejemplo 8
// for...in: recorrer las propiedades de un objeto
  
// for (const propiedad in persona4) {
//   console.log(propiedad); // nombre, edad
//   console.log(persona4[propiedad]); // Juan, 30
// }

// for (const i in persona4) {
//   console.log(i); // nombre, edad
//   console.log(persona4[i]); // Juan, 30
// }
 
// Crear una clase Usuario que:
// tenga las propiedades nombre, mail, contraseña, tenga un metodo para verificar si la contraseña es correcta:
// Por ejemplo, para el usuario Juan con contraseña juancito123, 
// let usuario1 = new Usuario … etc
// Si ejecuto el metodo usuario1.verificar(‘juancito123’), se debe mostrar por alert o console log que 
// la contraseña es correcta.
// Si se ejecuta con usuario1.verificar(‘futbol97’), se debe alertar que la contraseña es incorrecta

// class Usuario {
//   constructor(nombre, mail, contrasenia){
//       this.nomUsu = nombre;
//       this.mailUsu = mail;
//       this.contraUsu = contrasenia;
//   }
//   validarContrasenia(){
//       if(this.contraUsu == "juancito123"){
//           console.log("Contraseña correcta");
//       } 
//       else {
//           console.log(`${usuario1.contraUsu} no es una contrasenia valida`)
//       }
//   }
// }
// let usuario1 = new Usuario ('Juan', 'juan@mail.com', 'juancitddddd123')
// usuario1.validarContrasenia()

// Crear una clase Alumno que:
// Tenga las propiedades:
// nombre
// nota1
// nota2
// nota3
// Las notas corresponden al puntaje en los examenes, deben ser numeros entre 1 y 10
// La clase debe tener un método calcularPromedio:
// Este metodo debe calcular el promedio entre todas las notas del alumno,
// Se debe  mostrar con alert “El alumno Juan tiene un promedio de 8” y luego retornar el promedio


// class Alumno {
//     constructor(nombre, notaUno, notaDos, notaTres){ 
//         this.nomAlum = nombre;
//         this.notaUnoAlum = parseInt(notaUno);
//         this.notaDosAlum = parseInt(notaDos);
//         this.notaTresAlum = parseInt(notaTres);
//     }
//     calcularPromedio(){
//         let promedio = (this.notaUnoAlum + this.notaDosAlum + this.notaTresAlum)/3
//         return promedio
//     }
// }

// let alumnoZavala = new Alumno('Sabrina', 7, 4, 8)
// alert(`El alumno ${alumnoZavala.nomAlum} tiene un promedio de ${alumnoZavala.calcularPromedio()}`)


// Ejemplo 9
// CLASES

// Las clases se usan para poder definir un esquema reutilizable
// Sirve para crear varios objetos utilizando el mismo esquema

// class Persona {
//     constructor(nombre, edad, ciudad) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.ciudad = ciudad;
//     }
//   }
//   // el constructor es el metodo que se ejecuta cuando se inicializa la clase
//   // Para poder inicializar o instanciar una clase, se usa la palabra new
//   // cada persona que creemos a partir de la clase Persona, será una instancia de Persona
  
//   let personaClase1 = new Persona('Juan', 30, 'Buenos Aires');
//   // personaClase1 es una instancia de Persona
//   let personaClase2 = new Persona('Pedro', 25, 'Cordoba');
//   // personaClase2 es otra instancia de Persona
//   console.log(personaClase1);
//   console.log(personaClase2);
  
  // new crea un nuevo objeto a partir de una clase, se le deben proporcionar las propiedades necesarias 
  // definidas en la clase

// Ejemplo 10
// Las clases también pueden tener métodos
// class Usuario {
//   constructor(nombre, apellido) {
//       this.nombre = nombre;
//       this.apellido = apellido;
//   }
//   saludar() {
//       console.log('Hola, soy ' + this.nombre + ' ' + this.apellido);
//   }
// }

// let usuarioClase = new Usuario('Ramiro', 'Guzman')
// usuarioClase.saludar()

// class Producto {
//     constructor(nombre, precio, tieneStock) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.tieneStock = tieneStock;
//     }
//     precioConIva() {
//         return this.precio * 1.21 // Agregar 21% que es el impuesto IVA
//     }
//     vender() {
//         console.log('Se vendio el producto ' + this.nombre)
//         this.tieneStock = false
//     }
//     reponerStock() {
//         console.log('Se repuso el producto ' + this.nombre)
//         this.tieneStock = true
//     }
//   }
  
//   let producto1 = new Producto('Remera', 1000, true);
//   let producto2 = new Producto('Pantalon', 2000, true);
  
//   console.log('Precio con iva: $' + producto1.precioConIva());
//   producto1.vender()
//   console.log(producto1.tieneStock)
//   producto1.reponerStock()
//   console.log(producto1.tieneStock)

  // class Producto {
  //   constructor(nombre, precio) {
  //       this.nombre = nombre;
  //       this.precio = precio;
  //   }
  //   precioConIva() {
  //       return this.precio * 1.21 // Agregar 21% que es el impuesto IVA
  //   }
  // }
  
  // let nombre = prompt('Ingrese el nombre del producto')
  // let precio = prompt('Ingrese el precio')
  
  // while (nombre !== 'ESCAPE') {
  //   let productoClase = new Producto(nombre, parseInt(precio))
  //   console.log(`El precio con iva para el producto ${productoClase.nombre} es ${productoClase.precioConIva()}`)
  //   nombre = prompt('Ingrese el nombre del producto')
  //   precio = prompt('Ingrese el precio')
  // }

//Ejemplo 11: caso practico

// class Producto {
//     constructor(nombre, precio, tieneStock) {
//         this.nombProd = nombre;
//         this.precioProd = precio;
//         this.tieneStockProd = tieneStock;
//     }
//     vender() {
//         console.log('Se vendio el producto ' + this.nombProd)
//         this.tieneStockProd = false
//     }
//     precioConIva() {
//         return this.precioProd * 1.21
//     }
//     reponerStock() {
//         console.log('Se repuso el producto ' + this.nombProd)
//         this.tieneStockProd = true
//     }
// }

// let producto1 = new Producto('Remera', 1000, true);
// let producto2 = new Producto('Pantalon', 2000, true);

// console.log(producto1);
// console.log('Precio con iva: $' + producto1.precioConIva());

// console.log(producto2)
// producto2.vender()
// console.log(producto2);
// producto2.reponerStock()
// console.log(producto2);

