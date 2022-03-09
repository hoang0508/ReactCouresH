import React from "react";
import { useGellary } from "../contexts/gellary-context";

const PhotoList = () => {
  const { photos } = useGellary();
  console.log(photos);
  return (
    <div className="px-5 py-10">
      <div className="grid grid-cols-3 gap-5">
        {photos &&
          photos.length > 0 &&
          photos.map((item, index) => (
            <PhotoItem key={item.id} info={item}></PhotoItem>
          ))}
      </div>
    </div>
  );
};

const PhotoItem = () => {};

export default PhotoList;
