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
    backgroundColor: theme.colors.lightBlue,
    paddingVertical: 8,
    paddingHorizontal: 16
  }
});
