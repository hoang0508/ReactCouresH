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
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5">
        <form>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your title"
          />
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your author"
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white text-sm font-semibold"
          ></button>
        </form>
      </div>
    </div>
  );
};

export default FirebaseApp;
