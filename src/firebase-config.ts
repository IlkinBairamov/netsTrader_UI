import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpkp512OQD8QMS949YoHcCqH-vqvfYpdw",
  authDomain: "tradeapp-7184e.firebaseapp.com",
  projectId: "tradeapp-7184e",
  storageBucket: "tradeapp-7184e.appspot.com",
  messagingSenderId: "308440428979",
  appId: "1:308440428979:web:257041e0ac5af40a281bc6",
  measurementId: "G-Y66FNE7MWF"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);