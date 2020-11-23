import React from 'react';
import { makeStyles, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core/';


const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



export default function SearchSelector() {
  const classes = useStyles();
  const [searchPref, setSearchPref] = React.useState('');

  const handleChange = (event) => {
    setSearchPref(event.target.value);
  };


  
return(
    <div className= "SearchSelector">
    <FormControl className={classes.formControl}>
        <InputLabel id="select-search-type">I'm looking for a...</InputLabel>
        <Select
          labelId="select-search-type-label"
          id="select-search-type"
          value={searchPref}
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