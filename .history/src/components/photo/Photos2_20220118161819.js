import React, { useEffect, useState } from "react";
import axios from "axios";

const getApiPhotos = async (page) => {
  try {
    const reponse = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return reponse.data;
  } catch (error) {
    console.log(error);
  }
};

const Photos2 = () => {
  // hiển thị data => useState
  const [randomImage, setRandomImage] = useState([]);
  // phân trang load more
  const [nextPage, setNextPage] = useState(1);
  const handleClickLoad = async () => {
    const images = await getApiPhotos(nextPage);
    // data concan array
    const newPhotos = [...randomImage, ...images];
    setRandomImage(newPhotos);
  };
  useEffect(() => {
    async function fetchData() {
      handleClickLoad();
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="grid grid-cols-4 gap-8 p-8">
        {randomImage &&
          randomImage.length > 0 &&
          randomImage.map((item, index) => (
            <div
              key={item.id}
              className="bg-white shadow-md p-4 h-[200px]  rounded-lg"
            >
              <img
                src={item.download_url}
                alt="#"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={() => handleClickLoad()}
          className="inline-block bg-purple-600 text-white py-4 px-8"
        >
          Load more
        </button>
      </div>
    </>
  );
};

export default Photos2;
