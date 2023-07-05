// Funciones de orden superior
// Pueden ser funciones que reciben otra función como parametro
// O funciones que retornan otra función

// Ejemplo 1: retornar funcion
function Ejemplo1() {

    function mayorQue(n) {
        function funcion(m) {
            return m > n;
        }
        return funcion;
    }
    
  
    const mayorQueDiez = mayorQue(10);
  
    console.log(mayorQueDiez(12)); //  true
    console.log(mayorQueDiez(8)); //  false
  }

  // Ejemplo 2

function Ejemplo2() {
    function asignarOperacion(op) {
        if (op == 'sumar') {
            return (a, b) => a + b;
        } else if (op == 'restar') {
            return (a, b) => a - b;
        }
    }
  
    let suma = asignarOperacion('sumar');
    let resta = asignarOperacion('restar');
  
    console.log(suma(4, 6)); //  10
    console.log(resta(5, 3)); //  2
  }

  // Ejemplo 3: funcion como parametro

function Ejemplo3() {

  
    function porCadaUno(arr, fn) {
        for (const el of arr) {
            fn(el);
        }
    }
    const numeros = [1, 2, 3, 4];
  
    const duplicar = (n) => console.log(n * 2);
  
    porCadaUno(numeros, duplicar);
  }

  // Ejemplo 4

function Ejemplo4() {
  
    function porCadaUno(arr, fn) {
        for (const el of arr) {
            fn(el);
        }
    }
    const numeros = [1, 2, 3, 4];
    let total = 0;
    function acumular(num) {
        total += num;
    }
  
    porCadaUno(numeros, acumular);
    console.log(total);
  }

  // Ejemplo 5
function Ejemplo5() {

    function porCadaUno(arr, fn) {
        for (const el of arr) {
            fn(el);
        }
    }
    const numeros = [1, 2, 3, 4];
    const duplicado = [];
  
    porCadaUno(numeros, (el) => {
        duplicado.push(el * 2);
    });
  
    console.log(duplicado); // [2, 4, 6, 8]
  }

  // Metodos para iterar, filtrar y buscar en arrays

// Ejemplo 6: forEach

function Ejemplo6() {
    const numeros = [1, 2, 3, 4];

    numeros.forEach((elemento) => {
        console.log(elemento);
    });
    // Es equivalente a:
    for (const el of numeros) {
      console.log(el)
    }
}

// Ejemplo 7: find

function Ejemplo7() {
    const cursos = [
        { nombre: 'Javascript', precio: 15000 },
        { nombre: 'ReactJS', precio: 22000 },
    ];
  
    const resultado = cursos.find((el) => el.nombre === 'ReactJS');
    const resultado2 = cursos.find((el) => el.nombre === 'DW');
  
    console.log(resultado); // {nombre: 'ReactJS', precio: 22000}
    console.log(resultado2); // undefined
  }

  function Ejemplo8() {
    const cursos = [
        { nombre: 'Javascript', precio: 15000 },
        { nombre: 'ReactJS', precio: 22000 },
        { nombre: 'AngularJS', precio: 22000 },
        { nombre: 'Desarrollo Web', precio: 16000 },
    ];
  
    const resultado = cursos.filter((el) => el.nombre.includes('JS'));
    const resultado2 = cursos.filter((el) => el.precio < 14000);
  
    console.log(resultado);
    // [
    //     {nombre: 'ReactJS', precio: 22000},
    //     {nombre: 'Angular', precio: 22000}
    // ]
  
    console.log(resultado2); // []
  }

  // Ejemplo 9: some

function Ejemplo9() {
    const cursos = [
        { nombre: 'Javascript', precio: 15000 },
        { nombre: 'ReactJS', precio: 22000 },
        { nombre: 'AngularJS', precio: 22000 },
        { nombre: 'Desarrollo Web', precio: 16000 },
    ];
    console.log(cursos.some((el) => el.nombre == 'Desarrollo Web'));
    // true
    console.log(cursos.some((el) => el.nombre == 'VueJS'));
    // false
  }

  / Ejemplo 10: map

function Ejemplo10() {
  const cursos = [
      { nombre: 'Javascript', precio: 15000 },
      { nombre: 'ReactJS', precio: 22000 },
      { nombre: 'AngularJS', precio: 22000 },
      { nombre: 'Desarrollo Web', precio: 16000 },
  ];

  const nombres = cursos.map((el) => el.nombre);
  console.log(nombres);
  // [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]
}

// Ejemplo 11

function Ejemplo11() {
    const precios = [100, 150, 200, 300];
  
    const preciosConIva = precios.map((el) => el * 1.21);
    console.log(preciosConIva);
  }

  function Ejemplo11b() {
    const numeros = [1,2,3,4,5,6]
    const numerosPares = numeros.filter((el) => (el % 2) === 0);
    console.log(numerosPares)
  }
  
  function Ejemplo8b() {  
    const cursos = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
    { nombre: 'AngularJS', precio: 22000 },
    { nombre: 'Desarrollo Web', precio: 16000 },
];

const resultado3 = cursos.filter(function (el) {
  return el.precio > 17000
})
}

function Ejemplo12() {
    const numeros = [1, 2, 3, 4, 5, 6];
    const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
  
    console.log(total); // 21
  
    // Es equivalente a:
    let acumulador2 = 0
    for (const numero of numeros) {
      acumulador2 += numero
    }
    console.log(acumulador2)
  }


 // Ejemplo 13: sort

function Ejemplo13() {
    const numeros = [1, 40, 5, 200];
    numeros.sort((a, b) => a - b); // [ 1, 5, 40, 200 ]
    console.log(numeros);
    numeros.sort((a, b) => b - a); // [ 200, 40, 5, 1 ]
    console.log(numeros);
  }
  
  // Ejemplo 14

function Ejemplo14() {
    const productos = [
        { name: 'Remera', price: 21 },
        { name: 'Pantalon', price: 37 },
        { name: 'Abrigo', price: 45 },
        { name: 'Campera', price: 60 },
    ];
  
    //Sortear por strings
    productos.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        // a es igual a b
        return 0;
    });
    console.log(productos)
  
    //sortear por numeros
    productos.sort((a,b) => {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
          return -1;
      }
      // a es igual a b
      return 0;
    })
    console.log(productos);
    // Es equivalente a:
    productos.sort((a, b) => a.price-b.price)
  }

  function Ejemplo15() {
    const productos = [
        { id: 1, nombre: 'Arroz', precio: 125 },
        { id: 2, nombre: 'Fideo', precio: 70 },
        { id: 3, nombre: 'Pan', precio: 50 },
        { id: 4, nombre: 'Flan', precio: 100 },
    ];
  
    const buscado = productos.find((producto) => producto.id === 3);
    console.log(buscado); //{id: 3, nombre: "Pan", precio: 50}
  
    const existe = productos.some((producto) => producto.nombre === 'Harina');
    console.log(existe); // false
  
    const baratos = productos.filter((producto) => producto.precio < 100);
    console.log(baratos);
    // [{id: 2,nombre:"Fideo",precio:70},{id:3,nombre:"Pan",precio: 50}]
  
    const listaNombres = productos.map((producto) => producto.nombre);
    console.log(listaNombres);
    //[“Arroz”, “Fideo”, “Pan”, “Flan”]
  }

// Crear un algoritmo que:
// Permita al usuario cargar 3 precios mediante prompt
// Utilizando map o forEach, debemos mostrar con console.log, los precios cargados por el usuario con el agregado de IVA




// Extra (opcional):
// Que muestre la suma total de los precios con y sin iva
// Podemos usar reduce o la manera que nos parezca más sencilla
// https://docs.google.com/presentation/d/1c2uY0Qv42h4SiBpIb3HxvalE0PYE3ZXMi-zcMC3auJQ/edit#slide=id.g252b604880e_0_0

function ejercicio1(){
    const precios = []
    
    // precios.push(parseInt(prompt("ingrese el precio del producto 1")))
    // precios.push(parseInt(prompt("ingrese el precio del producto 2")))
    // precios.push(parseInt(prompt("ingrese el precio del producto 3")))
  
    for (let i = 1; i <= 3; i++) {
      let precio = parseInt(prompt("ingrese el precio del producto " + i))
      precios.push(precio)
    }
    
    const preciosConIva = precios.map((el) => el * 1.21);
    console.log(preciosConIva);
    
    
    const total1 = precios.reduce((acumulador, elemento) => acumulador + elemento, 0);
    const total2 = preciosConIva.reduce((acumulador, elemento) => acumulador + elemento, 0);
    
    console.log(`Precios sin iva en total ${total1}`);
    console.log(`Precios con iva en total ${total2}`);
    
    }

    // OTRO EJEMPLO DE RESOLUCION

    // function Ejercicio1() {
    //     let lista = []
    //     class Producto {
    //         constructor(nombre, precio){
    //             this.nombre = nombre,
    //             this.precio = precio
    //         }
    //     }
      
    //     for(let i = 0; i < 3; i++){
    //       let nombreProducto = prompt("Ingrese el nombre de su producto")
    //       let precioProducto = parseInt(prompt("Ingrese el precio de su producto"))
    //       let producto = new Producto(nombreProducto, precioProducto)
    //       lista.push(producto)
    //       console.log(producto)
    //     }
      
    //     const precioIva = lista.map((producto) => producto.precio * 1.21)
    //     console.log(precioIva)
    //   }




// EJERCICIO 2
// Crear un algoritmo que:
// Permita al usuario cargar 3 productos mediante prompt, cada producto debe tener nombre y precio
// Luego debemos pedirle al usuario un filtro de precio, debemos filtrar los productos para obtener sólo aquellos cuyo precio sea menor al que ingresó el usuario
// Luego debemos ordenar los productos usando el método sort, el orden debe ser por nombre
// Finalmente mostrar en la consola los productos filtrados y ordenados

filter sortt

