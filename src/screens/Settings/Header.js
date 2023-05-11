import { View } from "react-native";
import { TextBold } from "components/theme/Text";

const Header = ({ ...rest }) => {
  return (
    <View {...rest}>
      <TextBold style={{ fontSize: 30 }}>devfinder : Settings</TextBold>
    </View>
  );
};

export default Header;
