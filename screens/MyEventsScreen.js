import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

const MyEventsScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Details Screen</Text>
    </View>
  );
};

export default MyEventsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
