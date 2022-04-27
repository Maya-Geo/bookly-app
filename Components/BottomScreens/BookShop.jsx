import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

const BookShop = ({ navigation }) => {
  const info = [
    {
      backgroundColor: "snow",
      topicImage: require("../../assets/img23.jpg"),
      title: "The other black girl",
      writerName: "Dahlia Harris",
      genre: "Literacy fiction",
      writerImage: require("../../assets/blackpro.webp"),
    },
    {
      backgroundColor: "snow",
      topicImage: require("../../assets/img5.jpg"),
      title: "You are not alone",
      writerName: "Hendricks",
      genre: "Psychological thriller",
      writerImage: require("../../assets/geer.jpg"),
    },
    {
      backgroundColor: "snow",
      topicImage: require("../../assets/img7.jpg"),
      title: "The wife upstairs",
      writerName: "Richel Hawkins",
      genre: "Romance novel",
      writerImage: require("../../assets/rachel-hawkins.webp"),
    },

    {
      backgroundColor: "snow",
      topicImage: require("../../assets/img18.jpg"),
      title: "Five feet apart",
      writerName: "Rachael Lippin",
      genre: "Romance novel",
      writerImage: require("../../assets/Rachael.jpg"),
    },
    {
      backgroundColor: "snow",
      topicImage: require("../../assets/speaker.jpg"),
      title: "The speaker",
      writerName: "Traci Chee",
      genre: "Fantasy Fiction",
      writerImage: require("../../assets/chee.jpg"),
    },

    {
      backgroundColor: "snow",
      topicImage: require("../../assets/rise.jpg"),
      title: "Dark Rise",
      writerName: "Pacat C.S",
      genre: "Young adult fiction",
      writerImage: require("../../assets/paca.jpg"),
    },

    {
      backgroundColor: "snow",
      topicImage: require("../../assets/img17.jpg"),
      title: "The hunting party",
      writerName: "Lucy Foley",
      genre: "Mystery",
      writerImage: require("../../assets/Lucy-Foley.jpg"),
    },

    {
      backgroundColor: "snow",
      topicImage: require("../../assets/adults.jpg"),
      title: "The Adults",
      writerName: "Hulse Caroline",
      genre: "Adults Fiction",
      writerImage: require("../../assets/hulse.jpg"),
    },

    {
      backgroundColor: "snow",
      topicImage: require("../../assets/howl.jpg"),
      title: "Broken Howl",
      writerName: "Ann Denton",
      genre: "Romance Fantasy",
      writerImage: require("../../assets/denton.jpg"),
    },
    {
      backgroundColor: "snow",
      topicImage: require("../../assets/lucie.jpg"),
      title: "Keep you close",
      writerName: "Whitehouse Lucie",
      genre: "Suspense",
      writerImage: require("../../assets/whitehouse.jpg"),
    },
  ];
  return (
    <View>
      <View>
        <FlatList
          data={info}
          keyExtractor={(item, index) => {
            return index;
          }}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.flatListItems}
                onPress={() =>
                  navigation.navigate("Details", { details: item })
                }
              >
                <View
                  style={{
                    backgroundColor: item.backgroundColor,
                    height: 10,
                    width: 100,
                  }}
                ></View>
                <View style={styles.postCard}>
                  <View style={styles.imageTextView}>
                    <Image source={item.topicImage} style={styles.topicImage} />
                  </View>
                  <View style={styles.TitleWriterNames}>
                    <Text style={styles.topicTitle}>{item.title}</Text>

                    <View style={styles.writerImageName}>
                      <View>
                        <Image
                          source={item.writerImage}
                          style={styles.writerImage}
                        />
                        <Text style={styles.writerName}>
                          {" "}
                          {item.writerName}
                        </Text>
                      </View>

                      <Text style={styles.genres}>{item.genre}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default BookShop;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    height: 150,
    backgroundColor: "snow",
    flex: 1,
  },

  PostsCard: {
    position: "absolute",
    backgroundColor: "white",
    marginLeft: 10,
    marginTop: 10,
    flex: 1,
  },
  ImageTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TitleWriterNames: {
    justifyContent: "space-between",
    height: 80,
    width: 200,
    marginLeft: 115,
  },
  writerImageName: {
    flexDirection: "row",
    alignItems: "center",
  },

  writerImage: {
    height: 30,
    width: 30,
    bottom: 70,
    marginRight: 10,
    borderRadius: 50,
  },

  topicTitle: {
    fontSize: 16,
    bottom: 90,
    fontWeight: "bold",
    color: "#324558",
  },
  topicImage: {
    height: 130,
    width: 90,
    marginLeft: 7,
    marginTop: 7,
  },

  writerName: {
    fontSize: 12,
    marginLeft: 35,
    bottom: 90,
    color: "#324558",
  },
  genres: {
    marginLeft: 15,
    bottom: 75,
    fontSize: 13,
    color: "red",
  },
});
