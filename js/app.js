import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
//import { getAuth } from "./firebase.js";

const loginForm = document.querySelector("#formLogin");

loginForm.addEventListener("submit", async(e) => {
    e.preventDefault();

    const email = loginForm["correo"].value;
    const password = loginForm["contrasena"].value;

    console.log(`Correo: ${email}, Contraseña: ${password}`);

    try{
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        console.log("Bienvenido "+ userCredentials.user.email);
        window.location.href = "principal.html";
    }
    catch(error){
        console.log(error);
        if(error.code === 'auth/invalid-login-credentials'){
          console.log('DATOS INCORRECTOOOOS:v');
        }
        
    }
})

document.addEventListener('DOMContentLoaded', function () {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn === 'true') {
      window.location.href = 'principal.html';
  }
});
