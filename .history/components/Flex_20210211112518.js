import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Flex() {
  return (
    <View style={styles.flex}>
      <Text style={styles.box1}>box1</Text>
      <Text style={styles.box2}>box2</Text>
      <Text style={styles.box3}>box3</Text>
      <Text style={styles.box4}>box4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 30,
  },
  box1: {
    backgroundColor: "violet",
    padding: 10,
  },
  box2: {
    backgroundColor: "yellow",
    padding: 20,
  },
  box3: {
    backgroundColor: "coral",
    padding: 30,
  },
  box4: {
    backgroundColor: "skyblue",
    padding: 40,
  },
});