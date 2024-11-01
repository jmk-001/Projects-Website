"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
import { LANG_KEY } from "../../data/Constants";

// Define the shape of the context
interface SelectionContextType {
  langSelected: number;
  setLangSelected: (mode: number) => void;
}

// Create the context with default values
const SelectionContext = createContext<SelectionContextType>({
  langSelected: LANG_KEY["none"],
  setLangSelected: () => {},
});

// Define the type for props (including children)
interface SelectionProviderProps {
  children: ReactNode;
}

// Context provider component
export const SelectionProvider: React.FC<SelectionProviderProps> = ({
  children,
}) => {
  const [langSelected, setLangSelected] = useState<number>(0);

  return (
    <SelectionContext.Provider
      value={{
        langSelected,
        setLangSelected,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

// Custom hook to use the context
export const useSelection = () => {
  return useContext(SelectionContext);
};
