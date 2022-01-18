import React, { useEffect, useState } from "react";
import axios from "axios";

const getApiPhotos = async () => {
  try {
    const reponse = await axios.get(
      `https://picsum.photos/v2/list?page=1&limit=8`
    );
    return reponse.data;
  } catch (error) {
    console.log(error);
  }
};

const Photos2 = () => {
  const [randomImage, setRandomImage] = useState([]);
  useEffect(async () => {
    const image = await getApiPhotos();
    setRandomImage(image);
  }, []);
  return (
    <div className="grid grid-cols-4 gap-8">
      {randomImage &&
        randomImage.length > 0 &&
        randomImage.map((item, index) => (
          <div key={item.id} className="bg-white shadow-md p-4 h-[200px]">
            <img
              src={item.download_url}
              alt="#"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
    </div>
  );
};

export default Photos2;
