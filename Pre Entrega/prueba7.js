// Portal de Usuarios de tipo Veterinario
let listaVetes = []; // Arreglo para almacenar la lista de Veterinarios

class UsuarioVetes {
  constructor(nombreVete, apellidoVete, mailVete, contraseniaVete) {
    this.nomVet = nombreVete;
    this.apeVet = apellidoVete;
    this.mailVet = mailVete;
    this.contraVet = contraseniaVete; 
  }
}

// Creación de instancias de UsuarioVetes
let vete = new UsuarioVetes('daniel', 'gallegos', 'daniel@mail.com', 'daniel123');
let vete2 = new UsuarioVetes('roman', 'maluma', 'roman@mail.com', 'roman123');
let vete3 = new UsuarioVetes('silvina', 'rodriguez', 'silvina@mail.com', 'silvina123');
let vete4 = new UsuarioVetes('magdalena', 'avellaneda', 'magdalena@mail.com', 'magda123');
let vete5 = new UsuarioVetes('ruben', 'rivera', 'ruben@mail.com', 'ruben123');

// Agregar clientes a la lista de clientes
listaVetes.push(vete, vete2, vete3, vete4, vete5);

function buscarVetePorApellido(listaVetes, apellidoVeterinario) {
  return listaVetes.find(elVete => elVete.apeVet === apellidoVeterinario);
}
