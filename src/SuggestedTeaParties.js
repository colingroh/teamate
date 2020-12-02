import React from "react";
import SuggestedParty from "./SuggestedParty";

const USERS = [
  {
    title: "Bio Buddies",
    last: "Whelan",
    major: "Theatre",
    int1: "Reading",
    int2: "Microbiology",
    id: 1,
  },
  {
    title: "Gaming Gals",
    last: "Hardison",
    major: "Computer Science",
    int1: "Reading",
    int2: "Privacy",
    id: 2,
  },
  {
    title: "Bostonians",
    last: "Naylor",
    major: "Geography",
    int1: "Maps",
    int2: "Music",
    id: 3,
  },
  {
    title: "Francophones",
    last: "Ronald",
    major: "Theatre",
    int1: "Dogs",
    int2: "Soccer",
    id: 4,
  },
  {
    title: "Basketballers",
    last: "Vasquez",
    major: "History",
    int1: "Leadership",
    int2: "Frogs",
    id: 5,
  },
  {
    title: "Dog Lovers",
    last: "Whelan",
    major: "Theatre",
    int1: "Reading",
    int2: "Microbiology",
    id: 6,
  },
  {
    title: "CAMD Majors",
    last: "Hardison",
    major: "Computer Science",
    int1: "Reading",
    int2: "Privacy",
    id: 7,
  },
];

export default function SuggestedTeaParties() {
  return (
    <div>
      <h2 align="left">Suggested TeaParties</h2>
      {USERS.map((user) => (
        <SuggestedParty user={user} />
      ))}
    </div>
  );
}
