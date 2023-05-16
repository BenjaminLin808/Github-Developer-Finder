import { StatusBar as DefaultStatusBar } from "react-native";
import useTheme from "hooks/useTheme";

const StatusBar = ({ ...rest }) => {
  const { theme } = useTheme();
  const barStyle = theme === "light" ? "dark-content" : "light-content";

  return <DefaultStatusBar {...rest} barStyle={barStyle} />;
};

export default StatusBar;
export { StatusBar };
