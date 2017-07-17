import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from "react-native";

import Prompt from "react-native-prompt";

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
    infoModalVisible: false,
    promptVisible: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      light: require("../assets/fonts/Rajdhani-Light.ttf"),
      bold: require("../assets/fonts/Rajdhani-Bold.ttf"),
      regular: require("../assets/fonts/Rajdhani-Regular.ttf")
    });

    this.setState({ loading: false });
    this.refs.body.fadeIn();
  }

  togglePrompt = () =>
    this.setState({ promptVisible: !this.state.promptVisible });

  toggleModal = () =>
    this.setState({ infoModalVisible: !this.state.infoModalVisible });

  mail = email =>
    this.setState({
      promptVisible: false,
      message: `You said "${email}"`
    });

  nav = where => {
    this.props.navigation.navigate(where);
  };

  render() {
    return (
      <Image source={require("../assets/galaxy.jpg")} style={styles.container}>
        {this.state.loading
          ? null
          : <Animatable.View duration={1000} ref="body" style={styles.body}>
              <Modal
                title="About The App"
                toggle={this.toggleModal}
                visible={this.state.infoModalVisible}
              >
                <Prompt
                  title="ENTER YOUR EMAIL"
                  placeholder="truthseeker@..."
                  visible={this.state.promptVisible}
                  onCancel={() =>
                    this.setState({
                      promptVisible: false,
                      message: "You cancelled"
                    })}
                  onSubmit={value => this.mail(value)}
                  {...theme.components.prompt}
                />

                <Text style={styles.modalBodyText}>
                  This is the beginning of the new Sirius Contact Project.
                </Text>
                <Text style={styles.modalBodyText}>
                  If you wish to provide feedback, contribute or provide funding
                  for further features...
                </Text>
                <Button
                  style={{
                    paddingVertical: 12,
                    backgroundColor: theme.colors.darkBlue,
                    borderWidth: 4,
                    marginBottom: 16
                  }}
                  onPress={this.togglePrompt}
                >
                  <Text
                    style={[
                      styles.bodyText,
                      styles.buttonText,
                      {
                        fontSize: 24,
                        textAlign: "center",
                        fontFamily: "regular"
                      }
                    ]}
                  >
                    MAKE CONTACT
                  </Text>
                </Button>
                <Text style={styles.modalBodyText}>Thank you,</Text>
                <Text style={styles.modalBodyText}>
                  Your Sirius Disclosure Dev Team
                </Text>
              </Modal>

              <Image
                style={styles.logo}
                source={require("../assets/logo.png")}
              />

              <Text style={[styles.title]}>Contact Tool</Text>

              <View style={styles.bottomPanel}>
                <TouchableOpacity onPress={this.toggleModal}>
                  <Ionicons
                    name="md-information-circle"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: null,
    height: null,
    backgroundColor: "black"
  },
  body: {
    backgroundColor: "rgba(0,0,0,0.75)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    width: theme.metrics.width,
    height: theme.metrics.height
  },
  title: {
    fontFamily: "bold",
    fontSize: 24,
    color: theme.colors.opaqueWhite(0.9),
    textShadowColor: theme.colors.opaqueWhite(0.2),
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 2
  },
  bodyText: {
    fontFamily: "regular",
    fontSize: 24,
    color: "white"
  },
  modalBodyText: {
    fontFamily: "regular",
    fontSize: 24,
    marginBottom: 16
  },
  logo: {
    width: 304,
    height: 54,
    opacity: 0.8
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
