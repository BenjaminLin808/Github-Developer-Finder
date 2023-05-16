import { StyleSheet, ScrollView } from "react-native";
import useTheme from "hooks/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "components/theme";

const Main = ({ children }) => {
  const { colors } = useTheme();
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.subContainer}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    padding: 20,
  },
});

export default Main;
