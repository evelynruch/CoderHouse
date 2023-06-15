// EJERCICIO 1A
// Crear una función que:
// Reciba como parámetro una edad
// Devuelva como resultado cuantos años le faltan para jubilarse

// Ejemplo de ejecución y resultado:
// let resultado = calcularJubilacion(25)
// console.log(resultado) // deberia mostrarse 40

// Tener en cuenta que supondremos que la edad jubilatoria son 65 años para todas las personas

// // Ejercicio 1a
// function calcularJubilacionA(edad) {
//     return 65 - edad;
// }
// let jubilacionA = calcularJubilacionA(30); // 35


// EJERCICIO 1B
// Crear una función que:
// Reciba como parámetro una edad
// Devuelva cuantos años le faltan para jubilarse
// Si la edad es mayor (o igual) a 65 años debe devolver “Ya tenes edad para jubilarte”

// Ejemplo de ejecución y resultado:
// let resultado = calcularJubilacion(25)
// console.log(resultado) // deberia mostrarse 40

// Let resultado2 = calcularJubilacion(66)
// console.log(resulta2) // “Ya tenes edad para jubilarte”

// Tener en cuenta que supondremos que la edad jubilatoria son 65 años para todas las personas

// Pista: Podemos usar IF y ELSE y hacer un return distinto para cada uno

// // Ejercicio 1b
// function calcularJubilacionB(edad) {
//     if (edad >= 65) {
//         return 'Ya tenes edad para jubilarte';
//     } else {
//         return 65 - edad;
//     }
// }
// let jubilacionB = calcularJubilacionB(66); 
// console.log(jubilacionB) // Ya tenes edad para jubilarte

// if (edad < 65){
//     return 65-edad
// } else {
//     return 'Ya tenes edad para jubilarte'
// }
// }
// let edadIngresada = parseInt(prompt("ingrese su edad por favor"))
// let edadFinal = calcularaJuvilaion(edadIngresada)
// alert(edadFinal)


// EJERCICIO 2
// Crear una función que:
// Al ejecutarse, le pida al usuario que ingrese el precio de un producto para un carrito de compras
// Luego de poner el precio debe volver a pedirle otro precio al usuario, hasta que el usuario escriba “ESC”
// Cuando escribe ESC, se debe cortar la ejecución y la función debe retornar la suma de todos los precios de los productos

// EJERCICIO 2 RESOLUCION 
// function sumaPrecios() {
//     let suma = 0
//     let precio = prompt('Ingrese el precio del producto');
//     while (precio !== 'ESC') {
//         suma = suma + parseInt(precio);
//         precio = prompt('Ingrese el precio del producto');
//     }
//     return suma
// }
// let sumaDePrecios = sumaPrecios()
// console.log(sumaDePrecios)

// function jubilacion(edad){
//     const edadDeJubilacion= 65
//     return edadDeJubilacion - edad
// }
// let edad = parseInt(prompt('ingrese su edad'))