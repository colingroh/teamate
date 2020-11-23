import React from 'react';
import SuggestedParty from "./SuggestedParty";

const USERS = [
    {
      first: "Marjorie",
      last: "Whelan",
      major: "Theatre",
      int1: "Reading",
      int2: "Microbiology",
      pic: ''
    },
    {
      first: "Eric",
      last: "Hardison",
      major: "Computer Science",
      int1: "Reading",
      int2: "Privacy",
      pic: ""
    },
    {
      first: "Aliyah",
      last: "Naylor",
      major: "Geography",
      int1: "Maps",
      int2: "Music",
      pic: ""
    },
    {
      first: "Roy",
      last: "Ronald",
      major: "Theatre",
      int1: "Dogs",
      int2: "Soccer",
      pic: ""
    },
    {
      first: "Rico",
      last: "Vasquez",
      major: "History",
      int1: "Leadership",
      int2: "Frogs",
      pic: ""
    },
    {
      first: "Marjorie",
      last: "Whelan",
      major: "Theatre",
      int1: "Reading",
      int2: "Microbiology",
      pic: ""
    },
    {
      first: "Eric",
      last: "Hardison",
      major: "Computer Science",
      int1: "Reading",
      int2: "Privacy",
      pic: '',
    }
   ]

export default function SuggestedTeaParties(){

  return(
      <div>
          <h2 align= 'left'>Suggested TeaParties</h2>
          {USERS.map((user) =>(
                  <SuggestedParty user={user} />
              ))}
      </div>
  )
}
