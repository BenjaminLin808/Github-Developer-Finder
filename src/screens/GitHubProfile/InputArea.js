import { useState } from "react";
import { View, Image, TextInput, Pressable, StyleSheet } from "react-native";
import { MyText, MyTextBold } from "components/MyText";

const InputArea = ({ searchUser, loading }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    searchUser(username);
  };

  return (
    <View style={styles.inputArea}>
      <View style={styles.input}>
        <Image
          source={require("../../../assets/images/icon-search.png")}
          style={{ marginRight: 10 }}
        />
        <TextInput
          style={{
            color: "#fff",
            fontFamily: "SpaceMono-Regular",
          }}
          value={username}
          placeholder="Enter GitHub username"
          keyboardType="default"
          placeholderTextColor={"#fff"}
          onChangeText={(text) => setUsername(text)}
          disabled={username === "" || loading}
        />
      </View>

      <Pressable
        testID="searchButton"
        style={styles.button}
        onPress={() => {
          handleSubmit();
        }}
      >
        <MyTextBold>Search</MyTextBold>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputArea: {
    flexDirection: "row",
    backgroundColor: "#1e2a47",
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    height: 45,
    width: 80,
    backgroundColor: "#0079ff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default InputArea;
