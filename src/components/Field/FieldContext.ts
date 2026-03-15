import { createContext, useContext } from "react";

export type FieldContextType = {
  id?: string;
  required?: boolean;
};

export const FieldContext = createContext<FieldContextType | undefined>(
  undefined,
);

export const useFieldContext = () => {
  const context = useContext(FieldContext);
  if (!context) {
    throw new Error("useFieldContext must be used within a FieldProvider");
  }
  return context;
};
