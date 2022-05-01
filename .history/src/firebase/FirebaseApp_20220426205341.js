import { collection } from "firebase/firestore";
import React from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  //colref
  const colRef = collection(db, "posts");
  console.log(
    "🚀 ~ file: FirebaseApp.js ~ line 8 ~ FirebaseApp ~ colRef",
    colRef
  );

  return <div></div>;
};

export default FirebaseApp;
