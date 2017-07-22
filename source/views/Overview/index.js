import React, { Component } from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import fadeInLoad from "../../containers/fadeInLoader";

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
      "Make Contact together, get involved in the community. Coming Soon!"
  }
];

class Overview extends Component {
  static navigationOptions = { title: "Overview", header: null };

  nav = where => this.props.navigation.navigate(where);

  render() {
    return possibilities.map(({ id, img, title, description }) =>
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
    );
  }
}

export default fadeInLoad(Overview);
