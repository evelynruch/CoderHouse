// //Ejemplo 1

// // Forma anterior para definir a una persona
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

// // Esta es una manera de definir un objeto usando una notación compatible con JSON
// // JSON significa JavaScript Object Notation 
// //y es un standard que se suele utilizar en la web para intercambiar datos

// // Ejemplo 2: Acceder y Modificar las propiedades

// // Notación punto
// console.log(persona.edad);
// persona.edad = 31;
// console.log(persona.edad);
// // //Notación ["propiedad"]
// console.log(persona['ciudad']);

// // Ejemplo 3

// // Métodos

// // Métodos del tipo de datos String
// let texto = 'Hola coders';

// console.log(texto.toUpperCase()); // Transforma el texto en mayuscula
// console.log(texto.toLowerCase()); // Transforma el texto en minuscula

// // las propiedades son valores y los metodos son funciones

// // Ejemplo 4

// // Métodos en objetos personalizados

// let persona2 = {
//     nombre: 'Juan',
//     edad: 30,
//     ciudad: 'Buenos Aires',
//     saludar: function () {
//         console.log('Hola a todos!');
//     },
//   };
  
//   persona2.saludar();
  
//   // En este caso, saludar es un método del objeto persona2, mientras que nombre es una propiedad
  
  
//   // Ejemplo 5
  
//   // this: hace referencia al objeto en el que se encuentra
  
//   let persona3 = {
//     nombre: 'Juan',
//     edad: 30,
//     ciudad: 'Buenos Aires',
//     saludar: function () {
//         console.log('Hola, soy ' + this.nombre + ' soy de ' + this.ciudad);
//     },
//     //En este caso this hace referencia al objeto persona3, por lo tanto this.nombre equivale a 'Juan'
//   };
//   persona3.saludar();

// // Ejemplo 6
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

// Crear un algoritmo que:
// Le pida al usuario que ingrese su nombre y edad mediante prompts
// cree un objeto con las propiedades nombre y edad, y le asigne los valores ingresados por el usuario
// El objeto debe tener un metodo que al ser ejecutado se muestre mediante alert el siguiente string: “NOMBRE tiene EDAD años”. (“Juan tiene 30 años”)
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
// usuario.presentacion()

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



// //Strings con Backticks
// // Las siguientes son equivalentes
// alert(`El nombre del usuario es: ${ingresarNombre}`)
// alert('El nombre del usuario es: ' + ingresarNombre)

// // Ejemplo 7

// // Operador in: verificar si una propiedad existe en un objeto
// let persona4 = {
//     nombre: 'Juan',
//     edad: 30,
//   }
  
//   let tieneNombre = 'nombre' in persona4;
//   console.log(tieneNombre); // true
//   let tienePais = 'pais' in persona4; 
//   console.log(tienePais); // false

//   // Ejemplo 7

// // Operador in: verificar si una propiedad existe en un objeto
// let persona4 = {
//     nombre: 'Juan',
//     edad: 30,
//   }
  
//   let tieneNombre = 'nombre' in persona4;
//   console.log(tieneNombre); // true
//   let tienePais = 'pais' in persona4; 
//   console.log(tienePais); // false
  
//   // Ejemplo 8
  
//   // for...in: recorrer las propiedades de un objeto
  
//   for (const propiedad in persona4) {
//     console.log(propiedad); // nombre, edad
//     console.log(persona4[propiedad]); // Juan, 30
//   }

// Crear una clase Usuario que:
// tenga las propiedades nombre, mail, contraseña, tenga un metodo para verificar si la contraseña es correcta:
// Por ejemplo, para el usuario Juan con contraseña juancito123, 
// let usuario1 = new Usuario … etc
// Si ejecuto el metodo usuario1.verificar(‘juancito123’), se debe mostrar por alert o console log que la contraseña es correcta.
// Si se ejecuta con usuario1.verificar(‘futbol97’), se debe alertar que la contraseña es incorrecta

// Crear una clase Usuario que:
// tenga las propiedades nombre, mail, contraseña,tenga un metodo para verificar si la contraseña es correcta:
// Por ejemplo, para el usuario Juan con contraseña juancito123, 
// let usuario1 = new Usuario … etc
// Si ejecuto el metodo usuario1.verificar(‘juancito123’), se debe mostrar por alert o console log que la contraseña es correcta.
// Si se ejecuta con usuario1.verificar(‘futbol97’), se debe alertar que la contraseña es incorrecta

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

// // Ejemplo 9
// // CLASES

// // Las clases se usan para poder definir un esquema reutilizable
// // Sirve para crear varios objetos utilizando el mismo esquema

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
  
//   // new crea un nuevo objeto a partir de una clase, se le deben proporcionar las propiedades necesarias definidas en la clase

// // Ejemplo 10
// // Las clases también pueden tener métodos
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

//   class Producto {
//     constructor(nombre, precio) {
//         this.nombre = nombre;
//         this.precio = precio;
//     }
//     precioConIva() {
//         return this.precio * 1.21 // Agregar 21% que es el impuesto IVA
//     }
//   }
  
//   let nombre = prompt('Ingrese el nombre del producto')
//   let precio = prompt('Ingrese el precio')
  
//   while (nombre !== 'ESCAPE') {
//     let productoClase = new Producto(nombre, parseInt(precio))
//     console.log(`El precio con iva para el producto ${productoClase.nombre} es ${productoClase.precioConIva()}`)
//     nombre = prompt('Ingrese el nombre del producto')
//     precio = prompt('Ingrese el precio')
//   }

//   // Ejemplo 11: caso practico

// class Producto {
//     constructor(nombre, precio, tieneStock) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.tieneStock = tieneStock;
//     }
//     vender() {
//         console.log('Se vendio el producto ' + this.nombre)
//         this.tieneStock = false
//     }
//     precioConIva() {
//         return this.precio * 1.21
//     }
//     reponerStock() {
//         console.log('Se repuso el producto ' + this.nombre)
//         this.tieneStock = true
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
//     constructor(nombre, n1, n2, n3) {
//         this.nombre = nombre;
//         this.nota1 = n1;
//         this.nota2 = n2;
//         this.nota3 = n3
//     }
  
//     calcularPromedio() {
//         let promedio = (this.nota1 + this.nota2 + this.nota3) / 3
//         alert('El alumno Juan tiene un promedio de ' + promedio)
//         return promedio
//     }
  
//   }
  
//   let alumno1 = new Alumno('Ramiro', 6, 8, 7)
//   alumno1.calcularPromedio()


// // tiene un error pero se puede arreglar
// class Alumno{
//     constructor(nombre, nota1, nota2, nota3){
//         this.nombre = nombre;
//         this.nota1 = nota1;
//         this.nota2 = nota2;
//         this.nota3 = nota3;
//     }
  
//     calcularPromedio(){
//         let promedio = (this.nota1 + this.nota2 + this.nota3)/3;
//         return promedio;
//     }
//   }
  
//   do {
//     let nombre = prompt('Si desea finalizar ingrese ESC \n Ingrese el nombre: ');
//     let nota1=parseInt(prompt('Ingrese nota 1:'));
//     let nota2=parseInt(prompt('Ingrese nota 2:'));
//     let nota3=parseInt(prompt('Ingrese nota 3:'));
  
//     let alumno = new Alumno(nombre, nota1, nota2, nota3);
//     alert(`El alumno ${alumno.nombre} tiene un promedio de  ${alumno.calcularPromedio()}`)
    
//   } while (nombre != 'ESC');

//   Crear una clase Usuario que:
//   tenga las propiedades nombre, mail, contraseña
  
  
//   tenga un metodo para verificar si la contraseña es correcta:
//   Por ejemplo, para el usuario Juan con contraseña juancito123, 
//   let usuario1 = new Usuario … etc
//   Si ejecuto el metodo usuario1.verificar(‘juancito123’), se debe mostrar por alert o console log que la contraseña es correcta.
//   Si se ejecuta con usuario1.verificar(‘futbol97’), se debe alertar que la contraseña es incorrecta  


//   // Ejercicio 2


// class Alumno {
//     constructor(nombre, nota1, nota2, nota3) {
//         this.nombre = nombre;
//         this.nota1 = nota1;
//         this.nota2 = nota2;
//         this.nota3 = nota3;
//     }
//     calcularPromedio() {
//         let promedio = (this.nota1 + this.nota2 + this.nota3) / 3;
//         alert('El alumno ' + this.nombre + ' tiene un promedio de ' + promedio);
//         return promedio
//     }
// }

// let alumno1 = new Alumno('Juan', 8, 9, 7);
// alumno1.calcularPromedio()

