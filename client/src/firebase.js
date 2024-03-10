// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "teller-ef750.firebaseapp.com",
  projectId: "teller-ef750",
  storageBucket: "teller-ef750.appspot.com",
  messagingSenderId: "118468726375",
  appId: "1:118468726375:web:2f1f38c2a6885dd687cec2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);