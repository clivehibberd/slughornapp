import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from "aws-amplify";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import {
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listPeople } from "./graphql/queries";
//import { filterNotes } from "./graphql/queries";
//import { paramFilterNotes } from "./graphql/queries";
import { listEnums } from "./graphql/slugqueries";
import {
  searchPeopleByCriteria,
  DynamicPersonQueryTemplate,
} from "./graphql/slugqueries";
//import { resolvers } from "./graphql/queries";
import {
  createPerson as createPersonMutation,
  deletePerson as deletePersonMutation,
} from "./graphql/mutations";

import thevalue from "./components/EnumRadioSelector";
import { ApplicationContext } from "./components/applicationcontext";
import { useContext } from "react";
import { AndEnumFilterGenerator } from "./graphql/util/filterbuilder";
import mpsToImport from "./dummy/6mps.json";

const App = ({ signOut }) => {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const { enumMap, setEnumMap } = useContext(ApplicationContext);
  useEffect(() => {
    //console.log(data);
    fetchPeople();
    searchPeople();
  }, []);

  async function searchPeople(event) {
    try {
      event.preventDefault();
    } catch {}
    const filter = AndEnumFilterGenerator(enumMap);
    console.log("Filter is ", filter);
    const queryTemplate = DynamicPersonQueryTemplate;
    const queryToExecute = queryTemplate.replace("FILTER", filter);

    const apiData = await API.graphql({
      query: queryToExecute,
    });
    const peopleFromAPI = apiData.data.listPeople.items;
    //      console.log(peopleFromAPI.listPeople);
    await Promise.all(
      peopleFromAPI.map(async (person) => {
        //          console.log(person);
      })
    );
    setFilteredPeople(peopleFromAPI);
  }

  async function fetchPeople(event) {
    try {
      event.preventDefault();
    } catch {}
    const apiData = await API.graphql({
      query: listPeople,
      variables: { limit: 1000 },
    });
    const peopleFromAPI = apiData.data.listPeople.items;
    await Promise.all(
      peopleFromAPI.map(async (person) => {
        if (person.lastname) {
          //          console.log(person.lastname);
        }
      })
    );
    setPeople(peopleFromAPI);
  }

  async function createPerson(event) {
    const form = new FormData(event.target);

    const data = {
      first_name: form.get("first_name"),
      last_name: form.get("last_name"),
      gender: form.get("gender"),
      agegroup: form.get("agegroup"),
      external_id: form.get("external_id"),
      party: form.get("party"),
      ethnicity: form.get("ethnicity"),
    };
    await API.graphql({
      query: createPersonMutation,
      variables: { input: data },
    });
    fetchPeople();
    event.target.reset();
  }

  async function deletePerson({ id, name }) {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    await Storage.remove(name);
    await API.graphql({
      query: deletePersonMutation,
      variables: { input: { id } },
    });
  }

  async function importMps(event) {
    try {
      event.preventDefault();
    } catch {}
    await Promise.all(
      mpsToImport.map(async (mp) => {
        console.log("MP ", mp);

        await API.graphql({
          query: createPersonMutation,
          variables: { input: mp },
        });
        fetchPeople();
        event.target.reset();
      })
    );
  }

  return (
    <View className="App">
      <View as="form" margin="3rem 0" onSubmit={searchPeople}>
        <Flex direction="row" justifyContent="center">
          <Button color="primary" variant="contained" type="submit">
            SEARCH
          </Button>
        </Flex>
      </View>
      <View>
        <Heading level={4}>Search Result</Heading>
        <View margin="3rem 0">
          {filteredPeople.map((person) => (
            <Flex
              key={person.id}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Link href={person.uri} target="_blank" 
              
              rel="noreferrer">
                <img alt = {person.external_id} src={person.image} style={{width: 50 + 'px'}}>
                  </img></Link>
              <Text>{person.first_name}</Text>
              <Text>{person.last_name}</Text>
              <Text>{person.gender}</Text>
              <Text>{person.party}</Text>
              <Text>{person.ethnicity}</Text>
              <Text>{person.glasses}</Text>
              <Text>{person.dress}</Text>
              <Text>{person.agegroup}</Text>
              <Text>{person.eyecolor}</Text>
              <Text>{person.build}</Text>
              <Text>{person.height}</Text>
              <Text>{person.id}</Text>
            </Flex>
          ))}
        </View>
        <Heading level={5}>All MPs</Heading>
        <View as="form" margin="3rem 0" onSubmit={fetchPeople}>
          
          {people.map((person) => (
            <Flex
              key={person.id || person.last_name}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Text>FN {person.first_name}</Text>
              <Text>LN {person.last_name}</Text>
              <Text>GE {person.gender}</Text>
              <Text>PR {person.party}</Text>
              <Text>ET {person.ethnicity}</Text>
              <Text>GL {person.glasses}</Text>
              <Text>DR {person.dress}</Text>
              <Text>EXT ( {person.external_id})</Text>
              <Text>AGE: {person.agegroup}</Text>
              <Text>{person.eyecolor}</Text>
              <Text>BU {person.build}</Text>
              <Text>HI {person.height}</Text>
              
              <Button variation="link" onClick={() => deletePerson(person)}>
                Delete
              </Button>
            </Flex>
          ))}
        </View>
        <View hidden={true}
        as="form" margin="3rem 0" onSubmit={createPerson}>
          <Flex direction="row" justifyContent="center">
            <TextField
              name="first_name"
              placeholder="First Name"
              label="First Name"
              labelHidden
              variation="quiet"
              required
            />
            <TextField
              name="last_name"
              placeholder="Last Name"
              label="Person Last Name"
              labelHidden
              variation="quiet"
              required
            />
            <TextField
              name="gender"
              placeholder="Gender"
              label="Gender"
              labelHidden
              variation="quiet"
              required
            />
            <TextField
              name="agegroup"
              placeholder="Age Group"
              label="Age Group"
              labelHidden
              variation="quiet"
              required
            />
            <TextField
              name="external_id"
              placeholder="External Reference"
              label="External Ref"
              labelHidden
              variation="quiet"
              required
            />
            <TextField
              name="party"
              placeholder="Party"
              label="Party"
              labelHidden
              variation="quiet"
              required
            />
            <TextField
              name="ethnicity"
              placeholder="Ethnicity"
              label="Ethnicity"
              labelHidden
              variation="quiet"
              required
            />

            <Button type="submit" variation="primary">
              Create Person
            </Button>
          </Flex>
        </View>
      </View>
      <View as="form" onSubmit={importMps}>
        <Button disabled="{true}" type="submit" variation="secondary">
          Import MPs
        </Button>
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);
