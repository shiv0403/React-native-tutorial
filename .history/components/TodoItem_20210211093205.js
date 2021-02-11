import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TodoItem({ item }) {
  return (
    <TouchableOpacity>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    padding: 15,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#333",
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
