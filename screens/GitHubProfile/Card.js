import { View, StyleSheet, Image } from "react-native";
import { MyTextBold, MyText } from "../../components/MyText";

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../../assets/images/image-user-placeholder.png")}
          style={styles.avatar}
        />
        <View>
          <MyTextBold style={{ fontSize: 24 }}>Name</MyTextBold>
          <MyText style={{ color: "#0079ff" }}>@username</MyText>
          <MyText>Join time</MyText>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          marginBottom: 10,
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <MyText style={{ color: "#697c9a" }}>This profile has no bio</MyText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e2a47",
    borderRadius: 10,
    padding: 30,
    marginTop: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
});
export default Card;
