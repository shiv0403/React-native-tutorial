import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, SetName] = useState("Alice");
  const [details, setDetails] = useState({
    name: "Gango",
    age: "20",
  });

  const handleClick = () => {
    SetName("John");
    setDetails({
      name: "Topper",
      age: "19",
    });
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        My name is {details.name} and I am {details.age} years old!
      </Text>
      <View style={styles.button}>
        <Button title="Click Me" onPress={handleClick} />
      </View>
      <View>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
  },
  input: {
    borderColor: "#333",
    padding: 10,
    margin: 20,
    width: 200,
  },
});
