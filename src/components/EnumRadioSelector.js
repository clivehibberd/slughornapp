import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import { useState, useEffect, useReducer } from "react";
import "../App.css";
import { View, Flex, Heading, Text, TextField } from "@aws-amplify/ui-react";
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
  const [radiovalue, setRadioValue] = useState([]);
  const savedEnumReducer = (state, action) => {
    // get the book object and the type of action by destructuring
    const { enumType, enumValue, type } = action;
    console.log("Reducer state is ", state);
    if (type === "add") {
      console.log("Adding to enumMap", enumValue);
      enumMap.set(enumType, enumValue);
    } else if (type === "clear") {
      console.log("Clearing the current RadioGroup", enumType);
      enumMap.delete(enumType);
      const element = document.getElementById(enumType);
      element.checked = false;
    }
    return enumMap;
  };
  const [selectedEnum, setSelectedEnum] = useReducer(
    savedEnumReducer,
    new Map()
  );
  const addNewValue = (enumType, enumValue) => {
    console.log("Adding ", enumType, enumValue);
    setSelectedEnum({ enumType, enumValue, type: "add" });
  };

  useEffect(() => {
    getEnums();
  }, []);

  const updateSelection = (event) => {
    var type = null;
    var enumValue = "";
    if (radiovalue.length === 0) {
      // If currently unset
      enumValue = event.target.value;
      type = "add";
    } else if (radiovalue === event.target.value) {
      // If its the same, clear the selection
      type = "clear";
      enumValue = "";
      event.target.checked = false;
    } else {
      type = "add";
      enumValue = event.target.value;
    }
    console.log("Updating selection to ", enumValue);
    setRadioValue(enumValue);
    setSelectedEnum({ enumType, enumValue, type: type });
  };

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
    <View>
      <Flex direction="row" justifyContent="left">
        <FormLabel id="enumType" >{enumType}</FormLabel>
        <RadioGroup row name="use-radio-group">
          {enumList.map((value) => (
            <MyFormControlLabel
              value={value.name}
              label={value.name}
              key={value.name}
              control={
                <Radio
                  id={enumType}
                  checked={radiovalue === value.name}
                  onClick={updateSelection}
                />
              }
            />
          ))}
        </RadioGroup>
      </Flex>
    </View>
  );
}
