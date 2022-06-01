import { useContext } from "react";
import React from "react";
import { UserContext } from "./App";

const UserProfile = () => {
  const localval = useContext(UserContext);
  return (
    <>
      <h1 id="name">Name:- Newton"{localval.name}</h1>
      <h1 id="name">Age:- 3{localval.age}</h1>
    </>
  );
};
export { UserProfile };
