import React, { useEffect } from "react";
import axios from "axios";
const getRandomPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      // handle success
      console.log(response);
      return response.data;
    })
    .catch((error) => {
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
    getRandomPhotos();
  }, []);
  return (
    <>
      <div>Photos</div>
    </>
  );
};

export default Photos;
