import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
