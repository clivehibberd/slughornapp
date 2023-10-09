import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";

import { ApplicationProvider } from "./contexts/applicationcontext";
import {FilteredPeopleProvider} from "./contexts/filteredpeoplecontext";
import {TriggerProvider} from "./contexts/triggercontext";
import SlugDrawer from "./appcomponents/SlugDrawer";
import {Button, withAuthenticator } from "@aws-amplify/ui-react";
import SlugApp from "./SlugApp.js";

const WrapperApp = ({ signOut }) => {

  return (
    <div>
      <TriggerProvider>
    <FilteredPeopleProvider>
    <ApplicationProvider>
      <div className="App">
      <SlugDrawer/>
     
      </div>
    </ApplicationProvider>
    </FilteredPeopleProvider>
    </TriggerProvider>
     <Button onClick={signOut}>Sign Out</Button>
     </div>
  );
}
export default withAuthenticator(WrapperApp);