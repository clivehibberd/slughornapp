/**
 * Component to manage the shared context state management
 */

import React, { createContext, useReducer, useState } from "react";

const savedEnumReducer = (state, action) => {
  // get the book object and the type of action by destructuring
  const { enumType, enumValue, type } = action;
  console.log("Current State is ", state);
  if (type === "add") {
    state.set(enumType, enumValue.name);
    console.log("Have updated state ", state);
    return state;
  } else {
    console.log("Action does not have a meaning");
  }
};

export const GlobalContext = createContext();


export const EnumProvider = (props) => {
  const [enumList, setEnumList] = useState(new Map());
  const [selectedEnums, setSelectedEnums] = useReducer(
    savedEnumReducer,
    new Map()
  );
  return (
    <GlobalContext.Provider
      value={{
        enumList,
        setEnumList,
        selectedEnums,
        setSelectedEnums,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
