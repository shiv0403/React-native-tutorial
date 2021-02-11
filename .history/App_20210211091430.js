import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "./components/Header";

export default function App() {
  const [todo, setTodo] = useState([
    { text: "wake up", key: "1" },
    { text: "eat breakfast", key: "2" },
    { text: "exercise", key: "3" },
    { text: "study", key: "4" },
    { text: "sleep", key: "5" },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList
            data={todo}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => {
              return <Text>{item.text}</Text>;
            }}
          />
        </View>
      </View>
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
});
