import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "../PortalAdvance/Portal";

const TooltipAdvance = ({ title, children }) => {
  const [visible, setVisible] = useState(false);
  const [coord, setCoord] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const handleMouseEnter = (e) => {
    setCoord(e.targer.getBoundingClientRect());
    setVisible(true);
  };
  const handleMouseLeave = (e) => {
    setVisible(false);
  };
  return (
    <div className="relative inline-block">
      <CSSTransition in={visible} unmountOnExit timeout={250}>
        {(status) => (
          <Portal visible={status !== "exited"}>
            <div
              className="bg-black text-white p-3 rounded-lg inline-block text-xs w-full max-w-[200px] absolute -translate-y-full -translate-x-2/4"
              style={{
                top: coord.top - coord.height / 2,
                left: coord.left + coord.width / 2,
              }}
            >
              {children}
            </div>
          </Portal>
        )}
      </CSSTransition>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {title}
      </div>
    </div>
  );
};

export default TooltipAdvance;
