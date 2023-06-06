import { useContext } from "react";
import { useEffect } from "react";
import { API } from "aws-amplify";

import { ApplicationContext } from "../../contexts/applicationcontext";
import {FilteredPeopleProvider} from "../../contexts/filteredpeoplecontext";
import { DynamicPersonQueryTemplate } from "../../graphql/slugqueries";
import { AndEnumFilterGenerator } from "../../graphql/util/filterbuilder";



export default function PeopleFilter(){
    const { enumMap, setEnumMap } = useContext(ApplicationContext);
    //const {filteredPeople, setFilteredPeople} = useContext(FilteredPeopleProvider);
    useEffect(() => {    
        SearchPeople();
      }, []);
    
    async function SearchPeople() {
        console.log("INSIDE SEARCH PEOPLE- PeopleFilter.js");
        const filter = AndEnumFilterGenerator(enumMap);
        console.log("Filter PeopleFilter is ", filter);
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
       // setFilteredPeople(peopleFromAPI);
    }
return (<></>);
};


