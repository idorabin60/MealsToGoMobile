import React from "react";
import { Searchbar } from "react-native-paper";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
} from "react-native";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../componnents/RestaurantInfo";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
const SearchbarContainer = styled.View`
  padding: 16px;
`;
const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: white;
`;
const x = {};
export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchbarContainer>
      <Searchbar />
    </SearchbarContainer>
    <RestaurantListContainer>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
        ]}
        renderItem={() => <RestaurantInfoCard />} // Added item parameter and fixed renderItem
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16, marginTop: 16, marginBottom: 16 }}
      />
    </RestaurantListContainer>
  </SafeArea>
);
