import { View, Pressable, StyleSheet } from "react-native";
import { TextBold } from "components/theme/Text";
import { Icon } from "../../components/theme";
import useProfiles from "hooks/useProfiles";
import useTheme from "hooks/useTheme";

const Header = () => {
  const { colors } = useTheme();
  const { profiles, activeProfile } = useProfiles();
  const findProfile = () => {
    const res = profiles.some((profile) => profile.login === activeProfile);
    return res;
  };
  return (
    <View style={styles.header}>
      <TextBold style={{ fontSize: 30, color: colors.text }}>
        devfinder
      </TextBold>
      {findProfile() ? (
        <Icon name="checkmark-circle" color="green" />
      ) : (
        <Pressable>
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
