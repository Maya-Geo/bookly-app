import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Details from "../Components/Details";
import { NavigationContainer } from "@react-navigation/native";
import MoreIcon from "react-native-vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import Home from "../Components/BottomScreens/Home";
import Startup from "../Components/BottomScreens/Startup";

const Stack = createStackNavigator();

const Stacknavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Startup">
        <Stack.Screen
          name="Startup"
          component={Startup}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="BookShop"
          component={Home}
          options={{
            headerShown: false,

            headerLeft: () => (
              <MoreIcon name="apps" style={styles.headerIcons} size={24} />
            ),

            headerTitleStyles: { fontSize: 30, color: "#324558" },
          }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Stacknavigator;
