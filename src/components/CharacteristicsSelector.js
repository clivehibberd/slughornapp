import * as React from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import { useContext } from "react";

import EnumRadioSelector from "./EnumRadioSelector";
import { ApplicationContext } from "./applicationcontext";

export default function CharacteristicsSelector() {
    const { enumMap, setEnumMap } = useContext(ApplicationContext );
  return (
    <>
    
      <EnumRadioSelector enumType={"Gender"} enumMap={enumMap} />      
      <EnumRadioSelector enumType={"AgeGroup"} enumMap={enumMap} />
      
      <div>
      End of CharacteristicsSelector
      </div>
      <div>
        {enumMap}
      </div>
    
    
    </>
  );
}
