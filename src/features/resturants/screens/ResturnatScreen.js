import React, { useContext } from "react";
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
import { ResturantContext } from "../../../services/resturantService/resturantContext";
import { ActivityIndicator, Colors } from "react-native-paper";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

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

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(ResturantContext);

  return (
    <SafeArea>
      {console.log(restaurantContext.isLoading)}
      {restaurantContext.isLoading && (
        <LoadingContainer>
          {console.log("asdalskjd")}
          <Loading size={50} animating={true} color="#87CEEB" />
        </LoadingContainer>
      )}
      {!restaurantContext.isLoading && (
        <>
          <SearchbarContainer>
            <Searchbar />
          </SearchbarContainer>
          <RestaurantListContainer>
            <FlatList
              data={restaurantContext.resturants}
              renderItem={({ item }) => (
                <RestaurantInfoCard restaurant={item} />
              )}
              keyExtractor={(item) => item.name}
              contentContainerStyle={{
                padding: 16,
                marginTop: 16,
                marginBottom: 16,
              }}
            />
          </RestaurantListContainer>
        </>
      )}
    </SafeArea>
  );
};
