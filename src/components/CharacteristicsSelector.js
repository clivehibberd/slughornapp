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
      <EnumRadioSelector enumType={"Ethnicity"} enumMap={enumMap} />
      <EnumRadioSelector enumType={"AgeGroup"} enumMap={enumMap} />
      <EnumRadioSelector enumType={"Build"} enumMap={enumMap} />
      <EnumRadioSelector enumType={"FacialHair"} enumMap={enumMap} />
      <EnumRadioSelector enumType={"HairColor"} enumMap={enumMap} />
      <EnumRadioSelector enumType={"Height"} enumMap={enumMap} />
      <EnumRadioSelector enumType={"EyeColor"} enumMap={enumMap} />
    End of CharacteristicsSelector
    
    </>
  );
}