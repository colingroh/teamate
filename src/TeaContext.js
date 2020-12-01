import { createContext, useState } from "react";

export const TeaContext = createContext({});

//TeaMate or Party, submittedSearch, selectedCardID,
export function TeaProvider({ children }) {
<<<<<<< HEAD
  const [searchType, setSearchType] = React.useState(""); //Can be one of "TeaMate" or "TeaParty"
  const [submittedSearch, setSubmittedSearch] = React.useState(""); //Can be one of "TeaMate" or "TeaParty"(set when search button is clicked)
  const [selectedCardID, setSelectedCardID] = React.useState(null); //null when unselected, otherwise set to some ID we assign to the match cards. 
=======
  const [searchType, setSearchType] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [selectedCardID, setSelectedCardID] = useState(null);
>>>>>>> 6d459cdb93dd23d64af683912baf19c053924db6

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
