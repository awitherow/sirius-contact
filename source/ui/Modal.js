import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";

import Button from "../ui/Button";

import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import theme from "../theme";

export default function UIModal({ title, toggle, visible, children }) {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={() => console.log("closed info modal")}
    >
      <View style={styles.header}>
        <Text style={styles.title}>
          {title}
        </Text>
        <TouchableOpacity onPress={toggle}>
          <Ionicons
            name="ios-close"
            size={40}
            color={theme.colors.opaqueLightBlue(0.9)}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.modalBody}>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  title: {},
  header: {},
  body: {}
});
