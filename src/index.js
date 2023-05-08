import { SafeAreaView, StyleSheet, StatusBar, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import GitHubProfile from "screens/GitHubProfile";
import Settings from "screens/Settings";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

// keep splash screen visible while the app is loading
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    "SpaceMono-Regular": require("./../assets/fonts/SpaceMono-Regular.ttf"),
    "SpaceMono-Bold": require("./../assets/fonts/SpaceMono-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.subContainer}
          onLayout={onLayoutRootView}
          keyboardShouldPersistTaps="handled"
        >
          {/* <GitHubProfile /> */}
          <Settings />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141d2f",
  },
  subContainer: {
    padding: 20,
  },
});

export default App;
