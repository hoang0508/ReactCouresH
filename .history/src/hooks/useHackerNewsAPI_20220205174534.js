import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsAPI(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  // loading
  const [loading, setLoading] = useState(true);
  // 404
  const [errorMessage, setErrorMessage] = useState("");
  // đường dẫn url
  const [url, setUrl] = useState(initialUrl);
  // Xử lý vấn đề mounted Component
  const isMounted = useRef(true);

  useEffect(() => {
    //
    isMounted.current = true;
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
      // Gán isMounted.current === true
      if (isMounted.current) {
        setHits(response.data?.hits || []);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setErrorMessage(`The error 404 ${err}`);
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return {
    hits,
    setUrl,
    loading,
    errorMessage,
  };
}
