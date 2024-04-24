import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const Title = styled(Text)`
  padding: 16px;
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
`;

const StyledCard = styled(Card)`
  background-color: white;
`;

const StyledCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
  } = restaurant;

  return (
    <TouchableOpacity>
      <StyledCard elevation={5}>
        <StyledCover source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </StyledCard>
    </TouchableOpacity>
  );
};
