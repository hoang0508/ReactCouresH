import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Change your config below
const firebaseConfig = {
  apiKey: "AIzaSyAghjT7o-sUllvpCm-FMIvM7E223prAC0M",
  authDomain: "learning-react-f0b19.firebaseapp.com",
  projectId: "learning-react-f0b19",
  storageBucket: "learning-react-f0b19.appspot.com",
  messagingSenderId: "530382614359",
  appId: "1:530382614359:web:dee145c296fac822c0d812",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Init services
export const db = getFirestore(app);
export const auth = getAuth(app);
