import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  //Here where you configure your own Firebase configs
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
