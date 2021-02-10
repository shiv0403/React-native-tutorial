import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, SetName] = useState("Shivansh");

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <View>
        <Button style={styles.button} title="Click Me" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
    display: "none",
  },
});
