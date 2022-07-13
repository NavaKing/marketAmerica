import { StatusBar as ExposStatusBar } from "react-native";
import React from "react"
import { ItemScreen } from "./src/features/items/screens/item.screen";


export default function App() {

  return (
    <>
    <ItemScreen />
    <ExposStatusBar style="auto" />
    </>
  );
}


