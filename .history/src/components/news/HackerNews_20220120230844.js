import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const handleFetchData = useRef();
  handleFetchData.current = async () => {
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${query}`
    );
    setHits(response.data?.hits || []);
  };
  useEffect(() => {
    handleFetchData.current();
  }, []);
  return (
    <div>
      {hits &&
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
