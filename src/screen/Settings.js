import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    // paddingVertical: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Settings;
