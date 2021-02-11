import React, { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";
import AddTodo from "./components/AddTodo";
import Flex from "./components/Flex";
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
    if (text.length > 3) {
      setTodo((todos) => {
        return [{ text: text, key: Math.random().toString() }, ...todos];
      });
    } else {
      Alert.alert("OOPS!", "Task lenght must be over 3 chars", [
        { text: "Understood", onPress: () => console.log("Alert Closed") },
      ]);
    }
  };

  return (
    // <Flex />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo style={styles.form} handleSubmit={handleSubmit} />
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
    </TouchableWithoutFeedback>
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
  form: {
    flex: 1,
  },
});
