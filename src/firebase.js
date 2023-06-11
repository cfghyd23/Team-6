import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/compat/auth";
import 'firebase/compat/firestore';
import firebaseApp from "./firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "rakhtconnect.firebaseapp.com",
  projectId: "rakhtconnect",
  storageBucket: "rakhtconnect.appspot.com",
  messagingSenderId: "767427242361",
  appId: "1:767427242361:web:6209537af0d751a31667a8",
  measurementId: "G-68N0YKECXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export {googleProvider};