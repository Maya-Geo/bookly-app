import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookShop from "../Components/BottomScreens/BookShop";

import { Ionicons } from "@expo/vector-icons";
import HomeIcon from "react-native-vector-icons/Octicons";
import Library from "../Components/BottomScreens/Library";
import Search from "../Components/BottomScreens/Search";

const Tab = createBottomTabNavigator();

const Bottomnavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerShown: false,
        activeTintColor: "#FD6592",
      }}
    >
      <Tab.Screen
        name="Store"
        component={BookShop}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeIcon name="home" size={24} style={{ color: color }} />
          ),
          headerTitleStyle: { fontSize: 30, color: "#324558" },
        }}
      />

      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ios-library-outline"
              size={24}
              color="black"
              style={{ color: color }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ios-search"
              size={24}
              color="black"
              style={{ color: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Bottomnavigator;
