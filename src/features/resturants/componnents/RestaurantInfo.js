import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "ido rabin",
    icon,
    photos = [
      "https://media-mrs2-1.cdn.whatsapp.net/v/t61.24694-24/383997669_2450664865114437_5983379707960084185_n.jpg?ccb=11-4&oh=01_Q5AaIJ1BDj0Tu21B4---tk3Id-3HRKFlH-VUOy0fcY_G3pf6&oe=6634AAC5&_nc_sid=e6ed6c&_nc_cat=110",
    ],
    address = "Looking for 3 partners for midtern exam in liniar algebra:) berenfld 6",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
      <Text style={{ justifyContent: "center", padding: 10 }}>{address}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white", height: 310 },
  title: { padding: 16 },
});
