import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useState, useEffect, useReducer } from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";

import { listEnums } from "../graphql/slugqueries";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();
  let checked = false;
  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }
  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

/**
 * The Generic RadioEnum Component
 * @param {String Representation of the enum typewe are trying to select}
 * @returns
 */
export default function EnumRadioGroup({ enumType, enumMap }) {
  const [enumList, setEnumList] = useState([]);
  const savedEnumReducer = (state, action) => {
    // get the book object and the type of action by destructuring
    const { enumType, enumValue, type } = action;
    //console.log("Current state ", state);
    console.log("Current state ", enumMap);
    if (type === "add") {
     // state.set(enumType,enumValue.name);
     enumMap.set(enumType,enumValue.name);
      //console.log("New state ", state);
      console.log("New state ", enumMap);
      //return state;
      return enumMap;
    } else {
      console.log("Action does not have a meaning");
    }
  };
  const [selectedEnum, setSelectedEnum] = useReducer(
    savedEnumReducer,
    new Map()
  );
  const add = (enumType, enumValue) => {
    // setSelectionInContext(enumType,'BNAG');
    console.log("Adding ", enumType, enumValue);
    setSelectedEnum({ enumType, enumValue, type: "add" });
  };
  useEffect(() => {
    getEnums();
  }, []);

  
  /**
   * Get the enum list from the GraphQl API and set it in the state
   */
  async function getEnums() {
    const apiData = await API.graphql({
      // query: listGenders,
      query: listEnums,
      variables: { name: enumType },
    });
    const enumsFromSchema = apiData.data.__type.enumValues;
    /*await Promise.all(
      enumsFromSchema.map(async (value) => {
        console.log("Got enum : ", value.name);
      })
    );*/
    setEnumList(enumsFromSchema);
  }

  return (
    <RadioGroup row name="use-radio-group">
      {enumList.map((value) => (
        <MyFormControlLabel
          value={value.name}
          label={value.name}
          key={value.name}
          // control={<Radio onChange={() => setSelectionInContext(enumType,value)} />}
          control={<Radio onChange={() => add(enumType, value)} />}
        />
      ))}
    </RadioGroup>
  );
}