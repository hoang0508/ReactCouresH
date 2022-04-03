import { createContext } from "react";
import useToggle from "./useToggle";

const AccordionContext = createContext();
const AccordionProvider = (props) => {
  const { value: show, handleToggleValue: handleToggleShow } = useToggle();

  const values = { show, handleToggleShow };
  return <AccordionContext value={values} {...props}></AccordionContext>;
};
