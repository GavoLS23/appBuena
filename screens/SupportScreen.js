import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SupportScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ left: 10, top: "2%", padding: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 28 }}>
          Bienvenido al soporte tecnico
        </Text>
      </View>
      <View style={{ left: 10, top: "3%", width: "95%", padding: 5 }}>
        <Text style={{ fontSize: 18 }}>
          Si tienes algún problema con la aplicacion puedes enviarnos un
          comentario y una captura de pantalla con el problema para solucionarlo
          lo mas pronto posible. En seguida recibirás un correo con una
          confirmación de recibido.
        </Text>
      </View>
      <View
        style={{
          left: 10,
          top: "4%",
          width: "95%",
          padding: 5,
          borderColor: "#fff",
          borderBottomColor: "#000",
          borderWidth: 1,
          borderRadius: 8,
        }}
      >
        <TextInput
          placeholder="Hola, realiza un comentario o describe el problema"
          multiline
          numberOfLines={5}
          style={{ fontSize: 16 }}
        />
      </View>
      <View
        style={{
          left: 10,
          top: "7%",
          width: "95%",
          padding: 5,
        }}
      >
        <TouchableOpacity>
          <Text>Añadir imagen</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          left: 10,
          top: "9%",
          width: "95%",
          padding: 5,
        }}
      >
        <TouchableOpacity>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
