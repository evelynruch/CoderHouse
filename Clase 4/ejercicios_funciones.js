// Funciones anonimas

 

// Ejemplo 7

const saludoAnonimo = function () {

    console.log('Hola estudiantes, desde una función anonima!');

};

saludoAnonimo();

 

// Ejemplo 8

const saludoFlecha = () => {

    console.log('Hola estudiantes, desde una función flecha!');

};

saludoFlecha();

 

//Ejemplo 9

 

const productoFlecha = (numero1, numero2) => {

    return numero1 * numero2

}

let resultadoFlecha = productoFlecha(2, 3);

console.log(resultadoFlecha);

 

//Ejemplo 10

const productoFlechaSinReturn = (numero1, numero2) => numero1 * numero2

 

let resultadoFlechaSinReturn = productoFlechaSinReturn(2, 3);

console.log(resultadoFlechaSinReturn);

 

// Ejemplo 11

// Omitiendo las llaves y el return

const calcularIva = (precioBruto) => precioBruto * 0.21; // es como decir 21% de precioBruto

const calcularIva2 = (precioBruto) => {

    return precioBruto * 0.21;

};




