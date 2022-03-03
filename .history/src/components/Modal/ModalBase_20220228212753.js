import React from "react";
import Portal from "../PortalAdvance/Portal";

const ModalBase = ({ visible, onClose, children }) => {
  return (
    <>
      <Portal
        visible={visible}
        onClose={onClose}
        containerClassName="flex items-center justify-centter"
      >
        {children}
      </Portal>
    </>
  );
};

export default ModalBase;
