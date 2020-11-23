import React from 'react';
import Button from '@material-ui/core/Button';

  


export default function SearchButton(props) {


    //TODO Add statefulness so the button searches the correct DB
  return (
    <div className="SearchButton">
      <Button size = "large" onClick={() => {alert("Searching!")}} variant="contained" color="secondary">
  Search
</Button>

    </div>
  );
}