import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  //colref
  const colRef = collection(db, "posts");
  // console.log(
  //   "🚀 ~ file: FirebaseApp.js ~ line 8 ~ FirebaseApp ~ colRef",
  //   colRef
  // );
  // State
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [postId, setPostId] = useState("");
  console.log(
    "🚀 ~ file: FirebaseApp.js ~ line 22 ~ FirebaseApp ~ postId",
    postId
  );
  // useEffect , getDocs
  useEffect(() => {
    // 1. Get collection data (posts)
    getDocs(colRef)
      .then((snapshot) => {
        // console.log(
        //   "🚀 ~ file: FirebaseApp.js ~ line 16 ~ getDocs ~ snapshot",
        //   snapshot
        // );
        let posts = [];
        snapshot.docs.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        // console.log(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Submit form db, addDoc , gửi dữ liệu thông qua (addDoc)
  const handleAddPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      title,
      author,
    })
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleRemovePost = async (e) => {
    e.preventDefault();
    // Get document ID
    const colRefDelete = doc(db, "posts", postId);
    await deleteDoc(colRefDelete);
    console.log("success");
  };
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5">
        <form onSubmit={(e) => handleAddPost(e)}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white text-sm font-medium rounded-lg w-full"
          >
            Add post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5">
        <form onSubmit={handleRemovePost}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your id"
            name="postId"
            onChange={(e) => setPostId(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 bg-red-500 text-white text-sm font-medium rounded-lg w-full"
          >
            Remove post
          </button>
        </form>
      </div>
    </div>
  );
};

export default FirebaseApp;
