import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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
