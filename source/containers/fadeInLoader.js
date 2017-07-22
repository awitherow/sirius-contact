import React, { Componenet } from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

export default function fadeInLoad(Componenet, props) {
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
          {this.state.loading
            ? null
            : <Animatable.View duration={1000} ref="body" style={styles.body}>
                <Component {...props} />
              </Animatable.View>}
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
  },
  body: {
    backgroundColor: "rgba(0,0,0,0.75)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    width: theme.metrics.width,
    height: theme.metrics.height
  }
});
