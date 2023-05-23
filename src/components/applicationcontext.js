import React, { createContext, useState } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = (props) => {
    var initialMap = new Map();
    initialMap.set("Ping", "pong");
  const [enumMap, setEnumMap] = useState(initialMap);

  return (
    <ApplicationContext.Provider
      value={{
        enumMap,
        setEnumMap,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};
