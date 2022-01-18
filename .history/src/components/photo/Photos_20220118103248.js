import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = (page) => {
  return axios
    .get(`https://picsum.photos/v2/list?${page}&limit=8`)
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
// https://picsum.photos/v2/list?page=2&limit=100
const Photos = () => {
  // useEffect(callback, dependencies)
  // useEffect(function callback() {
  //   // side-effects

  // }, [])
  // cập nhật remder giao diện
  const [randomPhotos, setRandomPhotos] = useState([]);
  // param phân trang
  const [nextPage, setNextPage] = useState(1);
  const handleLoadMorePhotos = () => {
    setNextPage++;
  };
  useEffect(() => {
    // side-effect
    document.title = "Welcome to useEffect";
    getRandomPhotos(nextPage).then((images) => {
      // console.log(images);
      setRandomPhotos(images);
    });
  }, []);
  return (
    <>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos &&
          randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div
              key={item.id}
              className="p-3 bg-white shadow-md rounded-lg h-[200px]"
            >
              <img
                src={item.download_url}
                alt="#"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMorePhotos}
          className="inline-block px-8 py-4 bg-purple-600 text-white"
        >
          Load more
        </button>
      </div>
    </>
  );
};

export default Photos;
