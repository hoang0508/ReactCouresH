import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
const createPortalWrapper = () => {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
};
const portalWrapperElm = createPortalWrapper();
const Portal = ({
  containerClassName = "",
  bodyClassName = "",
  containerStyle = {},
  bodyStyle = {},
  onClose = () => {},
  visible = false,
  children,
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElm);
  }, []);
  const renderContent = (
    // ${
    //   visible ? "" : "opacity-0 invisible"
    // }
    <div
      className={`fixed inset-0 z-[9999] ${containerClassName}`}
      style={containerStyle}
    >
      <div
        className="absolute inset-0 bg-black overlay bg-opacity-20"
        onClick={onClose}
      ></div>
      <div
        className={`relative z-10 content ${bodyClassName}`}
        style={bodyStyle}
      >
        {children}
      </div>
    </div>
  );
  return createPortal(renderContent, portalWrapperElm);
};

Portal.propTypes = {
  containerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default Portal;
