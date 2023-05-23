import Navigation from "./navigations/Navigation";
import { ThemeProvider } from "./contexts/Theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ProfilesProvider } from "./contexts/Profiles";

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ProfilesProvider>
          <Navigation />
        </ProfilesProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
