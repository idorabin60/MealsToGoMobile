import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
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
export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchbarContainer>
      <Searchbar />
    </SearchbarContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
