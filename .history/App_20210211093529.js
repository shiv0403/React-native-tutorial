import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todo, setTodo] = useState([
    { text: "wake up", key: "1" },
    { text: "eat breakfast", key: "2" },
    { text: "exercise", key: "3" },
    { text: "study", key: "4" },
    { text: "sleep", key: "5" },
  ]);

  const handleDelete = (key) => {
    setTodo((todos) => {
      return todos.filter((todo) => todo.key != key);
    });
  };

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
              return <TodoItem item={item} />;
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
  },
  list: {
    margin: 20,
  },
});
