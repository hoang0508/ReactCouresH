import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Change your config below
const firebaseConfig = {
  apiKey: "AIzaSyCGTxxkKf6DA8cwy_sJtjQ2p8oKaiMU1LQ",
  authDomain: "test-e2673.firebaseapp.com",
  projectId: "test-e2673",
  storageBucket: "test-e2673.appspot.com",
  messagingSenderId: "61713459091",
  appId: "1:61713459091:web:e580977edb2cbbaed1ea66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Init services
export const db = getFirestore(app);
export const auth = getAuth(app);
