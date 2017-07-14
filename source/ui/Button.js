import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import theme from "../theme";

import { Font } from "expo";

const Button = ({ onPress, style, children }) =>
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    {children}
  </TouchableOpacity>;

export default Button;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: theme.colors.opaqueLightBlue(0.8),
    backgroundColor: theme.colors.opaqueDarkBlue(0.6),
    paddingVertical: 8,
    paddingHorizontal: 16
  }
});
