import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyDiyn1wNdTXaJPDLRts2EyQDdhFDe1zIRE",

  authDomain: "web40miau.firebaseapp.com",

  projectId: "web40miau",

  storageBucket: "web40miau.appspot.com",

  messagingSenderId: "123681011240",

  appId: "1:123681011240:web:2b59d4ea845ec03e95e71d"

};


export const app= initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
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
          console.log('DATOS INCORRECTOS');
        }
        
    }
})

document.addEventListener('DOMContentLoaded', function () {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn === 'true') {
      window.location.href = 'principal.html';
  }
});
