import { useEffect, useRef, useState } from "react";
export default function useHover() {
  // useState
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);
  // useEffect
  useEffect(() => {
    // hàm sự kiện di chuyển vào
    const handleMouseOver = () => {
      setHovered(true);
    };
    // hàm sự kiện di chuyển ra
    const handleMouseOut = () => {
      setHovered(false);
    };
    // đặt biến == truy xuất ref
    const dom = nodeRef.current;
    if (dom) {
      dom.addEvenListener("mouseover", handleMouseOver);
      dom.addEvenListener("mouseout", handleMouseOut);
    }
    // clean up
    return () => {
      dom.removeEvenListener("mouseover", handleMouseOver);
      dom.removeEvenListener("mouseout", handleMouseOut);
    };
  }, []);
  // trả về
  return {
    hovered,
    nodeRef,
  };
}
