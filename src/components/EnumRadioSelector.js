import { useState, useEffect, useReducer } from "react";
import "../App.css";

import { API } from "aws-amplify";
import * as React from "react";

import RadioGroup from "@mui/joy/RadioGroup";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Radio, { radioClasses } from '@mui/joy/Radio';

import { listEnums } from "../graphql/slugqueries";
import imagemapjson from "./static/imagemap.json";

/**
 * The Generic RadioEnum Component
 * @param {String Representation of the enum typewe are trying to select}
 * @returns
 */
export default function EnumRadioGroup({ enumType, enumMap }) {
  const [enumList, setEnumList] = useState([]);
  const [radiovalue, setRadioValue] = useState([]);
  const savedEnumReducer = (state, action) => {
    
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

  /**
   * The following consts and method deal with locating the correct image to populate the radio button
   */
  const imagemap = new Map(Object.entries(imagemapjson));

  /**
   *
   * @param {The Key to the enum you are looking-up} entryKey
   * @returns The usable path and filename of the image found or <undefined>
   */
  function getImage(entryKey) {
    var useablePath;
    try {
      const mapOfCharacteristics = new Map(
        Object.entries(imagemap.get(enumType))
      );
      const relativePath = mapOfCharacteristics.get(entryKey);
      useablePath = process.env.PUBLIC_URL + relativePath;
    } catch {}
    return useablePath;
  }

  return (
    <RadioGroup aria-label="Your plan" name="people"
    sx={{
      flexDirection: 'row',
      gap: 2,
      [`& .${radioClasses.checked}`]: {
        [`& .${radioClasses.action}`]: {
          inset: -1,
          border: '3px solid',
          borderColor: 'primary.500',
        },
      },
      [`& .${radioClasses.radio}`]: {
        display: 'contents',
        '& > svg': {
          zIndex: 2,
          position: 'absolute',
          top: '-8px',
          right: '-8px',
          bgcolor: 'background.body',
          borderRadius: '50%',
        },
      },
    }}>
      <List
        orientation="horizontal"
        sx={{
          minWidth: 0,
          "--List-gap": "0.5rem",
          "--ListItem-paddingY": "1rem",
          "--ListItem-paddingX": "0.25rem",
          "--ListItem-radius": "8px",
          "--ListItemDecorator-size": "32px",
        }}
      >
        {enumList.map((value, index) => (
          
          <ListItem
            variant="outlined"
            key={value.name}
            sx={{
              width: 50,
              height:50,
              boxShadow: "sm",
              backgroundColor: "blue",
              bgcolor: "background.body",
            }}
            value={value.name}
          >
            
            <ListItemDecorator>
              <img
                height="40px"
                alt={value.name}
                src={getImage(value.name)}
                sx={{ width: 30, height: 30 }}
              />
            </ListItemDecorator>
            
            <Radio
              id={enumType}
              checkedIcon={<CheckCircleRoundedIcon />}
              overlay
              value={value.name}
              onClick={updateSelection}
              checked={radiovalue === value.name}
              sx={{ flexGrow: 1, flexDirection: "row-reverse" }}
              slotProps={{
                action: ({ checked }) => ({
                  sx: (theme) => ({
                    ...(checked && {
                      inset: 2,
                      border: "5px solid",
                      borderColor: "red",
                    }),
                  }),
                }),
              }}
            />

          </ListItem>
          
        ))}
      </List>
    </RadioGroup>
  );
}

// <Avatar alt="TEST" src={process.env.PUBLIC_URL + '/images/icons8-tick-60.png'} sx={{ width: 30, height: 30 }}/>
