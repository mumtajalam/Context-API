import { useContext } from "react";
import React from "react";
import { UserContext } from "./App";

const UserProfile = () => {
  const localval = useContext(UserContext);
  return (
    <>
      <h1 id="name">Name:- {localval.name}</h1>
      <h1 id="age">Age:- {localval.age}</h1>
    </>
  );
};
export { UserProfile };
