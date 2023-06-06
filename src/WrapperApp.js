import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";

import { ApplicationProvider } from "./contexts/applicationcontext";
import {FilteredPeopleProvider} from "./contexts/filteredpeoplecontext";
import SlugDrawer from "./appcomponents/SlugDrawer";
import {Button, withAuthenticator } from "@aws-amplify/ui-react";

const WrapperApp = ({ signOut }) => {

  return (
    <div>
    <FilteredPeopleProvider>
    <ApplicationProvider>
      <div className="App">
      <SlugDrawer/>
      </div>
    </ApplicationProvider>
    </FilteredPeopleProvider>
     <Button onClick={signOut}>Sign Out</Button>
     </div>
  );
}
export default withAuthenticator(WrapperApp);