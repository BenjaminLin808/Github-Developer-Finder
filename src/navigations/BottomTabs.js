import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import GitHubProfile from "screens/GitHubProfile";
import Settings from "screens/Settings";
import GitHubProfiles from "screens/GitHubProfiles";

import useTheme from "hooks/useTheme";

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, color, size }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

const BottomTabs = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="GitHubProfile"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMidContrast,
        tabBarStyle: { backgroundColor: colors.background, borderTopWidth: 0 },
      }}
    >
      <Tab.Screen
        name="GitHubProfile"
        component={GitHubProfile}
        options={{
          title: "GitHubProfile",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="ribbon-outline"
              color={focused ? colors.primary : colors.textMidContrast}
              size={25}
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profiles"
        component={GitHubProfiles}
        options={{
          title: "Profiles",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="apps-outline"
              color={focused ? colors.primary : colors.textMidContrast}
              size={25}
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="settings-outline"
              color={focused ? colors.primary : colors.textMidContrast}
              size={25}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
