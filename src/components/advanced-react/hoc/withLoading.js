import { useState, useEffect } from "react";
import axios from "axios";
function withLoading(Component, url) {
  return (props) => {
    const [news, setNews] = useState([]);
    // if (!data || data.length === 0) return <div>Loading...</div>;
    useEffect(() => {
      const fetchData = async () => {
        const reponse = await axios.get(url);
        setNews(reponse.data?.hits);
      };
      fetchData();
    }, []);
    if (!news || news.length === 0) return <div>Loading...</div>;
    return <Component data={news} {...props}></Component>;
  };
}
export default withLoading;
