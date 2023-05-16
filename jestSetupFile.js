import mockSafeAreaContext from "react-native-safe-area-context/jest/mock";
jest.mock("react-native-safe-area-context", () => mockSafeAreaContext);

jset.mock("react-native-asyn-storage/async-storage", () => mockAsyncStorage);
