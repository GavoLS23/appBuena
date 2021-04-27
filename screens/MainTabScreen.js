import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useTheme, Avatar } from "react-native-paper";

import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { StyleSheet, View, Text, Image } from "react-native";

import HomeScreen from "./HomeScreen";
import MyEventsScreen from "./MyEventsScreen";
import NotificationScreen from "./NotificationScreen";
import ProfileScreen from "./ProfileScreen";
import EditProfileScreen from "./EditProfileScreen";
import BuyScreen from "./BuyScreen";
import CardListScreen from "./CardListScreen";
import EventoListScreen from "./EventoListScreen";
import InfoFestivalScreen from "./InfoFestivalScreen";
import ArteListScreen from "./ArteListScreen";
import EventDetailsScreen from "./EventDetailsScreen";

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { TouchableOpacity } from "react-native-gesture-handler";

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -15,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 30,
          backgroundColor: "#9099dd",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9099dd",
        },
        headerTintColor: "#fff",
        headerTitleStyle: "bold",
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Inicio",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              color="#fff"
              backgroundColor="#9099dd"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
      <HomeStack.Screen
        name="CardListScreen"
        component={CardListScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="EventoListScreen"
        component={EventoListScreen}
        options={{
          title: "Eventos existentes",
        }}
      />
      <HomeStack.Screen
        name="InfoFestivalScreen"
        component={InfoFestivalScreen}
        options={{ title: "Informacion" }}
      />
      <HomeStack.Screen
        name="ArteListScreen"
        component={ArteListScreen}
        options={{ title: "Artesanias" }}
      />
      <HomeStack.Screen
        name="EventDetailsScreen"
        component={EventDetailsScreen}
        options={{
          title: "Detalle de evento",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              color="#fff"
              backgroundColor="#9099dd"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const DetailStackScreen = ({ navigation }) => {
  return (
    <DetailStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9099dd",
        },
        headerTintColor: "#fff",
        headerTitleStyle: "bold",
      }}
    >
      <DetailStack.Screen
        name="MyEventsScreen"
        component={MyEventsScreen}
        options={{
          title: "Mis eventos",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              color="#fff"
              backgroundColor="#9099dd"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
    </DetailStack.Navigator>
  );
};

const ProfileStackScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Mi peril",
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.navigate("EditProfile")}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: "Editar mi perfil",
        }}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 0,
          left: 15,
          right: 15,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 70,
          ...styles.shadow,
        },
        keyboardHidesTabBar: "true",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/icons/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#9099dd" : "#748c94",
                }}
              />
              <Text
                style={{ fontSize: 12, color: focused ? "#9099dd" : "#748c94" }}
              >
                Inicio
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/icons/calendar.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#9099dd" : "#748c94",
                }}
              />
              <Text
                style={{ fontSize: 12, color: focused ? "#9099dd" : "#748c94" }}
              >
                Mis eventos
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Buy"
        component={BuyScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/ticket.png")}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: "#fff",
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/icons/user.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#9099dd" : "#748c94",
                }}
              />
              <Text
                style={{ fontSize: 12, color: focused ? "#9099dd" : "#748c94" }}
              >
                Perfil
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/icons/notification.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#9099dd" : "#748c94",
                }}
              />
              <Text
                style={{ fontSize: 12, color: focused ? "#9099dd" : "#748c94" }}
              >
                Notificaciones
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
