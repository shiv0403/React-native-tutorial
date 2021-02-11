import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
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
      {people.map((item) => {
        return (
          <View key={item.key}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    backgroundColor: "pink",
    padding: 20,
    margin: 20,
    fontSize: 24,
  },
});
