// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAcJ1i1rcmwZZuWZQpDv3T268mdkCYwAI4",
  authDomain: "learn-firebase-18227.firebaseapp.com",
  projectId: "learn-firebase-18227",
  storageBucket: "learn-firebase-18227.appspot.com",
  messagingSenderId: "909685475453",
  appId: "1:909685475453:web:9ee4d7360a57131b4c0914",
  measurementId: "G-CJB6BWCCMZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init services
export const db = getFirestore(app);
