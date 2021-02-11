import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AddTodo from "./components/AddTodo";
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

  const handleSubmit = (text) => {
    setTodo((todos) => {
      return [{ text: text, key: Math.random().toString() }, ...todos];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo />
        <View style={styles.list}>
          <FlatList
            data={todo}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => {
              return <TodoItem item={item} handleDelete={handleDelete} />;
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
