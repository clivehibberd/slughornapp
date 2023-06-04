import * as React from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import { useContext } from "react";

import EnumRadioSelector from "./EnumRadioSelector";
import { ApplicationContext } from "./applicationcontext";
import characteristicsList from "./static/characteristics.json";


export default function CharacteristicsSelector() {
    const { enumMap, setEnumMap } = useContext(ApplicationContext );

  return (
    <>
   {characteristicsList.map((characteristic) => (      
      <EnumRadioSelector enumType={characteristic} enumMap={enumMap} />
    ))}      
    </>
  );
}
