import React from "react";
import SuggestedUser from "./SuggestedUser";

const USERS = [
  {
    first: "Marjorie",
    last: "Whelan",
    major: "Theatre",
    int1: "Reading",
    int2: "Microbiology",
    id: 1,
  },
  {
    first: "Eric",
    last: "Hardison",
    major: "Computer Science",
    int1: "Reading",
    int2: "Privacy",
    id: 2,
  },
  {
    first: "Aliyah",
    last: "Naylor",
    major: "Geography",
    int1: "Maps",
    int2: "Music",
    id: 3,
  },
  {
    first: "Roy",
    last: "Ronald",
    major: "Theatre",
    int1: "Dogs",
    int2: "Soccer",
    id: 4,
  },
  {
    first: "Rico",
    last: "Vasquez",
    major: "History",
    int1: "Leadership",
    int2: "Frogs",
    id: 5,
  },
  {
    first: "Marjorie",
    last: "Whelan",
    major: "Theatre",
    int1: "Reading",
    int2: "Microbiology",
    id: 6,
  },
  {
    first: "Eric",
    last: "Hardison",
    major: "Computer Science",
    int1: "Reading",
    int2: "Privacy",
    id: 7,
  },
];

export default function SuggestedMatches() {
  return (
    <div>
      <h2 align="left">Suggested Matches</h2>
      {USERS.map((user) => (
        <SuggestedUser user={user} />
      ))}
    </div>
  );
}
