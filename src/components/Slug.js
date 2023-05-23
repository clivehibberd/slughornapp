import React, { useState, useEffect } from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from "aws-amplify";
import {
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import Button from "@mui/material/Button";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

function Slug({ signOut }) {
  /*
        const a =`__type(name: "Color") {
            enumValues {
              name
            }
          }`;
          Something like this to read the enums and put them in components
        */
  return (
    <>
      <View className="App">
        <Heading level={1}>SLUGHORN TEST</Heading>
        <View>
          <Flex direction="row" justifyContent="center">
            <TextField
              name="name"
              placeholder="Something here"
              label="Note Name"
              labelHidden
              variation="quiet"
              required
            />
            <Button color="primary">GO</Button>
            <RadioGroup name="use-radio-group" defaultValue="first">
              <FormControlLabel
                value="first"
                label="First"
                control={<Radio />}
              />
              <FormControlLabel
                value="second"
                label="Second"
                control={<Radio />}
              />
            </RadioGroup>
          </Flex>
        </View>
      </View>
    </>
  );
}

// export default withAuthenticator(Slug);
export default Slug;
