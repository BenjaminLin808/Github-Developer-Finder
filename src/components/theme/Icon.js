import useTheme from "hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";

export const Icon = ({ name, size = 30, color = null, ...rest }) => {
  const { colors } = useTheme();

  return (
    <Ionicons name={name} size={size} color={color || colors.text} {...rest} />
  );
};
