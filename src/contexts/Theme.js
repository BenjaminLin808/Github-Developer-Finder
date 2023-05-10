import { createContext } from "react";
import Colors from "constants/Colors";

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const colors = Colors[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
