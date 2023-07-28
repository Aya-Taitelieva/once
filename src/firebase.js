// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuiifLKBDiIZ5NKe3B0OoOfngfQ2uSpuA",
  authDomain: "hackathon-b1fa1.firebaseapp.com",
  projectId: "hackathon-b1fa1",
  storageBucket: "hackathon-b1fa1.appspot.com",
  messagingSenderId: "438791574203",
  appId: "1:438791574203:web:84f7e0a611a2baef7d4f9e",
  measurementId: "G-QVPXPGGMVJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getFirestore(app)