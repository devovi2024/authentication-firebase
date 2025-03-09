import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  

const firebaseConfig = {
  apiKey: "AIzaSyBuhWW2LCWRauKQYNFoHpUbYqD-q7a8ThU",
  authDomain: "auth1-6fee7.firebaseapp.com",
  projectId: "auth1-6fee7",
  storageBucket: "auth1-6fee7.firebasestorage.app",
  messagingSenderId: "24149669332",
  appId: "1:24149669332:web:fed636a139e6da971dd241"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;  