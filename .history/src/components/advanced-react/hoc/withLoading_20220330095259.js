import { useState, useEffect } from "react";
import axios from "axios";
function withLoading(Component, url) {
  return (props) => {
    const [news, setNews] = useState([]);
    // if (!data || data.length === 0) return <div>Loading...</div>;
    useEffect(() => {
      const fetchData = async () => {
        const reponse = await axios.get(url);
        console.log(reponse.data);
        setNews(reponse.data?.hits);
      };
      fetchData();
    }, []);
    if (!news || news.length === 0) return <div>Loading...</div>;
    return <Component {...props}></Component>;
  };
}
export default withLoading;
