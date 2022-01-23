import React, { useEffect, useState, useRef, useReducer } from "react";
import axios from "axios";

// import lodash from "lodash";

// Khởi tạo initial useReducer
const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};
// hàm useReducer
const hackerNewsReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_ERROR": {
      return { ...state, errorMessage: action.payload };
    }
    default:
      break;
  }
};
const HackerNewsWithReducer = () => {
  // useReducer
  const [state, ditpatch] = useReducer(hackerNewsReducer, initialState);
  // useRef ==> ko lỗi cho deps: []
  const handleFetchData = useRef();
  // fetching call API
  handleFetchData.current = async () => {
    // ditpach chức năng SET_LOADING
    ditpatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(state.url);
      // ditpach chức năng SET_DATA
      ditpatch({
        type: "SET_DATA",
        payload: response.data?.hits || [],
      });
      // ditpach chức năng SET_LOADING
      ditpatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (err) {
      // ditpach chức năng SET_LOADING
      ditpatch({
        type: "SET_LOADING",
        payload: false,
      });
      // ditpatch error
      ditpatch({
        type: "SET_ERROR",
        payload: `The error 404`,
      });
      // setErrorMessage(`The error 404 ${err}`);
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, []);
  return (
    <div className="bg-white mx-auto mt-5 p-5 shadow-md w-[50%]">
      <div className="mb-4 flex gap-x-5">
        {/* input sự kiện onChange */}
        <input
          type="text"
          className="border border-gray-200 rounded-md block w-full p-5 focus:border-blue-500 ease-linear transition-all"
          placeholder="Search..."
          defaultValue={state.query}
          // onChange={(e) => hanldeUpadteQuery(e)}
          // onChange={(e) => setQuery(e.target.value)}
        />
        {/* Nút button */}
        <button
          // onClick={() =>
          //   setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          // }
          className="p-5 bg-blue-500 text-white rounded-md flex-shrink-0"
        >
          Fetching
        </button>
      </div>
      {/* loading */}
      {state.loading && (
        <div className="loading mx-auto my-10 w-8 h-8 rounded-full  border-blue-500 border-4 border-r-transparent animate-spin"></div>
      )}
      {/* Check lỗi 404 */}
      {!state.loading && state.errorMessage && (
        <p className="text-[#EB3349]">The 404 not found</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
            // check điều kiện khi ko có title
            if (!item.title || item.title.length <= 0) {
              return null;
            }
            // render kết quả data
            return (
              <h3 className="bg-gray-200 p-4 rounded-md" key={item.title}>
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithReducer;
