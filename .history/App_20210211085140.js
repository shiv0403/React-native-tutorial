import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
        numColumns={2}
        keyExtractor={(item) => item.key}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
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
