import { View, StyleSheet, Image } from "react-native";
import { MyTextBold, MyText } from "../../components/MyText";
import Location from "../../components/Location";
import Company from "../../components/Company";
import Website from "../../components/Website";
import Twitter from "../../components/Twitter";
import NotFound from "../../components/NotFound";

const Card = ({ user, error, loading }) => {
  // when loading is true, return null
  if (loading) {
    return (
      <View
        style={{
          ...styles.card,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MyText>Searching ...</MyText>
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          ...styles.card,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NotFound />
        <MyText>There's no such a profile</MyText>
        <MyText>Or something else is wrong</MyText>
      </View>
    );
  }
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
        <View>
          <MyTextBold style={{ fontSize: 24 }}>
            {user.name ? user.name : ""}
          </MyTextBold>
          <MyText style={{ color: "#0079ff" }}>
            {user.login ? `@${user.login}` : ""}
          </MyText>
          <MyText></MyText>
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
        <MyText style={{ color: "#697c9a" }}>
          {user.bio ? user.bio : "This profile has no bio"}
        </MyText>
      </View>
      <View style={styles.status}>
        <View>
          <MyText style={styles.statusLabel}>Repos</MyText>
          <MyTextBold style={styles.statusNumber}>
            {user.public_repos}
          </MyTextBold>
        </View>
        <View>
          <MyText style={styles.statusLabel}>Followers</MyText>
          <MyTextBold style={styles.statusNumber}>{user.followers}</MyTextBold>
        </View>
        <View>
          <MyText style={styles.statusLabel}>Following</MyText>
          <MyTextBold style={styles.statusNumber}>
            {user.following ? user.following : "0"}
          </MyTextBold>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={styles.iconLabel}>
          <Location
            color={user.location ? "white" : "#4b6a9b"}
            style={styles.icon}
          />
          <MyText style={{ color: user.location ? "white" : "#4b6a9b" }}>
            {user.location ? user.location : "Not available"}
          </MyText>
        </View>
        <View style={styles.iconLabel}>
          <Twitter
            color={user.twitter_username ? "white" : "#4b6a9b"}
            style={styles.icon}
          />
          <MyText style={{ color: user.location ? "white" : "#4b6a9b" }}>
            {user.twitter_username ? user.twitter_username : "Not available"}
          </MyText>
        </View>
        <View style={styles.iconLabel}>
          <Website
            color={user.blog ? "white" : "#4b6a9b"}
            style={styles.icon}
          />
          <MyText style={{ color: user.location ? "white" : "#4b6a9b" }}>
            {user.blog ? user.blog : "Not available"}
          </MyText>
        </View>
        <View style={styles.iconLabel}>
          <Company
            color={user.company ? "white" : "#4b6a9b"}
            style={styles.icon}
          />
          <MyText style={{ color: user.location ? "white" : "#4b6a9b" }}>
            {user.company ? user.company : "Not available"}
          </MyText>
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
