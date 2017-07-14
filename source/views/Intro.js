import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  TouchableOpacity
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import theme from "../theme";

export default class Intro extends React.Component {
  static navigationOptions = { title: "Intro", header: null };

  nav = where => {
    this.props.navigation.navigate(where);
  };

  openAboutModal = () => console.log("cookoo!");

  render() {
    return (
      <Image source={require("../assets/galaxy.jpg")} style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />

        <Text style={styles.text}>Contact Tool</Text>

        <View style={styles.bottomPanel}>
          <TouchableOpacity onPress={this.openAboutModal}>
            <Ionicons
              style={{ opacity: 0.8 }}
              name="md-information-circle"
              size={42}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.nav("Intro")}
            style={styles.button}
          >
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
    height: null
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "100",
    fontFamily: Platform.OS === "android" ? "Roboto" : null
  },
  logo: {
    height: 56,
    width: theme.metrics.width * 0.9
  },
  bottomPanel: {
    position: "absolute",
    bottom: 24,
    paddingHorizontal: 24,
    flex: 1,
    alignItems: "flex-end",
    width: theme.metrics.width,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    borderWidth: 1,
    borderColor: theme.colors.opaqueLightBlue(0.8),
    backgroundColor: theme.colors.opaqueDarkBlue(0.6),
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  buttonText: {
    fontSize: 16
  }
});
