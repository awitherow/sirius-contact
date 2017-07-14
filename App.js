import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";

import {Ionicons} from "@expo/vector-icons";

import theme from "./source/theme.js";

export default class App extends React.Component {
  render() {
    return (
      <Image
        source={require("./source/assets/galaxy.jpg")}
        style={styles.container}
      >
        <Image
          style={styles.container}
          source={require("./source/assets/dust.png")}
        >
          <Image
            style={styles.logo}
            source={require("./source/assets/logo.png")}
          />
          <Text style={styles.text}>Contact Tool</Text>
        </Image>
        <View style={styles.controlPanel}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              style={{opacity: 0.8}}
              name="md-information-circle"
              size={42}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.text, styles.buttonText]}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 20,
    fontWeight: "100",
    fontFamily: Platform.OS === "android" ? "Roboto" : null,
  },
  logo: {
    height: 56,
    width: theme.metrics.width * 0.9,
  },
  controlPanel: {
    position: "absolute",
    bottom: 24,
    paddingHorizontal: 24,
    flex: 1,
    alignItems: "flex-end",
    width: theme.metrics.width,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderWidth: 1,
    borderColor: theme.colors.opaqueLightBlue(0.8),
    backgroundColor: theme.colors.opaqueDarkBlue(0.6),
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 16,
  },
});
