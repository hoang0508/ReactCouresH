import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const handleFetchData = useRef();
  handleFetchData.current = async () => {
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${query}`
    );
    setHits(response.data?.hits || []);
  };
  useEffect(() => {
    handleFetchData.current();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        className="border border-green-500 text-black p-5 mb-5"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {!loading &&
        hits &&
        hits.length > 0 &&
        hits.map((item, index) => (
          <>
            <h3 key={item.title}>{item.title}</h3>
          </>
        ))}
    </div>
  );
};

export default HackerNews;
