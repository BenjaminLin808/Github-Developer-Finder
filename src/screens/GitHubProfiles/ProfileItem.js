import { View, Image, StyleSheet } from "react-native";
import { Text, TextBold } from "components/theme/Text";

const ProfileItem = ({ profile }) => {
  return (
    <View style={{ ...styles.card }}>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Image source={{ uri: profile.avatar_url }} style={styles.avatar} />
        <View>
          <TextBold style={{ fontSize: 24 }}>{profile.name}</TextBold>
          <Text style={{ color: "#0079ff" }}>@{profile.login}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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
export default ProfileItem;
