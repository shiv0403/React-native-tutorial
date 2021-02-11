import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

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

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.key}
        numColumns={2}
        data={people}
        renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    padding: 20,
  },
  text: {
    backgroundColor: "pink",
    padding: 20,
    margin: 20,
    fontSize: 24,
  },
});