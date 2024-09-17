// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU4F9_5FKw2mr6h3h0Sbb39_6NbAk3xlw",
  authDomain: "netflix-gpt-f70ba.firebaseapp.com",
  projectId: "netflix-gpt-f70ba",
  storageBucket: "netflix-gpt-f70ba.appspot.com",
  messagingSenderId: "79800254554",
  appId: "1:79800254554:web:8e527e9a15bdb81989d863",
  measurementId: "G-GNCJVMN8W9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
