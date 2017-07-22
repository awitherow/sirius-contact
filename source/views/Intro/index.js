import React from "react";
import { Platform, Text, Image, View, TouchableOpacity } from "react-native";
import Prompt from "react-native-prompt";

import { Ionicons } from "@expo/vector-icons";

import Button from "../../ui/Button";

import theme from "../../theme";
import styles from "./styles";

import AboutModal from "./AboutModal";

class Intro extends React.Component {
  static navigationOptions = { title: "Intro", header: null };
  state = {
    infoModalVisible: false,
    promptVisible: false,
    promptState: "waiting"
  };

  nav = where => this.props.navigation.navigate(where);

  toggleModal = () =>
    this.setState({ infoModalVisible: !this.state.infoModalVisible });

  render() {
    return (
      <View>
        <AboutModal
          infoModalVisible={this.state.infoModalVisible}
          toggleModal={this.toggleModal}
        />

        <Image style={styles.logo} source={require("../../assets/logo.png")} />

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
      </View>
    );
  }
}

export default fadeInLoad(Intro);
