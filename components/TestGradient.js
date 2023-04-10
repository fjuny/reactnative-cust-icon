import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function TestGradient() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#8B8000", "#fff"]}
        style={styles.background}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 200,
    alignItems: "center",
    jusifyContent: "center",
  },
  background: {
    borderRadius: 5,
    height: 224,
    width: 264,
  },
});

export default TestGradient;
