import { StatusBar as ExposStatusBar } from "react-native";
import React from "react"
import { ItemScreen } from "./src/features/items/screens/item.screen";
import { theme } from "./src/infrastructure/theme"
import { ThemeProvider } from "styled-components/native";


export default function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
    <ItemScreen />
    </ThemeProvider>
    <ExposStatusBar style="auto" />
    </>
  );
}


