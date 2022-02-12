import { useEffect, useState } from "react";

export default function useDebounce() {
  const [debounceValue, setDebounceValue] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue("");
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return {
    debounceValue,
  };
}
