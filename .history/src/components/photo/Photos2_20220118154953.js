import React from "react";
import axios from "axios";

const getApiPhotos = async () => {
  try {
    const reponse = axios.get(`https://picsum.photos/v2/list?page=1&limit=8`);
    console.log(reponse);
  } catch (error) {
    console.log(error);
  }
};

const Photos2 = () => {
  return (
    <div>
      <div>Hello</div>
    </div>
  );
};

export default Photos2;
