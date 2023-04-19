import { View, StyleSheet, Image } from "react-native";
import { MyTextBold, MyText } from "../../components/MyText";
import Location from "../../components/Location";
import Company from "../../components/Company";
import Website from "../../components/Website";
import Twitter from "../../components/Twitter";

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
      <View style={styles.status}>
        <View>
          <MyText style={styles.statusLabel}>Repos</MyText>
          <MyTextBold style={styles.statusNumber}>0</MyTextBold>
        </View>
        <View>
          <MyText style={styles.statusLabel}>Followers</MyText>
          <MyTextBold style={styles.statusNumber}>1</MyTextBold>
        </View>
        <View>
          <MyText style={styles.statusLabel}>Following</MyText>
          <MyTextBold style={styles.statusNumber}>0</MyTextBold>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={styles.iconLabel}>
          <Location color="white" style={styles.icon} />
          <MyText>Place</MyText>
        </View>
        <View style={styles.iconLabel}>
          <Twitter color="white" style={styles.icon} />
          <MyText>Twitter</MyText>
        </View>
        <View style={styles.iconLabel}>
          <Website color="white" style={styles.icon} />
          <MyText>Website</MyText>
        </View>
        <View style={styles.iconLabel}>
          <Company color="white" style={styles.icon} />
          <MyText>Company</MyText>
        </View>
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
  status: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#141d2f",
    borderRadius: 10,
    padding: 10,
  },
  statusLabel: {
    fontSize: 13,
  },
  statusNumber: {
    fontSize: 24,
  },
  iconLabel: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
export default Card;
