import React from "react";
import { useGellary } from "../contexts/gellary-context";

const PhotoList = () => {
  const { photos } = useGellary();
  console.log(photos);
  return <div>PhotoList</div>;
};

export default PhotoList;
