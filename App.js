import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Stacknavigator from "./Navigator/StackNavigator";

export default function App() {
  return <Stacknavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
