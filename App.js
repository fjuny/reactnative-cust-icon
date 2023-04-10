import React from "react";
import { StyleSheet, View } from "react-native";
import TestGradient from "./components/TestGradient";
import TestIcon from "./components/TestIcon";

export default function App() {
  return (<View style={styles.container}><TestIcon /></View>);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b08502",
  },
});