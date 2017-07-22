import React from "react";
import { Platform, Text, Image, View, TouchableOpacity } from "react-native";
import Prompt from "react-native-prompt";
import * as Animatable from "react-native-animatable";

import { Ionicons } from "@expo/vector-icons";
import { Font } from "expo";

import Button from "../../ui/Button";

import theme from "../../theme";
import styles from "./styles";

import AboutModal from "./AboutModal";

export default class Intro extends React.Component {
  static navigationOptions = { title: "Intro", header: null };
  state = {
    loading: true,
    infoModalVisible: false,
    promptVisible: false,
    promptState: "waiting"
  };

  async componentDidMount() {
    await Font.loadAsync({
      light: require("../../assets/fonts/Rajdhani-Light.ttf"),
      bold: require("../../assets/fonts/Rajdhani-Bold.ttf"),
      regular: require("../../assets/fonts/Rajdhani-Regular.ttf")
    });

    this.setState({ loading: false });
    this.refs.body.fadeIn();
  }

  nav = where => this.props.navigation.navigate(where);

  toggleModal = () =>
    this.setState({ infoModalVisible: !this.state.infoModalVisible });

  render() {
    return (
      <Image
        source={require("../../assets/galaxy.jpg")}
        style={styles.container}
      >
        {this.state.loading
          ? null
          : <Animatable.View duration={1000} ref="body" style={styles.body}>
              <AboutModal
                infoModalVisible={this.state.infoModalVisible}
                toggleModal={this.toggleModal}
              />

              <Image
                style={styles.logo}
                source={require("../../assets/logo.png")}
              />

              <Text style={[styles.title]}>Contact Tool</Text>

              <View style={styles.bottomPanel}>
                <TouchableOpacity onPress={this.toggleModal}>
                  <Ionicons
                    name="ios-information-circle-outline"
                    size={48}
                    color={theme.colors.opaqueLightBlue(0.9)}
                  />
                </TouchableOpacity>

                <Button onPress={() => this.nav("Overview")}>
                  <Text style={[styles.bodyText, styles.buttonText]}>
                    GET STARTED
                  </Text>
                </Button>
              </View>
            </Animatable.View>}
      </Image>
    );
  }
}
