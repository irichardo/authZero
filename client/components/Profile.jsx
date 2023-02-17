import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import auth0 from 'auth0-js';
const Profile = () =>{
    const {user} = useAuth0();
    console.log(user);
   console.log(auth0)



//    const auth0Client = new auth0.WebAuth({
//     domain: 'dev-b8yq8ptfeuznpe54.us.auth0.com',
//     clientID: '8WD8QRGog7jPkN5avRvUxHhpLv8FYoJ9'
//    });
   
//    auth0Client.login({
//      realm: 'Username-Password-Authentication', // Opcional, si utilizas una conexión personalizada
//      username: 'tu_usuario',
//      password: 'tu_contraseña',
//      audience: 'https://api.example.com', // El identificador de audiencia de la API que deseas acceder
//      scope: 'read:messages', // Los permisos que deseas solicitar para el token
//    }, (err, authResult) => {
//      if (err) {
//        console.error('Error al iniciar sesión:', err);
//      } else {
//        console.log('Token de acceso:', authResult.accessToken);
//      }
//    });

//     auth0.checkSession({}, function (err, result) {
//         if (err) {
//           console.log('Error al obtener el token de acceso:', err);
//         } else {
//           console.log('Token de acceso obtenido:', result.accessToken);
//           // Usa el token de acceso para autenticarte con la pasarela de pagos
//         }
//       });

    return <div>  
        {
        user?
        <h1>{`Hola! ${(user.given_name)}`}</h1>
        :'Datos no encontrados'
        }
        {
           


        }
        
        
    </div>
}

export default Profile