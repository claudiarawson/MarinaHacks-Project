// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcse7ANA2gDaDWEkoGcdEgvSHXu1sHM84",
  authDomain: "comm-ceb3b.firebaseapp.com",
  projectId: "comm-ceb3b",
  storageBucket: "comm-ceb3b.appspot.com",
  messagingSenderId: "930650848827",
  appId: "1:930650848827:web:1a97d6f953d93d3cbea61e",
  measurementId: "G-HZBYJPJDSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};