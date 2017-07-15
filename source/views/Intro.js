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
      bold: require("../assets/fonts/Rajdhani-Bold.ttf"),
      regular: require("../assets/fonts/Rajdhani-Regular.ttf")
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
          : <Animatable.View duration={1000} ref="body" style={styles.body}>
              <Modal
                title="About The App"
                toggle={this.toggleModal}
                visible={this.state.infoModalVisible}
              >
                <Text style={styles.modalBodyText}>Hello!</Text>
                <Text style={styles.modalBodyText}>
                  This is the beginning of the new Sirius Contact Project.
                </Text>
                <Text style={styles.modalBodyText}>
                  For more information about development, please email Austin at
                  au.witherow@gmail.com.
                </Text>
                <Text style={styles.modalBodyText}>Thank you,</Text>
                <Text style={styles.modalBodyText}>Sirius Disclosure Team</Text>
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
    height: null
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
    fontSize: 24
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
