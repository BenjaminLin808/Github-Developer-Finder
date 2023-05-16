import { createContext, useState } from "react";
import Colors from "constants/Colors";

// theme initialization
const Theme = createContext({
  theme: "light",
  setTheme: () => {},
  colors: Colors.light,
});

// theme provider initialization
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const colors = Colors[theme];

  return (
    <Theme.Provider value={{ theme, setTheme, colors }}>
      {children}
    </Theme.Provider>
  );
};

export default Theme;
export { Theme, ThemeProvider };
