import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  //colref
  const colRef = collection(db, "posts");
  console.log(
    "🚀 ~ file: FirebaseApp.js ~ line 8 ~ FirebaseApp ~ colRef",
    colRef
  );
  useEffect(() => {
    // 1. Get collection data (posts)
    getDocs(colRef)
      .then((snapshot) => {
        console.log(
          "🚀 ~ file: FirebaseApp.js ~ line 16 ~ getDocs ~ snapshot",
          snapshot
        );
        let posts = [];
        snapshot.docs.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        console.log(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div></div>;
};

export default FirebaseApp;
