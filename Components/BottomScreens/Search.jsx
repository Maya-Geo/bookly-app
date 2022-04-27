import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.Searchheader}>
        <TextInput placeholder="Book&Audiobooks" style={styles.input} />
        <Ionicons
          name="ios-search"
          size={24}
          color="black"
          style={{ bottom: 118, left: 300 }}
        />
      </View>
      <Text style={styles.trendingText}>Trending</Text>
      {/* <View
        style={{
          borderBottomWidth: 1,
          borderStartWidth: 10,
          borderBottomColor: "#324558",
          top: 80,
        }}
      ></View> */}

      <View>
        <TouchableOpacity style={styles.searchContainer}>
          <Text style={styles.education}>Sexy Education</Text>
          <Ionicons
            name="ios-search"
            size={24}
            color="#98A2AB"
            style={{ left: 10, bottom: 20 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchContainer}>
          <Text style={styles.oliver}>Oliver Twist</Text>
          <Ionicons
            name="ios-search"
            size={24}
            color="#98A2AB"
            style={{ left: 10, bottom: 20 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchContainer}>
          <Text style={styles.self}>Self Improvement Books</Text>
          <Ionicons
            name="ios-search"
            size={24}
            color="#98A2AB"
            style={{ left: 10, bottom: 20 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchContainer}>
          <Text style={styles.spiritWorld}>Books</Text>
          <Ionicons
            name="ios-search"
            size={24}
            color="#98A2AB"
            style={{ left: 10, bottom: 20 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchContainer}>
          <Text style={styles.stories}>Love Stories</Text>
          <Ionicons
            name="ios-search"
            size={24}
            color="#98A2AB"
            style={{ left: 10, bottom: 20 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchContainer}>
          <Text style={styles.money}>How to make money</Text>
          <Ionicons
            name="ios-search"
            size={24}
            color="#98A2AB"
            style={{ left: 10, bottom: 20 }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    // alignItems: "center",
    // justifyContent: "center",
  },

  Searchheader: {
    left: 20,
    top: 130,
  },
  trendingText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    left: 34,
    top: 60,
  },

  input: {
    fontSize: 15,
    height: 40,
    padding: 25,
    bottom: 80,
    borderRadius: 10,
    width: 332,
    backgroundColor: "snow",
  },

  searchContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#324558",
    width: 350,
    left: 5,
    height: 52,
    top: 80,
    margin: 9,
    borderRadius: 10,
    padding: 10,
  },
  education: {
    top: 5,
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
  self: {
    top: 5,
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },

  oliver: {
    top: 5,
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
  spiritWorld: {
    top: 5,
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },

  stories: {
    top: 5,
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },

  money: {
    top: 5,
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
});
