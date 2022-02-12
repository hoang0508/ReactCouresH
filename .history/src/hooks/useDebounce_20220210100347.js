import { useEffect, useState } from "react";

export default function useDebounce(initiallizeValue, delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(initiallizeValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue("");
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return {
    debounceValue,
  };
}
