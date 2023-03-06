import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, ScrollView } from "react-native";
import { Card, Button } from "react-native-elements";

const data = [
  { id: 1, title: "title 1", details: "details 1 details 1 details 1" },
  {
    id: 2,
    title: "title 2",
    details: "details 2 details 2 details 2 details 2 details 2 details 2",
  },
  { id: 3, title: "title 3", details: "details 3 details 3" },
  { id: 4, title: "title 4 title 4", details: "details 4" },
];

const CategoryRow = () => {
  const renderItem = (item) => {
    return (
      <Card style={styles.cardContainer}>
        <Text>{item.title}</Text>
        <Text>{item.details}</Text>
      </Card>
    );
  };
  return (
    <View style={{ flex: 1, overflow: "hidden" }}>
      <View style={{ overflow: "hidden" }}>
        <Text>Category 1</Text>
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  cardContainer: {
    width: 140,
    height: 150,
    borderWidth: 0.5,
    borderColor: "grey",
    overflow: "scroll",
  },
});

//make this component available to the app
export default CategoryRow;
