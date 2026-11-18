import { Tabs } from "expo-router";
import { Text } from "react-native";
import { ThemeProvider, useAppTheme } from "../../components/theme-context";

const tabItems = [
  { name: "index", title: "Profile", icon: "◎" },
  { name: "counter", title: "Counter", icon: "±" },
  { name: "contacts", title: "Contacts", icon: "⌕" },
  { name: "theme", title: "Theme", icon: "◐" },
  { name: "delete", title: "Delete", icon: "!" },
] as const;

function ExerciseTabs() {
  const { colors } = useAppTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.line,
          paddingTop: 7,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "700",
        },
      }}
    >
      {tabItems.map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarAccessibilityLabel: `${title} exercise`,
            tabBarIcon: ({ color, focused }) => (
              <Text
                style={{
                  color,
                  fontSize: focused ? 21 : 19,
                  fontWeight: "700",
                  lineHeight: 23,
                }}
              >
                {icon}
              </Text>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

export default function TabLayout() {
  return (
    <ThemeProvider>
      <ExerciseTabs />
    </ThemeProvider>
  );
}
