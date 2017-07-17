import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const colors = {
  lightBlue: "rgb(11,157,253)",
  darkBlue: "rgb(5, 58, 89)",
  white: "white",
  opaqueWhite: opacity => `rgba(255,255,255,${opacity})`,
  opaqueDarkBlue: opacity => `rgba(5, 58, 89, ${opacity})`,
  opaqueLightBlue: opacity => `rgba(11, 157, 253, ${opacity})`
};

const metrics = {
  width,
  height
};

const components = {
  prompt: {
    borderColor: colors.lightBlue,
    promptStyle: {
      borderRadius: 0
    },
    titleStyle: {
      fontFamily: "regular",
      color: colors.darkBlue
    },
    buttonStyle: {},
    buttonTextStyle: {
      color: colors.darkBlue,
      fontFamily: "bold"
    },
    submitButtonStyle: {},
    submitButtonTextStyle: {},
    cancelButtonStyle: {},
    cancelButtonTextStyle: {},
    inputStyle: {
      fontFamily: "regular"
    }
  }
};
export default {
  colors,
  metrics,
  components
};
