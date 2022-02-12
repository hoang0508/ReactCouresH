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
      } catch (err) {}
    };
  }, []);
  return (
    <div>
      <div>hello</div>
    </div>
  );
};

export default MovieSearchApp;
