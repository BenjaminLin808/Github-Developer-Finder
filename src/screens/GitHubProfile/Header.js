import { View, Pressable, StyleSheet } from "react-native";
import { TextBold } from "components/theme/Text";
import { Icon } from "../../components/theme";
import useProfiles from "hooks/useProfiles";
import useTheme from "hooks/useTheme";

const Header = ({ user }) => {
  const { colors } = useTheme();
  const { profiles, setProfiles, activeProfile } = useProfiles();

  const findProfile = () => {
    const res = profiles.some((profile) => profile.login === activeProfile);
    return res;
  };

  const addProfile = () => {
    setProfiles((curProfiles) => {
      return [
        ...curProfiles,
        {
          login: user.login,
          avatar_url: user.avatar_url,
          name: user.name,
        },
      ];
    });
  };

  return (
    <View style={styles.header}>
      <TextBold style={{ fontSize: 30, color: colors.text }}>
        devfinder
      </TextBold>
      {findProfile() ? (
        <Icon name="checkmark-circle" color="green" />
      ) : (
        <Pressable onPress={addProfile}>
          <Icon name="add-circle-outline" size={30} color={colors.text} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Header;
