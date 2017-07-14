import React from "react";
import { Platform, StyleSheet, Text, Image } from "react-native";

import theme from "./source/theme.js";

export default class App extends React.Component {
  render() {
    return (
      <Image
        source={require("./source/assets/galaxy.jpg")}
        style={styles.container}
      >
            <Image style={styles.logo} source={require("./source/assets/logo.png")} />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
      justifyContent: "center",
      width: null,
      height: null,
  },
    text: {
	color: "white",
	fontSize: 24,
	fontWeight: "100",
	fontFamily: Platform.OS === "android" ? "Roboto" : null, 
    },
    logo: {
	width: theme.metrics.width * 0.7,
	height: 44 // why is this height/width of things so crap?
    }
});
