import { createContext, useEffect, useState } from "react";
import Colors from "constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@theme")
          .then((storedTheme) => {
            if (storedTheme) {
              setTheme(storedTheme);
            }
          })
          .finally(() => {
            setLoading(false);
          });
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

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

  return (
    <Theme.Provider value={{ theme, setTheme, colors, loading }}>
      {children}
    </Theme.Provider>
  );
};

export default Theme;
export { Theme, ThemeProvider };
