import { SafeAreaView, StyleSheet, StatusBar, ScrollView } from "react-native";

const Main = ({ children }) => {
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
    backgroundColor: "#141d2f",
  },
  subContainer: {
    padding: 20,
  },
});

export default Main;
