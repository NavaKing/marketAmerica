import { StatusBar as ExposStatusBar } from "react-native";
import React from "react"
import { ItemScreen } from "./src/features/items/screens/item.screen";
import { theme } from "./src/infrastructure/theme"
import { ThemeProvider } from "styled-components/native";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ItemContextProvider } from "./src/services/items/items.context";


export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [ladoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !ladoLoaded) {
    return null
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    <ItemContextProvider>
    <ItemScreen />
    </ItemContextProvider>
    </ThemeProvider>
    <ExposStatusBar style="auto" />
    </>
  );
}


