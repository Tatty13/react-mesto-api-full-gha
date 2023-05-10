import { useState } from "react";

function useInput(initialValues) {
  const [values, setValues] = useState(initialValues);

  function handleChange(evt) {
    setValues({ ...values, [evt.target.name]: evt.target.value });
  }

  return [values, setValues, handleChange];
}

export default useInput;
