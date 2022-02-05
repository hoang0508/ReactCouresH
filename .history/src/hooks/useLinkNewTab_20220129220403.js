import React, { useEffect, useRef } from "react";

const useLinkNewTab = () => {
  const contentRef = useRef(null);
  useEffect(() => {
    const links = contentRef.current.querySelectorAll("a");
    links.forEach((item) => item.setAttribute("target", "_blank"));
  }, []);
  return {
    contentRef,
  };
};

export default useLinkNewTab;
