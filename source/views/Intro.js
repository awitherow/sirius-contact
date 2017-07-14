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

import Button from "../ui/Button";

import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import theme from "../theme";

import { Font } from "expo";

export default class Intro extends React.Component {
  static navigationOptions = { title: "Intro", header: null };
  state = {
    loading: true
  };

  async componentDidMount() {
    await Font.loadAsync({
      light: require("../assets/fonts/Rajdhani-Light.ttf")
    });

    this.setState({ loading: false });
    this.refs.body.fadeIn();
  }

  nav = where => {
    this.props.navigation.navigate(where);
  };

  openAboutModal = () => console.log("cookoo!");

  render() {
    console.log(theme.metrics);
    return (
      <Image source={require("../assets/galaxy.jpg")} style={styles.container}>
        {this.state.loading
          ? null
          : <Animatable.View
              duration={1000}
              ref="body"
              style={styles.container}
            >
              <Image
                style={styles.logo}
                source={require("../assets/logo.png")}
              />

              <Text style={[styles.text, { fontFamily: "light" }]}>
                Contact Tool
              </Text>

              <View style={styles.bottomPanel}>
                <TouchableOpacity onPress={this.openAboutModal}>
                  <Ionicons
                    name="md-information-circle"
                    size={40}
                    color={theme.colors.opaqueLightBlue(0.9)}
                  />
                </TouchableOpacity>

                <Button onPress={() => this.nav("Intro")}>
                  <Text
                    style={[
                      styles.text,
                      styles.buttonText,
                      { fontFamily: "light" }
                    ]}
                  >
                    GET STARTED
                  </Text>
                </Button>
              </View>
            </Animatable.View>}
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
    fontWeight: "100"
  },
  logo: {
    height: 57.85,
    width: 324
  },
  bottomPanel: {
    position: "absolute",
    bottom: 24,
    paddingHorizontal: 24,
    flex: 1,
    alignItems: "center",
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
