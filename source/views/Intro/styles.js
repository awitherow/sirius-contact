import { StyleSheet } from "react-native";
import theme from "../../theme";

export default StyleSheet.create({
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
    fontSize: 20,
    fontFamily: "bold"
  }
});
