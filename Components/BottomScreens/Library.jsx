import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Library = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textEdit}>Edit</Text>
      <View>
        <TouchableOpacity style={styles.libraryContainer}>
          <Text style={styles.wantToRead}>Want To read</Text>
          <Entypo
            name="arrow-with-circle-right"
            size={24}
            color="black"
            style={{ left: 50, bottom: 20 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.finihsedContainer}>
          <Text style={styles.finish}>Finished</Text>
          <AntDesign
            name="checkcircle"
            size={24}
            color="black"
            style={{ left: 50, bottom: 20 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.mybookContainer}>
          <Text style={styles.books}>Books</Text>
          <FontAwesome5
            name="book-open"
            size={24}
            color="black"
            style={{ left: 50, bottom: 20 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.audioContainer}>
          <Text style={styles.audiobooks}>Audiobooks</Text>
          <Fontisto
            name="headphone"
            size={24}
            color="black"
            style={{ left: 50, bottom: 20 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.downContainer}>
          <Text style={styles.download}>Downloads</Text>
          <Ionicons
            name="cloud-download"
            size={24}
            color="black"
            style={{ left: 50, bottom: 20 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.collectContainer}>
          <Text style={styles.collection}>New Collection....</Text>
          <AntDesign
            name="plus"
            size={24}
            color="silver"
            style={{ left: 50, bottom: 20 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "snow",
    alignItems: "center",
    justifyContent: "center",
  },

  textEdit: {
    bottom: 60,
    fontSize: 17,
    left: 165,
    color: "#98A2AB",
  },

  libraryContainer: {
    backgroundColor: "#E5E5E5",
    // borderBottomWidth: 14,
    width: 500,
    height: 52,
    left: 10,
    bottom: 10,
    margin: 9,
    borderRadius: 10,
    padding: 10,
  },

  wantToRead: {
    top: 5,
    textAlign: "center",
    fontSize: 18,
    color: "#061847",
  },

  finish: {
    top: 5,
    textAlign: "center",
    fontSize: 18,
    color: "#061847",
  },

  finihsedContainer: {
    backgroundColor: "#E5E5E5",
    // borderBottomWidth: 14,
    width: 500,
    height: 52,
    left: 10,
    top: 5,
    margin: 9,
    borderRadius: 10,
    padding: 10,
  },
  books: {
    top: 5,
    textAlign: "center",
    fontSize: 18,
    color: "#061847",
  },
  mybookContainer: {
    backgroundColor: "#E5E5E5",
    // borderBottomWidth: 14,
    width: 500,
    height: 52,
    left: 10,
    top: 20,
    margin: 9,
    borderRadius: 10,
    padding: 10,
  },

  audiobooks: {
    top: 5,
    textAlign: "center",
    fontSize: 18,
    color: "#061847",
  },
  audioContainer: {
    backgroundColor: "#E5E5E5",
    // borderBottomWidth: 14,
    width: 500,
    height: 52,
    left: 10,
    top: 30,
    margin: 9,
    borderRadius: 10,
    padding: 10,
  },

  download: {
    top: 5,
    textAlign: "center",
    fontSize: 18,
    color: "#061847",
  },
  downContainer: {
    backgroundColor: "#E5E5E5",
    // borderBottomWidth: 14,
    width: 500,
    height: 52,
    left: 10,
    top: 40,
    margin: 9,
    borderRadius: 10,
    padding: 10,
  },

  collection: {
    top: 5,
    textAlign: "center",
    fontSize: 18,
    color: "#061847",
  },
  collectContainer: {
    backgroundColor: "#E5E5E5",
    // borderBottomWidth: 14,
    width: 500,
    height: 52,
    left: 10,
    top: 60,
    margin: 9,
    borderRadius: 10,
    padding: 10,
  },
});
