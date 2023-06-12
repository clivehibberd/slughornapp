import React, { createContext, useState } from "react";

export const TriggerContext = createContext();

export const TriggerProvider = (props) => {
    var count = 0;
    
  const [trigger, setTrigger] = useState(count);

  return (
    <TriggerContext.Provider
      value={{
        trigger,
        setTrigger
      }}
    >
      {props.children}
    </TriggerContext.Provider>
  );
};
