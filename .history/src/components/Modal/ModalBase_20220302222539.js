import React from "react";
import Portal from "../PortalAdvance/Portal";
import { CSSTransition } from "react-transition-group";

const ModalBase = ({ visible, onClose, children, bodyClassName = "" }) => {
  return (
    <>
      {/* Css Transition Giải quyết vấn đề xuất hiện components modal render */}
      <CSSTransition in={visible} timeout={250} classNames="zoom" unmountOnExit>
        {(status) => (
          <Portal
            visible={status !== "exited"}
            onClose={onClose}
            containerClassName="flex items-center fixed inset-0 z-[9999] justify-center"
            bodyStyle={{ transition: "all 250ms" }}
            bodyClassName={"relative z-10"}
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
