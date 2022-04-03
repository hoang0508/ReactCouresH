import { createContext, useContext } from "react";
import useToggle from "./useToggle";

const AccordionContext = createContext();
const AccordionProvider = (props) => {
  const { value: show, handleToggleValue: handleToggleShow } = useToggle();

  const values = { show, handleToggleShow };
  return <AccordionContext value={values} {...props}></AccordionContext>;
};

function useAccordion() {
  const context = useContext(AccordionContext);
  if (typeof context === "undefined")
    throw new Error("useAccordion must be used within AcordionProvider");
  return context;
}

export { AccordionProvider, useAccordion };
