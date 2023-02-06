import { useState } from "react";

interface UseErrors {
  errors: string[];
  setErrorsArray: (errorsArray: string[]) => void;
  clearErrors: () => void;
}

export const useErrors = (defaultErrors = [""]): UseErrors => {
  const [errors, setErrors] = useState<string[]>(defaultErrors);

  const setErrorsArray = (errorsArray: string[]) => setErrors(errorsArray);

  const clearErrors = () => setErrors([]);

  return {
    errors,
    setErrorsArray,
    clearErrors,
  };
};
