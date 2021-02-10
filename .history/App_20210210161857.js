import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, SetName] = useState("Shivansh");
  const [details, setDetails] = useState({
    name: "Gango",
    age: "20",
  });

  const handleClick = () => {
    SetName("Poorvi");
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
});
