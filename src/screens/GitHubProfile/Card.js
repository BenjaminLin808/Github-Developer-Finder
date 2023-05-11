import { View, StyleSheet, Image } from "react-native";
import { Text, TextBold } from "components/theme/Text";
import Location from "components/svgr/Location";
import Company from "components/svgr/Company";
import Website from "components/svgr/Website";
import Twitter from "components/svgr/Twitter";
import NotFound from "components/svgr/NotFound";

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
        <Text>Searching ...</Text>
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
        <Text>There's no such a profile</Text>
        <Text>Or something else is wrong</Text>
      </View>
    );
  }
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
        <View>
          <TextBold style={{ fontSize: 24 }}>
            {user.name ? user.name : ""}
          </TextBold>
          <Text style={{ color: "#0079ff" }}>
            {user.login ? `@${user.login}` : ""}
          </Text>
          <Text></Text>
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
        <Text style={{ color: "#697c9a" }}>
          {user.bio ? user.bio : "This profile has no bio"}
        </Text>
      </View>
      <View style={styles.status}>
        <View>
          <Text style={styles.statusLabel}>Repos</Text>
          <TextBold style={styles.statusNumber}>{user.public_repos}</TextBold>
        </View>
        <View>
          <Text style={styles.statusLabel}>Followers</Text>
          <TextBold style={styles.statusNumber}>{user.followers}</TextBold>
        </View>
        <View>
          <Text style={styles.statusLabel}>Following</Text>
          <TextBold style={styles.statusNumber}>
            {user.following ? user.following : "0"}
          </TextBold>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={styles.iconLabel}>
          <Location
            color={user.location ? "white" : "#4b6a9b"}
            style={styles.icon}
          />
          <Text style={{ color: user.location ? "white" : "#4b6a9b" }}>
            {user.location ? user.location : "Not available"}
          </Text>
        </View>
        <View style={styles.iconLabel}>
          <Twitter
            color={user.twitter_username ? "white" : "#4b6a9b"}
            style={styles.icon}
          />
          <Text style={{ color: user.location ? "white" : "#4b6a9b" }}>
            {user.twitter_username ? user.twitter_username : "Not available"}
          </Text>
        </View>
        <View style={styles.iconLabel}>
          <Website
            color={user.blog ? "white" : "#4b6a9b"}
            style={styles.icon}
          />
          <Text style={{ color: user.location ? "white" : "#4b6a9b" }}>
            {user.blog ? user.blog : "Not available"}
          </Text>
        </View>
        <View style={styles.iconLabel}>
          <Company
            color={user.company ? "white" : "#4b6a9b"}
            style={styles.icon}
          />
          <Text style={{ color: user.location ? "white" : "#4b6a9b" }}>
            {user.company ? user.company : "Not available"}
          </Text>
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
