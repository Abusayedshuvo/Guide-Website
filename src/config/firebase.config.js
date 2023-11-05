// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKW6PYvKoNnxSIeA6QxfImNqhJzVlX9Ic",
  authDomain: "assignment-11-1a432.firebaseapp.com",
  projectId: "assignment-11-1a432",
  storageBucket: "assignment-11-1a432.appspot.com",
  messagingSenderId: "1058474584381",
  appId: "1:1058474584381:web:2188cad304bd2987413d54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
