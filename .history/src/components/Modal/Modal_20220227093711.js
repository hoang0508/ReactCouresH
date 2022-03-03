import React from "react";
import ReactDOM from "react-dom";
// createPortal
const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5 modal">
      <div className="absolute inset-0 bg-black bg-opacity-25 overlay"></div>
      <div className="relative z-10 p-10 bg-white rounded-lg modal-content w-full max-w-[482px]">
        <span className="absolute top-0 right-0 cursor-pointer">Close</span>
        <h2 className="mb-5 text-4xl font-medium text-center text-black">
          Welcome Back!
        </h2>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal;
