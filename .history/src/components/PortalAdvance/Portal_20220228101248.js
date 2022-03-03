import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const createPortalWrapper = () => {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
};
const portalWrapperElm = createPortalWrapper();
const Portal = () => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElm);
  }, []);
  const renderContent = (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis
      sunt consequatur numquam quasi, quis nulla labore quos odit saepe esse
      dignissimos illo aliquid aspernatur hic aut suscipit in atque.
    </div>
  );
  return createPortal(renderContent, portalWrapperElm);
};

export default Portal;
