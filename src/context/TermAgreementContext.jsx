import React, { createContext, useState, useContext } from "react";

const TermAgreementContext = createContext();

export const TermAgreementProvider = ({ children }) => {
  const [agreedTerms, setAgreedTerms] = useState({
    terms_of_service: false,
    privacy_policy: false,
  });
  console.log(agreedTerms);

  const toggleAgreement = (term) => {
    setAgreedTerms((prevAgreements) => ({
      ...prevAgreements,
      [term]: !prevAgreements[term],
    }));
  };

  return (
    <TermAgreementContext.Provider value={{ agreedTerms, toggleAgreement }}>
      {children}
    </TermAgreementContext.Provider>
  );
};

export const useTermAgreement = () => {
  return useContext(TermAgreementContext);
};
