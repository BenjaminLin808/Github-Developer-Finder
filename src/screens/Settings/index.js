import { useEffect, useState } from "react";
import { View, Pressable, StyleSheet } from "react-native";

import Header from "./Header";
import Text from "components/theme/Text";
import Main from "layouts/Main";
import useTheme from "hooks/useTheme";

const Settings = () => {
  const { theme, setTheme } = useTheme(); // ["dark", "light"]

  const handleTheme = (curTheme) => {
    if (curTheme !== theme) setTheme(curTheme);
  };

  useEffect(() => {
    console.log("theme changed to", theme);
  }, [theme]);

  return (
    <Main>
      <Header />
      <Pressable style={styles.button} onPress={() => handleTheme("dark")}>
        <View
          style={[
            styles.radio,
            theme === "dark"
              ? { backgroundColor: "#0079ff", borderColor: "white" }
              : {},
          ]}
        ></View>
        <Text style={{ fontSize: 25 }}>dark</Text>
      </Pressable>
      <View style={styles.line}></View>
      <Pressable style={styles.button} onPress={() => handleTheme("light")}>
        <View
          style={[
            styles.radio,
            theme === "light"
              ? { backgroundColor: "#0079ff", borderColor: "white" }
              : {},
          ]}
        ></View>
        <Text style={{ fontSize: 25 }}>light</Text>
      </Pressable>
    </Main>
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
    marginVertical: 20,
  },
});

export default Settings;
