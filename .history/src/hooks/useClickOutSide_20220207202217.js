import { useEffect, useRef, useState } from "react";

export default function useClickOutSide() {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    const handleClickDropdown = (e) => {
      if (nodeRef.current && !nodeRef.current.contains(e.target)) {
        // console.log("click outside dropdown");
        setShow(false);
      }
    };
    document.addEventListener("click", handleClickDropdown);
    return () => {
      document.removeEventListener("click", handleClickDropdown);
    };
  }, []);
  return {
    show,
    setShow,
    nodeRef,
  };
}
