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
          { id: 1, name: "Restaurant 1" },
          { id: 2, name: "Restaurant 2" },
          { id: 3, name: "Restaurant 3" },
          { id: 4, name: "Restaurant 4" },
          { id: 5, name: "Restaurant 5" },
          { id: 6, name: "Restaurant 6" },
          { id: 7, name: "Restaurant 7" },
        ]}
        renderItem={({ item }) => <RestaurantInfoCard name={item.name} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, marginTop: 16, marginBottom: 16 }}
      />
    </RestaurantListContainer>
  </SafeArea>
);
