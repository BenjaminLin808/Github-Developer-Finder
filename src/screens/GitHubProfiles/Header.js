import { View } from "react-native";
import { TextBold } from "components/theme/Text";
import useTheme from "hooks/useTheme";

const Header = () => {
  const { colors } = useTheme();

  return (
    <View>
      <TextBold style={{ fontSize: 30, color: colors.text }}>
        devfinder : Profiles
      </TextBold>
    </View>
  );
};

export default Header;
