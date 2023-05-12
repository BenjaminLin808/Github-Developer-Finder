import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./BottomTabs";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const Navigation = () => {
  const [fontsLoaded] = useFonts({
    "SpaceMono-Regular": require("../../assets/fonts/SpaceMono-Regular.ttf"),
    "SpaceMono-Bold": require("../../assets/fonts/SpaceMono-Bold.ttf"),
  });

  useEffect(() => {
    const temp = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    temp();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default Navigation;
