import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import BackIcon from "react-native-vector-icons/MaterialIcons";
import DotIcon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const Details = (props) => {
  const { topicImage, title, writerName, BackgroundColor, timeStamp } =
    props.route.params.details;

  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View>
        <TouchableOpacity onPress={goBack} style={styles.backOpacity}>
          <BackIcon size={25} style={styles.backIcon} name="arrow-back-ios" />
          <Text style={styles.booklyText}> Bookly</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: 210,
          height: 250,
          position: "absolute",
          backgroundColor: BackgroundColor,
        }}
      ></View>

      <View>
        <Image style={styles.TopicImage} source={topicImage} />
      </View>

      <View>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View>
        <Text style={styles.writername}>{writerName}</Text>
        <Text style={styles.timestamp}>
          {" "}
          <DotIcon style={styles.dot} name="dot-single" /> {timeStamp}
        </Text>
      </View>

      <View>
        <Text style={styles.info}>
          The Other Black Girl traces the experiences of five Black women at
          Wagner Books from 1983 to 2018 to address subjects including systemic
          and internalized racism, Black female experiences, workplace
          privilege, and the role of media in racial representations.
        </Text>
        <Text style={styles.info}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <Text style={styles.info}></Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  booklyText: {
    top: 33,
    left: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#324558",
  },

  backIcon: {
    position: "absolute",
    top: 33,
    left: 15,
    color: "#505D6D",
  },

  backOpacity: {
    zIndex: 1,
    position: "absolute",
  },

  TopicImage: {
    width: 350,
    height: 300,
    marginTop: 100,
    alignSelf: "center",
    borderWidth: 10,
    borderColor: "white",
    zIndex: 3,
  },
  title: {
    fontSize: 20,
    right: 24,
    paddingHorizontal: 25,
    paddingVertical: 10,
    color: "#324558",
  },

  writername: {
    color: "#5B6A79",
  },
});

export default Details;
