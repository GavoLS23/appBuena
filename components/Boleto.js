import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import StarRating from "./StarRating";

const Boleto = ({ itemData, onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardImgWrapper}>
        <Image
          source={itemData.image}
          resizeMode="cover"
          style={styles.cardImg}
        />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{itemData.title}</Text>

        <Text numberOfLines={2} style={styles.cardDetails}>
          {itemData.description}
        </Text>
      </View>
      <View style={{ position: "absolute", bottom: 15, right: 15 }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 90,
            height: 35,
            backgroundColor: "#9099dd",
            borderRadius: 7,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOpacity: 1,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Boleto;

const styles = StyleSheet.create({
  card: {
    height: 120,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
});
