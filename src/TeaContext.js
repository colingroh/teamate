import React from "react";
import { createContext, useState } from "react";

export const TeaContext = createContext({});

//TeaMate or Party, submittedSearch, selectedCardID,
export function TeaProvider({ children }) {
  const [searchType, setSearchType] = React.useState(""); //Can be one of "TeaMate" or "TeaParty"
  const [submittedSearch, setSubmittedSearch] = React.useState(""); //Can be one of "TeaMate" or "TeaParty"(set when search button is clicked)
  const [selectedCardID, setSelectedCardID] = React.useState(null); //null when unselected, otherwise set to some ID we assign to the match cards.
  const [screen, setScreen] = React.useState("signup");
  return (
    <TeaContext.Provider
      value={{
        searchType,
        setSearchType,
        submittedSearch,
        setSubmittedSearch,
        selectedCardID,
        setSelectedCardID,
        screen,
        setScreen
      }}
    >
      {children}
    </TeaContext.Provider>
  );
}
