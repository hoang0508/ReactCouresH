import React from "react";
import Portal from "../PortalAdvance/Portal";
import { CSSTransition } from "react-transition-group";

const ModalBase = ({ visible, onClose, children }) => {
  return (
    <>
      {/* Css Transition Giải quyết vấn đề xuất hiện components modal render */}
      <CSSTransition in={visible} timeout={250} unmountOnExit classNames="zoom">
        {(status) => {
          <Portal
            visible={status !== "exited"}
            onClose={onClose}
            containerClassName="flex items-center justify-center"
          >
            {children}
          </Portal>;
        }}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
