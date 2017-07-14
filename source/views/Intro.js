import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Font } from "expo";

import * as Animatable from "react-native-animatable";

import Button from "../ui/Button";
import Modal from "../ui/Modal";

import theme from "../theme";

export default class Intro extends React.Component {
  static navigationOptions = { title: "Intro", header: null };
  state = {
    loading: true,
    infoModalVisible: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      light: require("../assets/fonts/Rajdhani-Light.ttf")
    });

    this.setState({ loading: false });
    this.refs.body.fadeIn();
  }

  toggleModal = () =>
    this.setState({ infoModalVisible: !this.state.infoModalVisible });

  nav = where => {
    this.props.navigation.navigate(where);
  };

  render() {
    return (
      <Image source={require("../assets/galaxy.jpg")} style={styles.container}>
        {this.state.loading
          ? null
          : <Animatable.View
              duration={1000}
              ref="body"
              style={styles.container}
            >
              <Modal
                title="About The App"
                toggle={this.toggleModal}
                visible={this.state.infoModalVisible}
              >
                <Text>Hello!</Text>
              </Modal>

              <Image
                style={styles.logo}
                source={require("../assets/logo.png")}
              />

              <Text style={[styles.text]}>Contact Tool</Text>

              <View style={styles.bottomPanel}>
                <TouchableOpacity onPress={this.toggleModal}>
                  <Ionicons
                    name="md-information-circle"
                    size={40}
                    color={theme.colors.opaqueLightBlue(0.9)}
                  />
                </TouchableOpacity>

                <Button onPress={() => this.nav("Intro")}>
                  <Text style={[styles.text, styles.buttonText]}>
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
    fontFamily: "light",
    color: "white",
    fontSize: 20
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
  buttonText: {
    fontSize: 16
  }
});
