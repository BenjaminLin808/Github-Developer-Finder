import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./BottomTabs";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import useTheme from "hooks/useTheme";

SplashScreen.preventAutoHideAsync();

const Navigation = () => {
  const [fontsLoaded] = useFonts({
    "SpaceMono-Regular": require("../../assets/fonts/SpaceMono-Regular.ttf"),
    "SpaceMono-Bold": require("../../assets/fonts/SpaceMono-Bold.ttf"),
  });

  const { theme, colors, loading } = useTheme();

  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
      background: colors.background,
      card: colors.background,
      text: colors.text,
      border: "transparent",
    },
  };

  useEffect(() => {
    const temp = async () => {
      if (fontsLoaded && !theme.loading) {
        await SplashScreen.hideAsync();
      }
    };
    temp();
  }, [fontsLoaded, theme.loading]);

  if (!fontsLoaded) {
    return null;
  }

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer theme={Theme}>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default Navigation;
