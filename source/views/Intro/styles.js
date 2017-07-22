import { StyleSheet } from "react-native";
import theme from "../../theme";

export default StyleSheet.create({
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
