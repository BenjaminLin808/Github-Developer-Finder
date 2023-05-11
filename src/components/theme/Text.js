import { Text as DefaultText } from "react-native";

const Text = ({ style, ...rest }) => {
  return (
    <DefaultText
      {...rest}
      style={[{ fontFamily: "SpaceMono-Regular", color: "white" }, style]}
    />
  );
};

const TextBold = ({ style, ...rest }) => {
  return (
    <DefaultText
      {...rest}
      style={[{ fontFamily: "SpaceMono-Bold", color: "white" }, style]}
    />
  );
};

export { Text, TextBold };
export default Text;
