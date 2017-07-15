import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default {
  colors: {
    lightBlue: "rgb(11,157,253)",
    darkBlue: "rgb(5, 58, 89)",
    white: "white",
    opaqueWhite: opacity => `rgba(255,255,255,${opacity})`,
    opaqueDarkBlue: opacity => `rgba(5, 58, 89, ${opacity})`,
    opaqueLightBlue: opacity => `rgba(11, 157, 253, ${opacity})`
  },
  metrics: {
    width,
    height
  }
};
