import React, { useState } from "react";
import { Button, Keyboard, StyleSheet, TextInput, View } from "react-native";

export default function AddTodo({ handleSubmit }) {
  const [text, setText] = useState("");

  const submitHandler = () => {
    handleSubmit(text);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.addTodo}>
      <TextInput
        style={styles.input}
        placeholder="write a task..."
        onChangeText={(val) => setText(val)}
      />
      <Button
        title="Add Todo"
        color="coral"
        width="200"
        onPress={() => submitHandler()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  addTodo: {
    margin: 20,
    flex: 0.5,
  },
  input: {
    width: 200,
    fontSize: 18,
    padding: 20,
  },
});
