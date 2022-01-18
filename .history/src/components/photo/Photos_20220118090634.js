import React, { useEffect } from "react";
import axios from "axios";
const GetPhotos = () => {
  axios
    .get("https://picsum.photos/v2/list")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
const Photos = () => {
  // useEffect(callback, dependencies)
  // useEffect(function callback() {
  //   // side-effects

  // }, [])
  useEffect(() => {
    // side-effect
    document.title = "Welcome to useEffect";
    GetPhotos();
  }, []);
  return (
    <>
      <div>Photos</div>
    </>
  );
};

export default Photos;
