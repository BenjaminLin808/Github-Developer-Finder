import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  Pressable,
  StyleSheet,
} from "react-native";

import Header from "./Header";
import MyText from "components/MyText";

const Settings = () => {
  const [theme, setTheme] = useState("dark"); // ["dark", "light"
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Header />
      <Pressable style={styles.button}>
        <View style={styles.radio}></View>
        <MyText style={{ fontSize: 25 }}>dark</MyText>
      </Pressable>
      <View style={styles.line}></View>
      <Pressable style={styles.button}>
        <View style={styles.radio}></View>
        <MyText style={{ fontSize: 25 }}>light</MyText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  line: {
    height: 2,
    backgroundColor: "#fff",
    width: "100%",
  },
});

export default Settings;
