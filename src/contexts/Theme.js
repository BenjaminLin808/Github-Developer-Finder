import { createContext } from "react";
import Colors from "constants/Colors";

const Theme = createContext({
  theme: "light",
  setTheme: () => {},
  colors: Colors.light,
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const colors = Colors[theme];

  return (
    <Theme.Provider value={{ theme, setTheme, colors }}>
      {children}
    </Theme.Provider>
  );
};

export { Theme, ThemeProvider };
