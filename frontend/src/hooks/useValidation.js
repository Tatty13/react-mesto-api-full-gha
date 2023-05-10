import { useState, useEffect, useCallback } from "react";

//валидация реализована после ревью ПР11, буду благодарна за комментарии
function useValidation(requirednputsCount) {
  const [errorMessages, setErrorMessages] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleValidityChange = e => {
    setErrorMessages(messages => ({
      ...messages,
      [e.target.name]: e.target.validationMessage,
    }));
  };

  useEffect(() => {
    const errors = Object.values(errorMessages);
    setIsFormValid(
      errors.length >= requirednputsCount &&
        errors.every(error => error === "")
    );
  }, [errorMessages, requirednputsCount]);

  const resetValidation = useCallback(() => {
    setErrorMessages({});
  }, []);

  return { errorMessages, isFormValid, handleValidityChange, resetValidation };
}

export default useValidation;
