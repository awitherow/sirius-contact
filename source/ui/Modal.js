import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";

import Button from "../ui/Button";

import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import theme from "../theme";

export default function UIModal({ title, toggle, visible, children }) {
  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={visible}
      onRequestClose={() => console.log("closed info modal")}
    >
      <View style={styles.header}>
        <Text style={styles.title}>
          {title.toUpperCase()}
        </Text>
        <TouchableOpacity onPress={toggle}>
          <Ionicons name="ios-close" size={64} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        {children}
      </View>
    </Modal>
  );
}

const MODAL_HEADER_HEIGHT = 80;

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontFamily: "light",
    color: "black",
    fontSize: 32
  },
  header: {
    position: "absolute",
    height: MODAL_HEADER_HEIGHT,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    left: 0,
    right: 0
  },
  body: {
    marginTop: MODAL_HEADER_HEIGHT,
    padding: 24
  }
});
