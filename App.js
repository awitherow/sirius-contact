import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  TouchableOpacity
} from "react-native";
import { StackNavigator } from "react-navigation";

import Intro from "./source/views/Intro";

import { Ionicons } from "@expo/vector-icons";
import theme from "./source/theme.js";

export default StackNavigator({
  Intro: {
    screen: Intro
  }
});
