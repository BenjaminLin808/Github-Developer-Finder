import Navigation from "./navigations/Navigation";
import { ThemeProvider } from "./contexts/Theme";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
