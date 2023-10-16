// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2ae1e.firebaseapp.com",
  projectId: "mern-estate-2ae1e",
  storageBucket: "mern-estate-2ae1e.appspot.com",
  messagingSenderId: "609892513155",
  appId: "1:609892513155:web:76cc1fc177d7d86d2472b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);