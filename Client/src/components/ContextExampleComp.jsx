import React, { createContext } from "react";
import ContextCompoTwo from "./ContextCompoTwo";

const FirstName = createContext();
const LastName = createContext();

const ContextExampleComp = () => {
  return (
    <>
      <h2>Context Question Test Example.</h2>
      <FirstName.Provider value={"Neeraj"}>
        <LastName.Provider value={"Maurya"}>
          <ContextCompoTwo />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export { ContextExampleComp, FirstName, LastName };
