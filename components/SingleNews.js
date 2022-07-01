import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleNews = ({ item, index, darkTheme }) => {
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        transform: [{ scaleY: -1 }],
      }}
    >
      <Image
        source={{ uri: item.urlToImage }}
        style={{ height: "45%", resizeMode: "cover", width: windowWidth }}
      />
      <View
        style={{
          ...styles.description,
          backgroundColor: darkTheme ? "#282C35" : "white",
        }}
      >
        <Text
          style={{
            ...styles.title,
            fontSize: 26,
            color: darkTheme ? "yellow" : "green",
          }}
        >
          {/* {item.title} */}
          {item?.title?.slice(0, 59)} ....
        </Text>
        <Text
          style={{
            ...styles.content,
            fontSize: 18,
            color: darkTheme ? "white" : "black",
          }}
        >
          {item.description}
          {/* {item?.description?.slice(0, 145)}. */}
        </Text>
        <Text style={{ fontSize: 18, color: darkTheme ? "white" : "black" }}>
          Short by
          <Text style={{ fontWeight: "bold" ,  fontSize: 18,}}>
            {" "}
            {item.author ?? "unknown"}
          </Text>
        </Text>
      </View>
      <ImageBackground
        blurRadius={50}
        style={styles.footer}
        source={{ uri: item.urlToImage }}
      >
        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
          <Text
            style={{
              fontSize: 18,
              color: darkTheme ? "white" : "black",
            }}
          >
            {item?.content?.slice(0, 35)}......
          </Text>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "yellow" }}>
            Read More
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SingleNews;

const styles = StyleSheet.create({
  description: {
    padding: 15,
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  content: { fontSize: 18, paddingBottom: 10 },
  footer: {
    height: 80,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
