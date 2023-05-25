import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from "aws-amplify";
import Button from "@mui/material/Button";
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

const App = ({ signOut }) => {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [genders, setGenders] = useState([]);
  const { enumMap, setEnumMap } = useContext(ApplicationContext);
  useEffect(() => {
    fetchPeople();
    searchPeople();
    getGenders();
  }, []);
  //Validation error of type WrongType: argument 'filter' with value 'ObjectValue{objectFields=[ObjectField{name='name', value=ObjectValue{objectFields=[ObjectField{name='contains', value=StringValue{value='i'}}]}}]}' contains a field not in 'ModelPersonFilterInput': 'name' @ 'listPeople'
  // Validation error of type VariableTypeMismatch: Variable type 'String' doesn't match expected type 'ModelPersonFilterInput' @ 'listPeople'
  // Validation error of type VariableTypeMismatch: Variable type 'String!' doesn't match expected type 'ModelPersonFilterInput' @ 'listPeople'

  async function searchPeople(event) {
    event.preventDefault();
    if (enumMap.size > 0) {
      const filter = AndEnumFilterGenerator(enumMap);
      console.log("Filter is ", filter);
      const queryTemplate = DynamicPersonQueryTemplate;
      queryTemplate.replace("FILTER", filter);
      const apiData = await API.graphql({
        query: queryTemplate,
      });
      const peopleFromAPI = apiData.data.listPeople.items;
      console.log(peopleFromAPI.listPeople);
      await Promise.all(
        peopleFromAPI.map(async (person) => {
          console.log(person);
        })
      );
      setFilteredPeople(peopleFromAPI);
    }
  }

  async function xsearchPeople(event) {
    console.log(thevalue.name);
    event.preventDefault();
    const apiData = await API.graphql({
      query: searchPeopleByCriteria,
      variables: { gender: enumMap.get("Gender"), agegroup: null },
    });
    const peopleFromAPI = apiData.data.listPeople.items;
    console.log(peopleFromAPI.listPeople);
    await Promise.all(
      peopleFromAPI.map(async (person) => {
        console.log(person);
      })
    );
    setFilteredPeople(peopleFromAPI);
  }
  async function getGenders() {
    const apiData = await API.graphql({
      query: listEnums,
      variables: "Gender",
    });
    const gendersFromSchema = apiData.data.__type.enumValues;
    await Promise.all(
      gendersFromSchema.map(async (value) => {
        console.log(value.name);
      })
    );
    setGenders(gendersFromSchema);
  }

  async function fetchPeople() {
    const apiData = await API.graphql({
      query: listPeople,
      variables: { limit: 1000 },
      /*    filter: {
        name: {
            contains: "AAA Note"
        }
    }*/
    });
    const peopleFromAPI = apiData.data.listPeople.items;
    await Promise.all(
      peopleFromAPI.map(async (person) => {
        if (person.lastname) {
          console.log(person.lastname);
        }
      })
    );
    setPeople(peopleFromAPI);
  }

  async function createPerson(event) {
    event.preventDefault();
    const form = new FormData(event.target);

    const data = {
      firstname: "Default",
      lastname: form.get("lastname"),
      gender: form.get("gender"),
      agegroup: form.get("agegroup"),
      externalid: form.get("externalid"),
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
        <Heading level={2}>Filtered People</Heading>
        <View margin="3rem 0">
          {filteredPeople.map((person) => (
            <Flex
              key={person.id || person.lastname}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Text as="strong" fontWeight={700}>
                {person.id}
              </Text>
              <Text as="strong" fontWeight={700}>
                {person.lastname}
              </Text>
              <Text as="strong" fontWeight={700}>
                {person.externalid}
              </Text>
              <Text as="strong" fontWeight={700}>
                {person.agegroup}
              </Text>
              <Text as="strong" fontWeight={700}>
                {person.gender}
              </Text>
            </Flex>
          ))}
        </View>
        <Heading level={2}>All People</Heading>
        <View margin="3rem 0">
          {people.map((person) => (
            <Flex
              key={person.id || person.lastname}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Text as="strong" fontWeight={700}>
                {person.firstname}
              </Text>
              <Text as="strong" fontWeight={700}>
                {person.lastname}
              </Text>
              <Text as="strong" fontWeight={700}>
                {person.gender}
              </Text>
              <Text as="strong" fontWeight={700}>
                E( {person.externalid})
              </Text>
              <Text as="strong" fontWeight={700}>
                AGE GROUP: {person.agegroup}
              </Text>
              <Button variation="link" onClick={() => deletePerson(person)}>
                Delete This Person
              </Button>
            </Flex>
          ))}
        </View>
        <View as="form" margin="3rem 0" onSubmit={createPerson}>
          <Flex direction="row" justifyContent="center">
            <TextField
              name="lastname"
              placeholder="Person Last Name"
              label="Person Last Name"
              labelHidden
              variation="quiet"
              required
            />
            <TextField
              name="gender"
              placeholder="Gender Description"
              label="Gender Description"
              labelHidden
              variation="quiet"
              required
            />
            <TextField
              name="agegroup"
              placeholder="Age Group"
              label="Age Group Label"
              labelHidden
              variation="quiet"
              required
            />
            <TextField
              name="externalid"
              placeholder="External Reference"
              label="External Label"
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
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);
