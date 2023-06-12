let infoUsuario = prompt('Ingresa tu nombre: ');
let infoEdad = parseInt(prompt('Ingresa Tu edad: '));

    if (infoEdad <13) {
    alert(infoUsuario+ ' tenes '+infoEdad+ ' años, podes ver peliculas de la seccion niños');
}       else if (infoEdad >=14 && infoEdad <= 18) {
    alert(infoUsuario+' tenes '+infoEdad+ ' años, podes ver peliculas de la seccion adolescentes');
}       else {
    alert(infoUsuario+' tenes '+infoEdad+ ' años, podes ver cualquier pelicula');
}