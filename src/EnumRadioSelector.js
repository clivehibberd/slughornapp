import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useState, useEffect, useReducer } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";

import { listEnums } from "./graphql/slugqueries";

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
 * Store the selected enum value in the context with it's type
 * E.G. {Gender, Male}
 * @param {The Enum Type we are dealing with} enumType
 * @param {The String value of the selected enum} value
 */
async function setSelectionInContext(enumType, value) {
  console.log("Storing Selected...", enumType, " ", value);
}

/**
 * The Generic RadioEnum Component
 * @param {String Representation of the enum typewe are trying to select}
 * @returns
 */
export default function GenderRadioGroup({ enumType }) {
  const [enumList, setEnumList] = useState([]);
  //const [selectedEnum, setSelectedEnum] = useState([]);
  //const [savedBooks, setSavedBooks] = useReducer(savedBooksReducer, []);

  const savedEnumReducer = (state, action) => {
    // get the book object and the type of action by destructuring
    const { enumType, enumValue, type } = action;
    if (type === "add") {
      console.log("Reducer returning ", enumType, enumValue);
      state.set(enumType,enumValue.name);
      // You'll never see the addition of elements to the map becuase you 
      // are overwriting the keys you tosser!!!
      console.log("Have set values in the map", state);
      // How the Fuck do you concatinate two bloody maps!!!
      return state;
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

  async function setSelectionInContext(enumType, value) {
    console.log("Storing Selected...", enumType, " ", value);
  }
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
