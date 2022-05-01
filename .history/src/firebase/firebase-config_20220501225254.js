import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Change your config below
const firebaseConfig = {
  apiKey: "AIzaSyDFsvS5UHWCS1ILHr6jJovhln8uQPqN2bU",
  authDomain: "reactjs-firebase-87851.firebaseapp.com",
  projectId: "reactjs-firebase-87851",
  storageBucket: "reactjs-firebase-87851.appspot.com",
  messagingSenderId: "142973910041",
  appId: "1:142973910041:web:fc3f1929466321ed5f7e88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Init services
export const db = getFirestore(app);
export const auth = getAuth(app);
