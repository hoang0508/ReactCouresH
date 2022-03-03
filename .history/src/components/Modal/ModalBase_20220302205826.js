import React from "react";
import Portal from "../PortalAdvance/Portal";
import { CSSTransition } from "react-transition-group";

const ModalBase = ({ visible, onClose, children }) => {
  return (
    <>
      {/* Css Transition Giải quyết vấn đề xuất hiện components modal render */}
      <CSSTransition in={visible} timeout={250} classNames="zoom" unmountOnExit>
        {(status) => (
          <Portal
            visible={status !== "exited"}
            onClose={onClose}
            containerClassName="flex items-center justify-center"
            bodyStyle={{ transition: "all 250ms" }}
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
