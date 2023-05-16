import { createContext, useEffect, useState } from "react";
import Colors from "constants/Colors";

// theme initialization
const Theme = createContext({
  theme: "dark",
  setTheme: () => {},
  colors: Colors.dark,
  loading: true,
});

// theme provider initialization
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const colors = Colors[theme];

  useEffect(() => {
    const storeData = async () => {
      try {
        await AsyncStorage.setItem("@theme", theme);
      } catch (e) {
        console.log(e);
      }
    };

    storeData();
  }, [theme]);

  useEffect(async () => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@theme");
        if (value !== null) {
          setTheme(value);
        }
      } catch (e) {
        console.log(e);
      }
    };

    await getData();
  }, []);

  return (
    <Theme.Provider value={{ theme, setTheme, colors, loading }}>
      {children}
    </Theme.Provider>
  );
};

export default Theme;
export { Theme, ThemeProvider };
