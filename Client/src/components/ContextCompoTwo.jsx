import React from "react";
import { FirstName, LastName } from "./ContextExampleComp";

const ContextCompoTwo = () => {
  return (
    <>
      <FirstName.Consumer>
        {(firstName) => {
          return (
            <LastName.Consumer>
              {(lastName) => {
                return (
                  <h3>
                    Full Name is: {firstName} {lastName}
                  </h3>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default ContextCompoTwo;
