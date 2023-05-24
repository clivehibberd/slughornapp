import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SlugApp from "./SlugApp";
import reportWebVitals from "./reportWebVitals";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import {
  Flex,
  Heading,
  View
} from "@aws-amplify/ui-react";
import WrapperApp from "./WrapperApp";

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <View>
    <Heading level={1}>SLUGHORN TEST</Heading>
    </View>
     
    <WrapperApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
