import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { data } from "../model/data";
import Card from "../components/Card";

const BookmarkScreen = ({ navigation }) => {
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
      <View
        style={{
          padding: 10,borderBottomWidth:2
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Guardados</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.signInx}
          onPress={() => alert("Este boton limpia las cosas guardadas")}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: "#fff",
              },
            ]}
          >
            Limpiar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
    marginBottom: 70,
  },
  btn: {
    top: 30,
  },
  signInx: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#9099de",
  },
});
