import { useState } from "react";

function useInput(initialValues) {
  const [values, setValues] = useState(initialValues);

  function handleInputChange(evt) {
    setValues({ ...values, [evt.target.name]: evt.target.value });
  }

  return { values, setValues, handleInputChange };
}

export default useInput;
