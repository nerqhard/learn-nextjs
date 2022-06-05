import { initializeApp } from "firebase/app";
import{ getFirestore } from "firebase/firestore";

// Replace these value with your firebase config data
const firebaseConfig = {
    apiKey: "AIzaSyBL9jlIT-nV459lXW2jl7SzKktLpYoBEmo",
    authDomain: "ha-tap-code.firebaseapp.com",
    databaseURL: "https://ha-tap-code-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ha-tap-code",
    storageBucket: "ha-tap-code.appspot.com",
    messagingSenderId: "350172113233",
    appId: "1:350172113233:web:465abd3c067446c2d44b70",
    measurementId: "G-5ZPE45CSMK"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);