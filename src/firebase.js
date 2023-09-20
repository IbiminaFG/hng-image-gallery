// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJgPDjDq3hD740r7M4bYdGBmgLFwjj-S0",
  authDomain: "hng-image-gallery-d678a.firebaseapp.com",
  projectId: "hng-image-gallery-d678a",
  storageBucket: "hng-image-gallery-d678a.appspot.com",
  messagingSenderId: "629257563516",
  appId: "1:629257563516:web:326fdd6e47ab74184ec8f9",
  measurementId: "G-QTE6XKMNZ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
