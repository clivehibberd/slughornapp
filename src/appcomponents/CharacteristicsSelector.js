import * as React from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import { useContext } from "react";

import EnumRadioSelector from "../components/EnumRadioSelector";
import { ApplicationContext } from "../contexts/applicationcontext";

import characteristicsList from "../components/static/characteristics.json";


export default function CharacteristicsSelector() {
    const { enumMap, setEnumMap } = useContext(ApplicationContext );

  return (
    <>
   {characteristicsList.map((characteristic) => (      
      <EnumRadioSelector key={characteristic} enumType={characteristic} enumMap={enumMap} />
    ))}      
    </>
  );
}
