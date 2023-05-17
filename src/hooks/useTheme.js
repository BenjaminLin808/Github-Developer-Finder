import { useContext } from "react";
import { Theme } from "contexts/Theme";

const useTheme = () => {
  const { theme, setTheme, colors, loading } = useContext(Theme);
  return { theme, setTheme, colors, loading };
};

export default useTheme;
