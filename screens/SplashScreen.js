import React from "react";
import { StatusBar } from "react-native";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

const SplashScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Animatable.View
        animation="fadeInDown"
        style={[
          styles.header,
          {
            backgroundColor: colors.background,
          },
        ]}
      >
        <Text style={styles.title}>Bienvenido a la 4ta Edición</Text>
        <Animatable.Image
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </Animatable.View>
      <View style={styles.footer}>
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}
        >
          Todo el festival en un solo lugar...
        </Text>
        <Text style={styles.text}>Facil, rapido, genial...</Text>
        <Animatable.View style={styles.button} animation="lightSpeedIn">
          <TouchableOpacity
            style={[styles.signIn, { backgroundColor: "#e685dd" }]}
            onPress={() => navigation.navigate("SignInScreen")}
          >
            <Text style={styles.textSign}>Empecemos</Text>
            <MaterialIcons name="navigate-next" color="#fff" size={20} />
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edb2e8",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  footer: {
    flex: 1,

    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "black",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
