import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, handleDelete }) {
  return (
    <TouchableOpacity onPress={() => handleDelete(item.key)}>
      <View>
        <MaterialIcons name="delete" size={24} color="black" />
        <Text style={styles.item}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    padding: 15,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#333",
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
