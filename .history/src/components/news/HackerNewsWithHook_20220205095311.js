import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
// import lodash from "lodash";
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  // query => = search input
  const [query, setQuery] = useState("");
  // loading
  const [loading, setLoading] = useState(true);
  // 404
  const [errorMessage, setErrorMessage] = useState("");
  // đường dẫn url
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );
  // Xử lý vấn đề mounted Component
  const isMounted = useRef(true);

  useEffect(() => {
    //
    //cleanup
    return () => {
      // mounted
      isMounted.current = false;
    };
  }, []);
  // useRef ==> ko lỗi cho deps: []
  const handleFetchData = useRef();
  // fetching call API
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      // setTinme out trả về api
      setTimeout(() => {
        // Gán isMounted.current === true
        if (isMounted.current) {
          setHits(response.data?.hits || []);
          setLoading(false);
        }
      }, 3000);
    } catch (err) {
      setLoading(false);
      setErrorMessage(`The error 404 ${err}`);
    }
  };
  // onchange input , debounnce (lodash)
  // const hanldeUpadteQuery = lodash.debounce((e) => {
  //   setQuery(e.target.value);
  // }, 500);
  //Part1: useEffect ==>> phần có search input
  // useEffect(() => {
  //   handleFetchData.current();
  // }, [query]);
  // Part2: useEffect ==> phần nút button
  useEffect(() => {
    handleFetchData.current();
  }, [url]);
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

export default HackerNews;
