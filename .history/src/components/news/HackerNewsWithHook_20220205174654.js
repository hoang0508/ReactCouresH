import React, { useState } from "react";
import useHackerNewsAPI from "../../hooks/useHackerNewsAPI";
// import lodash from "lodash";
const HackerNewsWithHook = () => {
  // query => = search input
  const [query, setQuery] = useState("");
  const { hits, setUrl, loading, errorMessage } = useHackerNewsAPI(
    `https://hn.algolia.com/api/v1/search?query=''`,
    { hits: [] }
  );
  return (
    <div className="bg-white mx-auto mt-5 p-5 shadow-md w-[50%]">
      <div className="mb-4 flex gap-x-5">
        {/* input sự kiện onChange */}
        <input
          type="text"
          className="border border-gray-200 rounded-md block w-full p-5 focus:border-blue-500 ease-linear transition-all"
          placeholder="Search..."
          defaultValue={query}
          // onChange={(e) => hanldeUpadteQuery(e)}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* Nút button */}
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="p-5 bg-blue-500 text-white rounded-md flex-shrink-0"
        >
          Fetching
        </button>
      </div>
      {/* loading */}
      {loading && (
        <div className="loading mx-auto my-10 w-8 h-8 rounded-full  border-blue-500 border-4 border-r-transparent animate-spin"></div>
      )}
      {/* Check lỗi 404 */}
      {!loading && errorMessage && <p>The 404 not found</p>}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits &&
          hits.length > 0 &&
          hits.map((item, index) => {
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

export default HackerNewsWithHook;
