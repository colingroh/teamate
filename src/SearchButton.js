import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { TeaContext } from "./TeaContext";

export default function SearchButton(props) {
  const context = useContext(TeaContext);

  const handleChange = () => {
    if (context.searchType) {
      context.setSelectedCardID(null);
      context.setSubmittedSearch(context.searchType);
    } else {
      alert("Please Select a Search Type");
    }
  };
  return (
    <div className="SearchButton">
      <Button
        size="large"
        onClick={handleChange}
        variant="contained"
        color="secondary"
      >
        Search
      </Button>
    </div>
  );
}
