import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";

import  CharacteristicsSelector  from "./components/CharacteristicsSelector";
import { ApplicationProvider } from "./components/applicationcontext";

export default function WrapperApp() {
  return (
    <ApplicationProvider>
      <div className="App">
        <CharacteristicsSelector />
        
      </div>
    </ApplicationProvider>
  );
}