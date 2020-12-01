import { createContext, useState } from "react";

export const TeaContext = createContext({});

//TeaMate or Party, submittedSearch, selectedCardID,
export function TeaProvider({ children }) {
  const [searchType, setSearchType] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [selectedCardID, setSelectedCardID] = useState(null);

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
