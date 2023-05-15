import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import GitHubProfile from "screens/GitHubProfile";
import Settings from "screens/Settings";
import useTheme from "hooks/useTheme";

const Tab = createBottomTabNavigator();

const TabIcon = (name, color) => {
  return <Ionicons name={name} size={32} color={color} />;
};

const BottomTabs = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="GitHubProfile"
      screenOptions={{
        tabBarActiveTintColor: "colors.textMidContrast",
        tabBarInactiveTintColor: "colors.primary",
      }}
      tabBarStyle={{ backgroundColor: colors.background }}
    >
      <Tab.Screen
        name="GitHubProfile"
        component={GitHubProfile}
        options={{
          title: "GitHubProfile",
          tabBarIcon: () => (
            <TabIcon name="ribbon-outline" color={colors.primary} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          tabBarIcon: () => (
            <TabIcon name="settings-outline" color={colors.primary} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
