import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function AddTodo() {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="write a task..."
        onChangeText={(val) => setText(val)}
      />
      <Button title="Add Todo" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    fontSize: 18,
  },
});