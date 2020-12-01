import React from "react";

export const TeaContext = React.createContext({});

//TeaMate or Party, submittedSearch, selectedCardID,
export function TeaProvider({ children }) {
  const [searchType, setSearchType] = React.useState(""); //Can be one of "TeaMate" or "TeaParty"
  const [submittedSearch, setSubmittedSearch] = React.useState(""); //Can be one of "TeaMate" or "TeaParty"(set when search button is clicked)
  const [selectedCardID, setSelectedCardID] = React.useState(null); //null when unselected, otherwise set to some ID we assign to the match cards. 

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
