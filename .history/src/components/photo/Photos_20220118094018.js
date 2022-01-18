import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = () => {
  return axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      // handle success
      // console.log(response);
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
  const [randomPhotos, setRandomPhotos] = useState([]);
  useEffect(() => {
    // side-effect
    document.title = "Welcome to useEffect";
    getRandomPhotos().then((images) => {
      // console.log(images);
      setRandomPhotos(images);
    });
  }, []);
  return (
    <>
      <div>
        {randomPhotos &&
          randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div>
              <div key={index}>{item.id}</div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Photos;
