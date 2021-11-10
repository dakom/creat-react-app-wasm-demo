import { useState } from "react";

export const useInput = (initialValue:string) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    onChange: (event:any) => {
      setValue(event.target?.value);
    },
    reset: () => setValue(""),
  };
};