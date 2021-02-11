import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "shivansh", key: "1" },
    { name: "poorvi", key: "2" },
    { name: "chandan", key: "3" },
    { name: "sarvagya", key: "4" },
    { name: "nishant", key: "5" },
    { name: "shivam", key: "6" },
    { name: "dhiren", key: "7" },
  ]);

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
