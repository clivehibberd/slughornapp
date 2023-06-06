import React, { createContext, useState } from "react";

export const FilteredPeopleContext = createContext();

export const FilteredPeopleProvider = (props) => {
    var initialValue = new Array();
    
  const [filteredPeople, setFilteredPeople] = useState(initialValue);

  return (
    <FilteredPeopleContext.Provider
      value={{
        filteredPeople,
        setFilteredPeople,
      }}
    >
      {props.children}
    </FilteredPeopleContext.Provider>
  );
};
