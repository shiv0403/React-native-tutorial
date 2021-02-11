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
    padding: 15,
    marginTop: 15,
    borderColor: "#333",
  },
});
