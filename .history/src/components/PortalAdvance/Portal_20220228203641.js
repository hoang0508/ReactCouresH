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
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElm);
  }, []);
  const renderContent = (
    <div
      className={`fixed inset-0 z-[9999] ${
        visible ? "" : "opacity-0 invisible"
      } ${containerClassName}`}
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis
        sunt consequatur numquam quasi, quis nulla labore quos odit saepe esse
        dignissimos illo aliquid aspernatur hic aut suscipit in atque.
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
};

export default Portal;
