// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYkTj5Eq_Kas_JjnaLmcY4LZUkzdH5dfw",
    authDomain: "fir-authentication-143b8.firebaseapp.com",
    projectId: "fir-authentication-143b8",
    storageBucket: "fir-authentication-143b8.appspot.com",
    messagingSenderId: "490658174511",
    appId: "1:490658174511:web:302b36f46cff2096aad8da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;