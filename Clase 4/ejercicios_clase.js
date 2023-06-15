EJERCICIO 1A
Crear una función que:
Reciba como parámetro una edad
Devuelva como resultado cuantos años le faltan para jubilarse

Ejemplo de ejecución y resultado:
let resultado = calcularJubilacion(25)
console.log(resultado) // deberia mostrarse 40

Tener en cuenta que supondremos que la edad jubilatoria son 65 años para todas las personas

EJERCICIO 1B
Crear una función que:
Reciba como parámetro una edad
Devuelva cuantos años le faltan para jubilarse
Si la edad es mayor (o igual) a 65 años debe devolver “Ya tenes edad para jubilarte”

Ejemplo de ejecución y resultado:
let resultado = calcularJubilacion(25)
console.log(resultado) // deberia mostrarse 40

Let resultado2 = calcularJubilacion(66)
console.log(resulta2) // “Ya tenes edad para jubilarte”

Tener en cuenta que supondremos que la edad jubilatoria son 65 años para todas las personas

Pista: Podemos usar IF y ELSE y hacer un return distinto para cada uno

EJERCICIO 2
Crear una función que:
Al ejecutarse, le pida al usuario que ingrese el precio de un producto para un carrito de compras
Luego de poner el precio debe volver a pedirle otro precio al usuario, hasta que el usuario escriba “ESC”
Cuando escribe ESC, se debe cortar la ejecución y la función debe retornar la suma de todos los precios de los productos

EJERCICIO 2 RESOLUCION 
function sumaPrecios() {
    let suma = 0
    let precio = prompt('Ingrese el precio del producto');
    while (precio !== 'ESC') {
        suma = suma + parseInt(precio);
        precio = prompt('Ingrese el precio del producto');
    }
    return suma
}
let sumaDePrecios = sumaPrecios()
console.log(sumaDePrecios)




function jubilacion(edad){

    const edadDeJubilacion= 65

    return edadDeJubilacion - edad

}

let edad = parseInt(prompt('ingrese su edad'))

 


let resultado = jubilacion(edad)

console.log(resultado)

const ageRemaining = (age) => {

    let retirementAge = 65;

   return retirementAge - age;

}

 

let result = ageRemaining(parseInt(prompt('Type your Age')));

console.log(result);





let edadJubilatoria = 65

 

function calcularJubilacion(edad) {

    return edadJubilatoria - edad

}

let resultado = calcularJubilacion(50)

console.log(resultado)

let resultado2 = calcularJubilacion(25)

console.log(resultado2)

let resultado3 = calcularJubilacion(20)

console.log(resultado3)

let resultado4 = calcularJubilacion(45)

console.log(resultado4)



function cuantoParaJubilarse () {

    let edad = parseInt(prompt('Ingrese su edad'));

    let edadParaJubilarse = (65 - edad);

    alert ( 'los anios que te restan para jubilarte son ' + edadParaJubilarse) 

}

 

cuantoParaJubilarse()



function jubilacion() {

    let edad = prompt('ingrese su edad')

    let jubilado = 65 - edad

    alert ('Le faltan ' + jubilado + ' años para jubilarse')

    

}

 

jubilacion();




return 65 - edad;

}

 

let rodrigo = calcularJubilacion(34);

console.log(rodrigo)

Daniel Salgado
01:27:26
let edad = prompt('Ingrese su edad');

calcularJubilacion(edad);

    function calcularJubilacion(edad){

        let jubilacion = 65 - edad;

        return alert("Le faltan "+jubilacion+" años para jubilarse");

    }

Catalina Gatica Fraysse
01:27:27
function calcularJubilacion(edad){ let anosParaJubilarse = 65 - edad; console.log('Le faltan ' + anosParaJubilarse + ' años para jubilarse'); } let jubilacionA = calcularJubilacion(50);
Gonzalo Martinez Ciresa
01:27:42
let edad = parseInt (prompt ('Ingrese su edad'))

function edadJubilatoria (edadJubilado, edad) {

    return edadJubilado - edad

}

let resultado = edadJubilatoria (65, edad)

alert (resultado)

Matías De Marco
01:27:42
function edadJubilatoria(edad) {

    jubilacion = 65 - edad

    return jubilacion

}

 

let resultado = edadJubilatoria(20)

console.log(resultado)

Ivan Roth
01:27:47
let edad = parseInt(prompt('Cuantos años tenes?'))

let edadJubilatoria = 65

 

function jubilacion(edad){

    return edadJubilatoria - edad

    

}

console.log('te falta para jubilarte '+ jubilacion(edad) +' años')

Leonardo Portillo
01:28:31
const ageRemaining = (age) => {

    let retirementAge = 65;

   return retirementAge - age;

}

 

let result = ageRemaining(parseInt(prompt('Type your Age')));

console.log(result);


[Profe] Ramiro Guzman
01:30:27
// Ejercicio 1a

 

function calcularJubilacionA(edad) {

    return 65 - edad;

}

let jubilacionA = calcularJubilacionA(30); // 35







// Ejercicio 1b

function calcularJubilacionB(edad) {

    if (edad >= 65) {

        return 'Ya tenes edad para jubilarte';

    } else {

        return 65 - edad;

    }

}

let jubilacionB = calcularJubilacionB(66); 

console.log(jubilacionB) // Ya tenes edad para jubilarte





if (edad < 65){

    return 65-edad

} else {

    return 'Ya tenes edad para jubilarte'

}

}

let edadIngresada = parseInt(prompt("ingrese su edad por favor"))

let edadFinal = calcularaJuvilaion(edadIngresada)

alert(edadFinal)