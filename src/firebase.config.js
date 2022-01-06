import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQbmC85HW24kQqwyNrwiRayRrpzfLG2FY",
  authDomain: "ecommerce-app-bdd90.firebaseapp.com",
  projectId: "ecommerce-app-bdd90",
  storageBucket: "ecommerce-app-bdd90.appspot.com",
  messagingSenderId: "725553706043",
  appId: "1:725553706043:web:f0974ed309d0272d2d981e",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
