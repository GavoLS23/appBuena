import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={{ top: 10 }}>
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Notificaciones</Text>
      </View>
      <View style={[styles.container]}>
        <View style={styles.commentRow}>
          <MaterialCommunityIconsIcon
            name="comment"
            style={styles.comment}
          ></MaterialCommunityIconsIcon>
          <View style={styles.notificationData}>
            <Text style={styles.notificationHeading}>
              Haz agendado una cita
            </Text>
            <Text style={styles.notificationContent}>
              Revisa los detalles en la sig...
            </Text>
            <Text style={styles.time}>Completado• 1h</Text>
          </View>
        </View>
        <View style={styles.commentRowFiller}></View>
        <MaterialCommunityIconsIcon
          name="dots-vertical"
          style={styles.moreIcon}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={[styles.container]}>
        <View style={styles.commentRow}>
          <MaterialCommunityIconsIcon
            name="comment"
            style={styles.comment}
          ></MaterialCommunityIconsIcon>
          <View style={styles.notificationData}>
            <Text style={styles.notificationHeading}>
              Haz agendado una cita
            </Text>
            <Text style={styles.notificationContent}>
              Revisa los detalles en la sig...
            </Text>
            <Text style={styles.time}>Completado• 1h</Text>
          </View>
        </View>
        <View style={styles.commentRowFiller}></View>
        <MaterialCommunityIconsIcon
          name="dots-vertical"
          style={styles.moreIcon}
        ></MaterialCommunityIconsIcon>
      </View>

      <View style={[styles.container]}>
        <View style={styles.commentRow}>
          <MaterialCommunityIconsIcon
            name="comment"
            style={styles.comment}
          ></MaterialCommunityIconsIcon>
          <View style={styles.notificationData}>
            <Text style={styles.notificationHeading}>
              Haz agendado una cita
            </Text>
            <Text style={styles.notificationContent}>
              Revisa los detalles en la sig...
            </Text>
            <Text style={styles.time}>Completado• 1h</Text>
          </View>
        </View>
        <View style={styles.commentRowFiller}></View>
        <MaterialCommunityIconsIcon
          name="dots-vertical"
          style={styles.moreIcon}
        ></MaterialCommunityIconsIcon>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    borderColor: "#9099dd",
    borderWidth: 3,
  },
  comment: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    alignSelf: "flex-start",
    height: 20,
    width: 20,
    marginTop: 2,
  },
  notificationData: {
    width: 267,
    height: 77,
    alignSelf: "center",
    marginLeft: 14,
  },
  notificationHeading: {
    color: "#000",
    fontSize: 16,
    width: 266,
    height: 38,
  },
  notificationContent: {
    color: "rgba(128,128,128,1)",
    fontSize: 14,
  },
  time: {
    color: "rgba(128,128,128,1)",
    fontSize: 14,
    marginTop: 4,
  },
  commentRow: {
    height: 77,
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 14,
  },
  commentRowFiller: {
    flex: 1,
    flexDirection: "row",
  },
  moreIcon: {
    color: "grey",
    fontSize: 20,
    alignSelf: "flex-start",
    height: 20,
    width: 20,
    marginRight: 8,
    marginTop: 16,
  },
});

export default NotificationScreen;
