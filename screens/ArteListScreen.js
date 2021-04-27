import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { data } from "../model/data";
import Card from "../components/Card";

const ArteListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <Card
        itemData={item}
        onPress={() =>
          navigation.navigate("CardItemDetails", { itemData: item })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ArteListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
    marginBottom: 70,
  },
});
