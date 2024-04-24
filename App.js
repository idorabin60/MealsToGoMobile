import React from "react";
import { Text } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from "./src/features/resturants/screens/ResturnatScreen";
import { theme } from "./src/infrastracture/theme/index";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [LatoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!LatoLoaded || !OswaldLoaded) {
    return <Text>did not load</Text>;
  } else
    return (
      <>
        <ThemeProvider theme={theme}>
          <RestaurantsScreen />
          <ExpoStatusBar style="auto" />
        </ThemeProvider>
      </>
    );
}
