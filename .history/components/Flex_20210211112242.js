import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Flex() {
  return (
    <View style={styles.flex}>
      <Text style={styles.box1}>box1</Text>
      <Text style={styles.box1}>box2</Text>
      <Text style={styles.box1}>box3</Text>
      <Text style={styles.box1}>box4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    marginTop: 30,
  },
  box1: {
    backgroundColor: "violet",
    padding: 20,
  },
});
