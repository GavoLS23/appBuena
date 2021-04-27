import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
} from "react-native";
import { useTheme } from "@react-navigation/native";

import Swiper from "react-native-swiper";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import StarRating from "../components/StarRating";
import { Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed");
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.modalView}>
            <View style={{ padding: 5 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                ¿Te gustaria formar parte del Staff de Festival Tizoc MX?
              </Text>
            </View>
            <View style={{ padding: 7 }}>
              <Text style={{ textAlign: "justify" }}>
                Al presionar "Aceptar" se crea una solicitud automatica para una
                entrevista con el administrador de la aplicacion. El periodo de
                respuesta puede variar de 1 a 2 dias. Los datos a tomar de tu
                perfil para la solicitud son los siguientes:
              </Text>
              <Text style={{ padding: 5 }}>⚈ Nombre</Text>
              <Text style={{ padding: 5 }}>⚈ Correo electronico</Text>
              <Text style={{ padding: 5 }}>⚈ Numero de telefono</Text>
              <Text style={{ padding: 5 }}>⚈ Fecha de nacimiento</Text>
              <Text style={{ padding: 5 }}>⚈ Foto de perfil</Text>
              <Text style={{ textAlign: "justify", padding: 7 }}>
                La entrevista puede llevarse a cabo de manera virtual o en
                persona
              </Text>
            </View>
            <View style={{ position: "absolute", bottom: 30, left: 70 }}>
              <View>
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
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
                  >
                    Aceptar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ position: "absolute", bottom: 30, right: 70 }}>
              <View>
                <TouchableOpacity
                  style={{
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
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#9099dd",
                    }}
                  >
                    Cancelar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <StatusBar
        backgroundColor={theme.dark ? "black" : "white"}
        barStyle={theme.dark ? "light-content" : "dark-content"}
      />
      <Text
        style={{
          color: colors.text,
          paddingTop: 10,
          paddingLeft: 15,
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Noticias
      </Text>
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={true}
          height={200}
          activeDotColor="#9099dd"
        >
          <View style={styles.slide}>
            <Image
              source={require("../assets/banners/imagen1.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
            <View style={styles.slideTitle}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                Titulo de la noticia
              </Text>
            </View>
            <View style={styles.slideText}>
              <Text style={{ fontSize: 16 }}>
                Breve descripcion que nos lleva a saber mas acerca de la nota
              </Text>
            </View>
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/banners/imagen2.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
            <View style={styles.slideTitle}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                Titulo de la noticia
              </Text>
            </View>
            <View style={styles.slideText}>
              <Text style={{ fontSize: 16 }}>
                Breve descripcion que nos lleva a saber mas acerca de la nota
              </Text>
            </View>
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/banners/imagen3.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
            <View style={styles.slideTitle}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                Titulo de la noticia
              </Text>
            </View>
            <View style={styles.slideText}>
              <Text style={{ fontSize: 16 }}>
                Breve descripcion que nos lleva a saber mas acerca de la nota
              </Text>
            </View>
          </View>
        </Swiper>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate("InfoFestivalScreen")}
        >
          <View style={styles.categoryIcon}>
            <Ionicons name="people-circle-outline" size={35} color="#9099dd" />
          </View>
          <Text style={styles.categoryBtnTxt}>Festival Tizoc Mx</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate("EventoListScreen")}
        >
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="calendar" size={35} color="#9099dd" />
          </View>
          <Text style={styles.categoryBtnTxt}>Eventos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate("ArteListScreen")}
        >
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="palette" size={35} color="#9099dd" />
          </View>
          <Text style={styles.categoryBtnTxt}>Arte</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.categoryContainer, { marginTop: 10 }]}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons
              name="account-convert-outline"
              size={35}
              color="#9099dd"
            />
          </View>
          <Text style={styles.categoryBtnTxt}>Colaborar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <Ionicons name="mail-outline" size={35} color="#9099dd" />
          </View>
          <Text style={styles.categoryBtnTxt}>Contacto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons
              name="compass-outline"
              size={35}
              color="#9099dd"
            />
          </View>
          <Text style={styles.categoryBtnTxt}>Espacios</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Visto recientemente
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/banners/imagen2.jpg")}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Evento realizado</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Breve descripcion sobre la artesania que existe o el evento
            </Text>
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
            <Text style={styles.cardTitle}>Evento realizado</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Breve descripcion sobre la artesania que existe o el evento
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/banners/imagen4.jpg")}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Evento realizado o artesania</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Breve descripcion sobre la artesania que existe o el evento
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 70,
  },
  sliderContainer: {
    height: 200,
    width: "90%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },
  slideTitle: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 0,
    height: 40,
    width: 180,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    opacity: 0.6,
  },
  slideText: {
    position: "absolute",
    top: 120,
    left: 10,
    right: 0,
    height: 40,
    width: "94%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    opacity: 0.6,
    padding: 4,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    height: 70,
    backgroundColor: "#fdeae7" /* '#9099dd' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: "center",
    marginTop: 5,
    color: "#9099dd",
  },
  cardsWrapper: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  card: {
    height: 100,
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
  modalView: {
    width: "85%",
    height: "53%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
