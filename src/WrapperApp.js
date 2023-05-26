import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import SlugApp from "./SlugApp.js";
import  CharacteristicsSelector  from "./components/CharacteristicsSelector";
import { ApplicationProvider } from "./components/applicationcontext";
import MainNav from "./components/MainNav.js";

export default function WrapperApp() {
  return (
    <ApplicationProvider>
      <div className="App">
    <MainNav/>
        <CharacteristicsSelector />
        <SlugApp/>
      </div>
    </ApplicationProvider>
  );
}