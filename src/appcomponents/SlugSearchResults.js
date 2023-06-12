import React from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import Link from "@mui/material/Link";
import { Flex, View, Text } from "@aws-amplify/ui-react";
import Grid from "@mui/material/Grid";

import PersonCard from "./PersonCard";
import { FilteredPeopleContext } from "../contexts/filteredpeoplecontext";
import { useContext } from "react";

export default function SlugSearchResults() {
  const { filteredPeople } = useContext(FilteredPeopleContext);

  // console.log("FP is ",filteredPeople);

  return (
    <View className="App">
      <View margin="3rem 0">
        <Grid container spacing={1}>
          {filteredPeople.map((person) => (
            <Grid key={person.external_id} item xs="auto">
              <PersonCard person={person} />
            </Grid>
          ))}
        </Grid>
      </View>
    </View>
  );
}
