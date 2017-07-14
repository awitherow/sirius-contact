import {Dimensions} from "react-native";

const {height, width} = Dimensions.get("window");

export default {
  colors: {
    lightBlue: "rgb(11,157,253)",
    darkBlue: "#053a59",
    opaqueDarkBlue: opacity => `rgba(5, 58, 89, ${opacity})`,
    opaqueLightBlue: opacity => `rgba(11, 157, 253, ${opacity})`,
  },
  metrics: {
    width,
    height,
  },
};
