import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";

import { ApplicationProvider } from "./contexts/applicationcontext";
import {FilteredPeopleProvider} from "./contexts/filteredpeoplecontext";
import SlugDrawer from "./appcomponents/SlugDrawer";


export default function WrapperApp() {
  return (
    <FilteredPeopleProvider>
    <ApplicationProvider>
      <div className="App">
      <SlugDrawer/>
      </div>
    </ApplicationProvider>
    </FilteredPeopleProvider>
  );
}