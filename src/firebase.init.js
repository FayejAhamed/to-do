// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3psGzL-f0SF7askKD0cgOfW9bAR9hqXU",
  authDomain: "to-do-73544.firebaseapp.com",
  projectId: "to-do-73544",
  storageBucket: "to-do-73544.appspot.com",
  messagingSenderId: "63877324727",
  appId: "1:63877324727:web:91288129d8c26c46fe9232"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;