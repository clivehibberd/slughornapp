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
    
   try{ event.preventDefault();
   }catch{
   }
    
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
    try{ event.preventDefault();
   }catch{   
   }
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

  async function importMps (event){
    
    await Promise.all(
      mpsToImport.map(async (mp) => {
        console.log("MP ",mp);
        
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
              key={person.id || person.lastname}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Text as="strong" fontWeight={700}>
              FN  {person.first_name}
              </Text>
              <Text as="strong" fontWeight={700}>
              LN  {person.last_name}
              </Text>
              <Text as="strong" fontWeight={700}>
              GE  {person.gender}
              </Text>
              <Text as="strong" fontWeight={700}>
             PR   {person.party}
              </Text>
              <Text as="strong" fontWeight={700}>
              ET  {person.ethinicity}
              </Text>
              <Text as="strong" fontWeight={700}>
              GL  {person.glasses}
              </Text>
              <Text as="strong" fontWeight={700}>
              DR  {person.dress}
              </Text>
              <Text as="strong" fontWeight={700}>
                EXT ( {person.external_id})
              </Text>
              <Text as="strong" fontWeight={700}>
                AGE GROUP: {person.agegroup}
              </Text>
              <Text as="strong" fontWeight={700}>
                {person.eyecolor}
              </Text>
              <Text as="strong" fontWeight={700}>
              BU {person.build}
              </Text>
              <Text as="strong" fontWeight={700}>
              HI  {person.height}
              </Text>
            </Flex>
          ))}
        </View>
        <Heading level={2}>All People</Heading>
        <View as="form" margin="3rem 0" onSubmit={fetchPeople}>
        <Button color="primary" variant="contained" type="submit">
            SHOW ALL
          </Button>
          {people.map((person) => (
            <Flex
              key={person.id || person.last_name}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Text as="strong" fontWeight={700}>
              FN  {person.first_name}
              </Text>
              <Text as="strong" fontWeight={700}>
              LN  {person.last_name}
              </Text>
              <Text as="strong" fontWeight={700}>
              GE  {person.gender}
              </Text>
              <Text as="strong" fontWeight={700}>
             PR   {person.party}
              </Text>
              <Text as="strong" fontWeight={700}>
              ET  {person.ethinicity}
              </Text>
              <Text as="strong" fontWeight={700}>
              GL  {person.glasses}
              </Text>
              <Text as="strong" fontWeight={700}>
              DR  {person.dress}
              </Text>
              <Text as="strong" fontWeight={700}>
                EXT ( {person.external_id})
              </Text>
              <Text as="strong" fontWeight={700}>
                AGE GROUP: {person.agegroup}
              </Text>
              <Text as="strong" fontWeight={700}>
                {person.eyecolor}
              </Text>
              <Text as="strong" fontWeight={700}>
              BU {person.build}
              </Text>
              <Text as="strong" fontWeight={700}>
              HI  {person.height}
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
              name="last_name"
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
              name="external_id"
              placeholder="External Reference"
              label="External Label"
              labelHidden
              variation="quiet"
              required
            />

            <Button disabled={true} type="submit" variation="primary">
              Create Person
            </Button>
          </Flex>
        </View>
      </View>
      <View as="form" onSubmit={importMps}>
      
      <TextField
              name="filetoload"
              placeholder="Filename and path"
              label="Upload File"
              
              variation="quiet"
              
            />
            <Button type="submit" variation="secondary" >
              Import MPs 
            </Button>
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);
