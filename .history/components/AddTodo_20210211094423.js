import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function AddTodo() {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Add todo..."
        onChangeText={(val) => setText(val)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});