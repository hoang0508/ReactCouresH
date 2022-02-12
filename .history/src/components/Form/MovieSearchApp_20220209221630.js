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
          className="w-full p-5 border border-purple-500 shadow-[ 0px_0px_0px_3px rgba(125,_106,_255,_0.2)] rounded-lg "
          placeholder="Search movie..."
        />
      </div>
    </div>
  );
};

const MovieItem = () => {
  return (
    <div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default MovieSearchApp;
