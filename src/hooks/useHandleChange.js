import { useState } from "react";

export default function useHandleChange(initialValues) {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    // Cách 2 : operator
    const type = e.target.type;
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return {
    values,
    handleChange,
  };
}
