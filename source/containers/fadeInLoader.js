import React, { Componenet } from "react";
import { StyleSheet } from "react-native";

export default function withFadeInLoader(Componenet) {
  return class extends Component {
    state = {
      loading: true
    };

    async componentDidMount() {
      await Font.loadAsync({
        bold: require("../assets/fonts/Rajdhani-Bold.ttf"),
        regular: require("../assets/fonts/Rajdhani-Regular.ttf"),
        light: require("../assets/fonts/Rajdhani-Light.ttf")
      });

      this.setState({ loading: false });
      this.refs.body.fadeIn();
    }

    render() {
      return (
        <Image
          source={require("../assets/galaxy.jpg")}
          style={styles.container}
        >
          {this.state.loading ? null : <Component />}
        </Image>
      );
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: null,
    height: null,
    backgroundColor: "black"
  }
});
