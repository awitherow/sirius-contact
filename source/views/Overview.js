import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import { Font } from "expo";

import * as Animatable from "react-native-animatable";

import theme from "../theme";

const possibilities = [
  {
    id: "Cosmonaut",
    img: require("../assets/cosmos.jpg"),
    title: "Explore the Cosmos",
    description:
      "Go where few dare to travel. Unconver the truth with guided CE-5 Protocols."
  },
  {
    id: "Terran",
    img: require("../assets/lights.jpg"),
    title: "Find the Others",
    description:
      "Out there, there are countless truthseekers like you. Make contact."
  }
];

export default class Overview extends React.Component {
  static navigationOptions = { title: "Overview", header: null };
  state = {
    loading: true
  };

  async componentDidMount() {
    await Font.loadAsync({
      bold: require("../assets/fonts/Rajdhani-Bold.ttf")
    });

    this.setState({ loading: false });
    this.refs.body.fadeIn();
  }

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
              style={styles.possibilities}
            >
              {possibilities.map(({ id, img, title, description }) =>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() => this.nav(id)}
                  key={id}
                >
                  <Image style={styles.graphic} source={img} />
                  <Text style={styles.title}>
                    {title}
                  </Text>
                  <Text style={styles.description}>
                    {description}
                  </Text>
                </TouchableOpacity>
              )}
            </Animatable.View>}
      </Image>
    );
  }
}

const SQUARE_EDGE = theme.metrics.height * 0.3;

const imageSize = {
  height: SQUARE_EDGE,
  width: SQUARE_EDGE,
  borderRadius: SQUARE_EDGE / 2
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: null,
    height: null
  },
  possibilities: {
    backgroundColor: "rgba(0,0,0,0.75)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    width: theme.metrics.width,
    height: theme.metrics.height
  },
  touchable: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  graphic: {
    ...imageSize,
    borderWidth: 4,
    borderColor: theme.colors.opaqueLightBlue(0.4),
    marginBottom: 8
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
  description: {
    fontFamily: "light",
    fontSize: 16,
    color: theme.colors.opaqueWhite(0.9),
    textAlign: "center"
  }
});
