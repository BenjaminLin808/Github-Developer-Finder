import { SafeAreaView, StyleSheet, StatusBar, View } from "react-native";
import { useFonts } from "expo-font";
import GitHubProfile from "./screens/GitHubProfile";
import axios from "axios";

const App = () => {
  const [fontsLoaded] = useFonts({
    "SpaceMono-Regular": require("./assets/fonts/SpaceMono-Regular.ttf"),
    "SpaceMono-Bold": require("./assets/fonts/SpaceMono-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <GitHubProfile />
        </View>
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
