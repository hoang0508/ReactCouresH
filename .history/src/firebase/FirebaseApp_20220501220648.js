import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  onSnapshot,
  serverTimestamp,
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
    "🚀 ~ file: FirebaseApp.js ~ line 25 ~ FirebaseApp ~ postId",
    postId
  );
  const [posts, setPosts] = useState([]);
  // useEffect , getDocs
  useEffect(() => {
    // Cách 1. Get collection data (posts)
    // getDocs(colRef)
    //   .then((snapshot) => {
    //     // console.log(
    //     //   "🚀 ~ file: FirebaseApp.js ~ line 16 ~ getDocs ~ snapshot",
    //     //   snapshot
    //     // );
    //     let posts = [];
    //     snapshot.docs.forEach((doc) => {
    //       posts.push({
    //         id: doc.id,
    //         ...doc.data(),
    //       });
    //     });
    //     setPosts(posts);
    //     // console.log(posts);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // Cách 2: Get document ỉn realtime
    onSnapshot(colRef, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(posts);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Submit form db, addDoc , gửi dữ liệu thông qua (addDoc)
  const handleAddPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      title,
      author,
      createAt: serverTimestamp(),
    })
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Delete db
  const handleRemovePost = async (e) => {
    try {
      e.preventDefault();
      // Get document ID
      const colRefDelete = doc(db, "posts", postId);

      console.log(
        "🚀 ~ file: FirebaseApp.js ~ line 86 ~ handleRemovePost ~ colRefDelete",
        colRefDelete
      );
      await deleteDoc(colRefDelete);
      console.log("success");
    } catch (err) {
      console.log(err);
    }
  };
  // Update db : updateDoc
  const handleUpdatePost = async (e) => {
    e.preventDefault();
    const colRefUpdate = doc(db, "posts", postId);
    console.log(
      "🚀 ~ file: FirebaseApp.js ~ line 97 ~ handleUpdatePost ~ colRefUpdate",
      colRefUpdate
    );
    await updateDoc(colRefUpdate, {
      title: "This is a new title from update function",
    });
    console.log("success");
  };
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleAddPost}>
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
            className="p-3 bg-blue-500 text-white text-sm font-medium w-full rounded-lg"
          >
            Add post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleUpdatePost}>
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
            className="p-3 bg-green-500 text-white text-sm font-medium w-full rounded-lg"
          >
            Update post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
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
            className="p-3 bg-red-500 text-white text-sm font-medium w-full rounded-lg"
          >
            Remove post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        {posts &&
          posts.length > 0 &&
          posts.map((item) => (
            <div key={item.id}>
              {item.title} - {item.author}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FirebaseApp;
