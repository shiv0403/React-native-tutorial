import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddTodo() {
  const [text, setText] = useState("");

  return (
    <View style={styles.addTodo}>
      <TextInput
        style={styles.input}
        placeholder="write a task..."
        onChangeText={(val) => setText(val)}
      />
      <Button title="Add Todo" color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  addTodo: {
    margin: 20,
  },
  input: {
    width: 200,
    fontSize: 18,
    padding: 20,
  },
});