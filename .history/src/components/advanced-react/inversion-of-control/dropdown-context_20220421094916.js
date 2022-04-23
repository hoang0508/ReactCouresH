import { createContext, useContext } from "react";

// Khởi tạo context
const DropdownContext = createContext();
// Cung cấp
const DropdownProvider = (props) => {
  return (
    <DropdownContext.Provider value={props}>
      {props.children}
    </DropdownContext.Provider>
  );
};

// nhận giá trị cung cấp
function useDropdown() {
  const context = useContext(DropdownContext);
  if (typeof context === "undefined")
    throw new Error("useDropdown must be used within DropdownProvider");
  return context;
}

export { useDropdown, DropdownProvider };
