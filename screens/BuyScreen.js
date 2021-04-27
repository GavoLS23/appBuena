import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { data } from "../model/data";
import Boleto from "../components/Boleto";

const BuyScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <Boleto
        itemData={item}
        onPress={() =>
          navigation.navigate("CardItemDetails", { itemData: item })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ padding: 5, borderBottomWidth: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Boletos adquiridos:
        </Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
          <Image
            source={require("../assets/banners/imagen2.jpg")}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Boleto Evento Festival</Text>

          <Text numberOfLines={2} style={styles.cardDetails}>
            Este es un texto de prueba para medir la longitud del componenete
          </Text>
        </View>
        <View style={{ position: "absolute", bottom: 15, right: 15 }}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 90,
              height: 35,
              backgroundColor: "#fff",
              borderColor: "#9099dd",
              borderWidth: 2,
              borderRadius: 7,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#000",
              shadowOpacity: 1,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#9099dd" }}>
              Comprado
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
          <Image
            source={require("../assets/banners/imagen3.jpg")}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Boleto Evento Festival</Text>

          <Text numberOfLines={2} style={styles.cardDetails}>
            Este es un texto de prueba para medir la longitud del componenete
          </Text>
        </View>
        <View style={{ position: "absolute", bottom: 15, right: 15 }}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 90,
              height: 35,
              backgroundColor: "#fff",
              borderRadius: 7,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#000",
              shadowOpacity: 1,
              borderColor: "#9099dd",
              borderWidth: 2,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#9099dd" }}>
              Comprado
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ padding: 5, borderBottomWidth: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Boletos disponibles:
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default BuyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
    marginBottom: 70,
  },
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
