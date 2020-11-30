import React, { useContext } from "react";
import {
  makeStyles,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core/";
import { TeaContext } from "./TeaContext";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SearchSelector() {
  const context = useContext(TeaContext);
  console.log("rendering", context.searchType);

  const classes = useStyles();
  const handleChange = (event) => {
    console.log("before", context.searchType);
    context.setSearchType(event.target.value);
    console.log("after", context.searchType);
  };

  return (
    <div className="SearchSelector">
      <FormControl className={classes.formControl}>
        <InputLabel id="select-search-type">I'm looking for a...</InputLabel>
        <Select
          labelId="select-search-type-label"
          id="select-search-type"
          value={context.searchType}
          onChange={handleChange}
        >
          {/* <MenuItem value=""></MenuItem> */}
          <MenuItem value={"TeaMate"}>TeaMate</MenuItem>
          <MenuItem value={"TeaParty"}>TeaParty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
