let nombreProducto1 = prompt('Ingrese el nombre del primer producto: ');
let precioProducto1 = parseFloat(prompt('Ingrese el precio de ' + nombreProducto1));
let cantidadProducto1 = parseInt(prompt('¿Cuántas unidades desea comprar de ' +nombreProducto1+ ' ? '));
let nombreProducto2 = prompt('Ingrese el nombre del segundo producto: ');
let precioProducto2 = parseFloat(prompt('Ingrese el precio de ' + nombreProducto2));
let cantidadProducto2 = parseInt(prompt('¿Cuántas unidades desea comprar de ' +nombreProducto2+ ' ? '));
let nombreProducto3 = prompt('Ingrese el nombre del tercer producto: ');
let precioProducto3 = parseFloat(prompt('Ingrese el precio de ' + nombreProducto3));
let cantidadProducto3 = parseInt(prompt('¿Cuántas unidades desea comprar de ' +nombreProducto3+ ' ? '));

let total = precioProducto1 * cantidadProducto1 + precioProducto2 * cantidadProducto2 + precioProducto3 * cantidadProducto3;
alert('El Valor total de tu compra es: '+ total +'\n Compraste: \n '+ cantidadProducto1 +' '+ nombreProducto1+ '  por un valor total de '+ (precioProducto1 * cantidadProducto1) + '\n '+ cantidadProducto2 +' '+ nombreProducto2 + '  por un valor total de '+ (precioProducto2 * cantidadProducto2)+ '\n ' + cantidadProducto3 +' '+ nombreProducto3 + '  por un valor total de '+ (precioProducto3 * cantidadProducto3));

let nombreProductoMasCaro;
let nombreProductoMasBarato;

if (precioProducto1 > precioProducto2 && precioProducto1 > precioProducto3) {
    nombreProductoMasCaro = nombreProducto1;
} else if (precioProducto2 > precioProducto1 && precioProducto2 > precioProducto3) {
    nombreProductoMasCaro = nombreProducto2;
} else {
    nombreProductoMasCaro = nombreProducto3;
}

if (precioProducto1 < precioProducto2 && precioProducto1 < precioProducto3) {
    nombreProductoMasBarato = nombreProducto1;
} else if (precioProducto2 < precioProducto1 && precioProducto2 < precioProducto3) {
    nombreProductoMasBarato = nombreProducto2;
} else {
    nombreProductoMasBarato = nombreProducto3;
}

let promedio = (precioProducto1 + precioProducto2 + precioProducto3) / 3;
promedio = promedio.toFixed(2); // Limitar a dos decimales

let mensaje = 'El producto más caro es: ' + nombreProductoMasCaro + '\n';
mensaje += 'El producto más barato es: ' + nombreProductoMasBarato +'\n';
mensaje += 'El promedio de los productos adquiridos es: ' + promedio;
alert(mensaje)
    
