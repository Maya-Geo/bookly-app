import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const Startup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/twenty1.jpg")}
          style={{ height: 500, width: 375, top: 20 }}
        />
      </View>

      <View style>
        <Image
          source={require("../../assets/stands.jpg")}
          style={{ height: 40, width: 375, top: 20 }}
        />
      </View>

      <View>
        <TouchableOpacity>
          <Text
            style={styles.header}
            onPress={() => navigation.navigate("BookShop")}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Startup;

const styles = StyleSheet.create({
  header: {
    color: "#98A2AB",
    justifyContent: "center",
    top: 95,
    fontSize: 22,
    left: 130,
  },
});
