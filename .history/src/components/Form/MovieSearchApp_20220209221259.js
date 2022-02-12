import axios from "axios";
import React, { useEffect } from "react";
// https://api.themoviedb.org/3/movie/550?api_key=6dc4483c77b849ecbf002144ee64855d
// https://api.themoviedb.org/3/search/movie?api_key=6dc4483c77b849ecbf002144ee64855d&query=''
const MovieSearchApp = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=6dc4483c77b849ecbf002144ee64855d&query=''`
        );
        console.log(reponse);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto">
        <input
          type="text"
          className="w-full border border-purple-500 shadow-[ 0px_0px_0px_3px rgba(125,_106,_255,_0.2)] rounded-lg "
          placeholder="Search movie..."
        />
      </div>
    </div>
  );
};

export default MovieSearchApp;
