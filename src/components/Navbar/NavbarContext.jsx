// NavbarContext.js
import React, { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCurrencyModalOpen, setIsCurrencyModalOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const closeAll = () => {
    setIsDropdownOpen(false);
    setIsCurrencyModalOpen(false);
    setIsUserDropdownOpen(false);
  };

  return (
    <NavbarContext.Provider
      value={{
        isDropdownOpen,
        setIsDropdownOpen,
        isCurrencyModalOpen,
        setIsCurrencyModalOpen,
        isUserDropdownOpen,
        setIsUserDropdownOpen,
        language,
        setLanguage,
        selectedCurrency,
        setSelectedCurrency,
        closeAll,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
