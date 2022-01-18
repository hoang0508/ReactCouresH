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
  useEffect(() => {
    const image = await getApiPhotos();
    console.log(image);
  }, []);
  return (
    <div>
      <div>Hello</div>
    </div>
  );
};

export default Photos2;
