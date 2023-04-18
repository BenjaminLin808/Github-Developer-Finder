import { View, Image, TextInput, Pressable, StyleSheet } from "react-native";
import { MyText, MyTextBold } from "../../components/MyText";

const InputArea = () => {
  return (
    <View style={styles.inputArea}>
      <View style={styles.input}>
        <Image
          source={require("../../assets/images/icon-search.png")}
          style={{ marginRight: 10 }}
        />
        <TextInput
          value={""}
          placeholder="Enter GitHub username"
          keyboardType="default"
          placeholderTextColor={"#fff"}
        />
      </View>

      <Pressable style={styles.button}>
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
