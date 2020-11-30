import React from "react";

export const TeaContext = React.createContext({});

//TeaMate or Party, submittedSearch, selectedCardID,
export function TeaProvider({ children }) {
  const [searchType, setSearchType] = React.useState("");
  const [submittedSearch, setSubmittedSearch] = React.useState("");
  const [selectedCardID, setSelectedCardID] = React.useState(null);

  return (
    <TeaContext.Provider
      value={{
        searchType,
        setSearchType,
        submittedSearch,
        setSubmittedSearch,
        selectedCardID,
        setSelectedCardID,
      }}
    >
      {children}
    </TeaContext.Provider>
  );
}
