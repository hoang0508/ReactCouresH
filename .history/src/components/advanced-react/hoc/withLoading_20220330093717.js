import { useState, useEffect } from "react";
import axios from "axios";
function withLoading(Component) {
  return (props) => {
    const [news, setNews] = useState([1, 2, 3, 4, 5]);
    // if (!data || data.length === 0) return <div>Loading...</div>;
    useEffect(() => {
      const fetchData = async () => {
        const reponse = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=react`
        );
        console.log(reponse.data);
      };
      fetchData();
    }, []);
    return <Component {...props}></Component>;
  };
}
export default withLoading;
