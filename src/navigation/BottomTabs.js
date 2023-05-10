import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import GitHubProfile from "screens/GitHubProfile";
import Settings from "screens/Settings";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="GitHubProfile"
      screenOptions={{
        tabBarActiveTintColor: "#0079ff",
        tabBarInactiveTintColor: "#4b6a9b",
      }}
    >
      <Tab.Screen
        name="GitHubProfile"
        component={GitHubProfile}
        options={{
          title: "GitHubProfile",
          tabBarIcon: () => {
            return <Ionicons name="ribbon-outline"></Ionicons>;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          tabBarIcon: () => {
            <Ionicons name="settings-outline"></Ionicons>;
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
