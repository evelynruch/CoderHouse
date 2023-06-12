// control de flujos, condicionales y operadores logicos

// condicionales: distintos flujos a partir de una condicion, toma una decision a partir de una condicion "si <condicion> equis cosa"

// como funcionan los valores booleanos
/*
if (true)
    console.log("si es verdadero");
else
    console.log("si es falso");

if (true)
    console.log("si es verdadero");
    */
// valores booleanos (true or false)

/*
let verdadero = true
let falso = false 

if (false){
    console.log('Prueba')}
    else {
    console.log('Entrando al else')
    }
*/
// falso no es verdadero entonces no muestra Nada 

// else es lo que complementa, entra siempre que la primer condicion haya sido falsa

/*
let nombre =prompt('Ingrese su nombre')
if (nombre == ''){
    alert('El nombre no puede estar vacio')
}   else{
    alert('Su nombre es ' + nombre)
}
*/

/*let precio = parseInt(prompt('Ingrese el precio'))
if (precio < 20){
    alert('Es barato')
}   else if (precio <50){
    alert('Tiene un precio intermedio')
}
*/

// distintos tipos de condicionales


let nombre = 'Juan'
let apellido = 'Perez'
let edad = 30
let trabajo = 'Programador'
let experienciaAnios = 3


// ej 1 let esProgramador = trabajo == 'Programador'

/* ej2 if (trabajo == 'Programador'){
    console.log("Es programador")
}
/*
// operadores logicos y condicionales:
// son: == === != !== < > <= >= && ||
*/
/*
if (edad > 18){
    console.log('Es mayor de edad')
}
if (edad >=18){
    console.log('Es mayorde edad')
}
if (edad <=17){
    console.log('Es menor de edad')
}
*/

if (edad === 30) {
    console.log('Es verdadero')
}

// el triple igual es compara estrictamente si es el valor 30

if (nombre == 'Juan' && edad === 29) {
    console.log('Entrando al bloque de codigo')
}   else {
    console.log ('Entrando al else')
}

if(nombre === 'Roberto' || edad ===29){
    console.log('Entrando al bloque 2')
}

// not es la negacion, damos vuelta el resultado. ( !)
let esMayorDeEdad = edad >=18
if (!esMayorDeEdad){
    console.log('Entrando al bloque')
}

