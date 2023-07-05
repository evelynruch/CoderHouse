// Crear una clase Usuario que:
// tenga las propiedades nombre, mail, contraseña, tenga un metodo para verificar si la contraseña es correcta:
// Por ejemplo, para el usuario Juan con contraseña juancito123, 
// let usuario1 = new Usuario … etc
// Si ejecuto el metodo usuario1.verificar(‘juancito123’), se debe mostrar por alert o console log que 
// la contraseña es correcta.
// Si se ejecuta con usuario1.verificar(‘futbol97’), se debe alertar que la contraseña es incorrecta

// class Usuario {
//     constructor(nombre, mail, contrasenia){
//         this.nomUsu = nombre;
//         this.mailUsu = mail;
//         this.contraUsu = contrasenia;
//     }
//     validarContrasenia(){
//         if(this.contraUsu == "juancito123"){
//             console.log("Contraseña correcta");
//         } 
//         else {
//             console.log(`${usuario1.contraUsu} no es una contrasenia valida`)
//         }
//     }
//   }
//   let usuario1 = new Usuario ('Juan', 'juan@mail.com', 'juancito123gffggfgffg')
//   usuario1.validarContrasenia()

// class Usuario {
//     constructor(nombre, mail, contrasenia) {
//       this.nomUsu = nombre;
//       this.mailUsu = mail;
//       this.contraUsu = contrasenia;
//     }
//     validarContrasenia() {
//       if (this.contraUsu === this.contraseniaValida) {
//         console.log("Contraseña correcta");
//       } else {
//         console.log(`${this.contraUsu} no es una contraseña válida`);
//       }
//     }
//   }
  
//   let usuarios = [
//     new Usuario('Juan', 'juan@mail.com', 'juancito123'),
//     new Usuario('María', 'maria@mail.com', 'maria123'),
//     new Usuario('Pedro', 'pedro@mail.com', 'pedro456')
//   ];
  
//   usuarios.forEach(usuario => {
//     usuario.contraseniaValida = generarContraseniaValida(); // Genera una contraseña válida para cada usuario
//     usuario.validarContrasenia();
//   });
  
//   function generarContraseniaValida() {
//     const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let contrasenia = '';
//     const longitud = 10; // Longitud de la contraseña generada
  
//     for (let i = 0; i < longitud; i++) {
//       const indice = Math.floor(Math.random() * caracteres.length);
//       contrasenia += caracteres.charAt(indice);
//     }
  
//     return contrasenia;
//   }

  
  class Usuario {
    constructor(nombre, mail, contrasenia) {
      this.nomUsu = nombre;
      this.mailUsu = mail;
      this.contraUsu = contrasenia;
      this.tipoDeUsuario = ''
    }
    validarContrasenia() {
      let contraseniaValida;
  
      switch (this.nomUsu) {
        case 'maria':
          contraseniaValida = 'maria1979';
          break;
        case 'jose':
          contraseniaValida = 'jose1983';
          break;
        case 'uservete':
          contraseniaValida = '1234';
          break;
        default:
          contraseniaValida = '';
          break;
      }
  
      if (this.contraUsu === contraseniaValida) {
        console.log('Contraseña correcta');
      } else {
        console.log(`${this.contraUsu} no es una contraseña válida`);
      }
    }
  }
  
  let usuariosCreados = [
    new Usuario('maria', 'maria@mail.com', 'maria1979'),
    new Usuario('jose', 'jose@mail.com', 'jose1983'),
    new Usuario('uservete', 'patitas@mail.com', '1234')
  ];
  
  usuariosCreados.forEach(function(usuarioFn) {
    usuarioFn.validarContrasenia();
  });

let nombre = prompt('Ingrese su nombre de usuario: ');

  
  
  
  


    