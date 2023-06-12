/*let usuario1 = 'juanperez1995'
let usuario2 = 'maria1999'
let pass = 'secreto123'

let usuario = prompt('Ingrese su usuario')
let pass = prompt('Ingrese su password')

if ((usuario === usuario1 || usuario === usuario2) && (pass === password)){
    alert('Login exitoso')
}
*/

/*
let usuario1 = 'juanperez1995'
let usuario2 = 'maria1999'
let contrasenia = 'secreto123'
let nombreUsuario = prompt ("ingrese usuario")
let contrasenia2 = prompt ("ingrese contraseña")
if ((nombreUsuario == usuario1 || nombreUsuario == usuario2) && (contrasenia2 == contrasenia))
{ 
    alert ('login existoso')
} else {
    alert ('error en login')
}
*/

/*
let usuario = prompt("Ingrese su nombre de usuario")
let contrasenia = prompt("Ingrese la contraseña")
let usuario1 = "juanperez1995"
let usuario2 = "maria1999"
let contraseniaGeneral = "secreto123"

if((usuario === usuario1 || usuario === usuario2) && contrasenia === contraseniaGeneral){
    alert("El login ha sido exitoso")
}
else if(usuario === usuario1 || usuario === usuario2){
    alert("La contraseña es incorrecta, recarga la pagina e intentalo nuevamente")
}
else if(contrasenia === contraseniaGeneral){
    alert("El usuario es incorrecto, recarga la pagina e intentalo nuevamente")
}
else{
    alert("El usuario y la contraseña son incorrectos, recarga la pagina e intentalo nuevamente")
}
*/
/*
Trabajamos en una plataforma para ver películas.
Necesitamos hacer un filtro por edad para informar al usuario qué sección de películas puede ver.
Si el usuario es mayor de 18 años puede ver cualquier película de cualquier sección.
Si el usuario es menor de 13 años sólo puede ver la sección para niños
Si el usuario tiene entre 13 y 17 años, podrá ver la sección de niños y la sección de adolescentes

Crear un algoritmo que:
Permita al usuario ingresar su nombre y edad
Responda al usuario con un alert diciendo qué sección de películas puede ver:
Ej 1: “Ramiro, sos mayor de edad, podés ver películas de todas las secciones”
Ej 2: “Juan, tienes 12 años, por lo que sólo podrás ver la sección niños”

*/
let infoUsuario = prompt('Ingresa tu nombre: ');
let infoEdad = parseInt(prompt('Ingresa Tu edad: '));

    if (infoEdad <13) {
    alert(infoUsuario+ ' tenes '+infoEdad+ ' años, podes ver peliculas de la seccion niños');
}       else if (infoEdad >=14 && infoEdad <= 18) {
    alert(infoUsuario+' tenes '+infoEdad+ ' años, podes ver peliculas de la seccion adolescentes');
}       else {
    alert(infoUsuario+' tenes '+infoEdad+ ' años, podes ver cualquier pelicula');
}


/* Ejercicio 3
Contexto:
Trabajamos en una plataforma que permite cargar inventario.
El usuario necesita cargar el nombre, precio y unidades de 2 productos y luego obtener ciertas métricas al respecto.
La aplicación debe responderle al usuario cual es la suma total en $ de todos los productos

Crear un algoritmo que:
Permita al usuario ingresar nombre, precio y unidades para 2 productos diferentes (el nombre es opcional, si quieren pueden llamarles producto1, producto2)
La aplicación debe calcular y mostrarle al usuario el monto total $ de todos los productos
(considerar que el subtotal para cada producto será la multiplicación de su precio por las unidades: precio*unidades)
La aplicación debe indicarle al usuario cual es el producto más caro



Bonus track: Repetir el ejercicio con 3 productos y además indicar cuál es el producto más barato y cual es el precio promedio entre todos los productos (no se deben considerar las unidades en este caso, sólo el precio)

*/

let nombreProducto1 = prompt('Ingrese el nombre del primer producto: ');
let precioProducto1 = parseFloat(prompt('Ingrese el precio de ' + nombreProducto1));
let cantidadProducto1 = parseInt(prompt('¿Cuántas unidades desea comprar de ' +nombreProducto1+ ' ? '));
let nombreProducto2 = prompt('Ingrese el nombre del segundo producto: ');
let precioProducto2 = parseFloat(prompt('Ingrese el precio de ' + nombreProducto2));
let cantidadProducto2 = parseInt(prompt('¿Cuántas unidades desea comprar de ' +nombreProducto2+ ' ? '));
let nombreProducto3 = prompt('Ingrese el nombre del tercer producto: ');
let precioProducto3 = parseFloat(prompt('Ingrese el precio de ' + nombreProducto3));
let cantidadProducto3 = parseInt(prompt('¿Cuántas unidades desea comprarde ' +nombreProducto3+ ' ? '));

let sumaTotal
let productoMasCaro
let productoMasBarato