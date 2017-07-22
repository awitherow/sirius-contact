import { StyleSheet } from "react-native";

import theme from "../../theme";

const SQUARE_EDGE = theme.metrics.height * 0.3;

const imageSize = {
  height: SQUARE_EDGE,
  width: SQUARE_EDGE,
  borderRadius: SQUARE_EDGE / 2
};

const styles = StyleSheet.create({
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
