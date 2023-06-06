import React from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import Link from "@mui/material/Link";
import {
  Flex,
  View,
  Text
} from "@aws-amplify/ui-react";


import {FilteredPeopleContext} from "../contexts/filteredpeoplecontext";
import { useContext } from "react";


export default function SlugSearchResults() {
  
  const {filteredPeople} = useContext(FilteredPeopleContext);
  
 // console.log("FP is ",filteredPeople);

  return (
    <View className="App">
        <View margin="3rem 0">
          {filteredPeople.map((person) => (
            <Flex
              key={person.id}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Link href={person.uri} target="_blank" rel="noreferrer">
                <img
                  alt={person.external_id}
                  src={person.image}
                  style={{ width: 50 + "px" }}
                ></img>
              </Link>
              <Text>{person.first_name}</Text>
              <Text>{person.last_name}</Text>
              <Text>{person.gender}</Text>
              <Text>{person.party}</Text>
              <Text>{person.ethnicity}</Text>
            </Flex>
          ))}
        </View>
    </View>
  );
};


