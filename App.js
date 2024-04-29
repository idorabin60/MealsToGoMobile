//<Entypo name="home" size={24} color="black" />
//import { AntDesign } from '@expo/vector-icons';

//<AntDesign name="setting" size={24} color="black" />
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import React from "react";
import { Text, View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from "./src/features/resturants/screens/ResturnatScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "./src/infrastracture/theme/index";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ResturantContextProvider } from "./src/services/resturantService/resturantContext";
import { ActivityIndicator, Colors } from "react-native-paper";
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
export default function App() {
  const [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [LatoLoaded] = useLato({
    Lato_400Regular,
  });

  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Map!</Text>
      </View>
    );
  }

  function SettingsScreen() {
    return (
      <LoadingContainer>
        {console.log("asdalskjd")}
        <Loading size={50} animating={true} color="#87CEEB" />
      </LoadingContainer>
    );
  }
  const Tab = createBottomTabNavigator();

  if (!LatoLoaded || !OswaldLoaded) {
    return <Text>did not load</Text>;
  } else
    return (
      <>
        <ThemeProvider theme={theme}>
          <ResturantContextProvider>
            <ExpoStatusBar style="auto" />
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "home";

                    if (route.name === "Map") {
                      iconName = "map-outline";
                    }
                    if (route.name === "Resturants") {
                      iconName = "restaurant-outline";
                    }
                    if (route.name === "Settings") {
                      iconName = "settings-outline";
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={24} color="black" />;
                  },
                  tabBarActiveTintColor: "tomato",
                  tabBarInactiveTintColor: "gray",
                })}
              >
                <Tab.Screen name="Resturants" component={RestaurantsScreen} />
                <Tab.Screen name="Map" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </ResturantContextProvider>
        </ThemeProvider>
      </>
    );
}
