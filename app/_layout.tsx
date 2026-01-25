import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { useSession } from "@/store";
import { Stack } from "expo-router";

// export const unstable_settings = {
//   anchor: "(tabs)",
// };

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const { user } = useSession((state) => state);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Protected guard={!user}>
          <Stack.Screen
            name='index'
            options={{ headerShown: true, title: "Sign in" }}
          />
        </Stack.Protected>
        <Stack.Protected guard={!!user}>
          <Stack.Screen
            name='(drawer)'
            options={{ headerShown: false, title: "Home page" }}
          />
        </Stack.Protected>
      </Stack>

      <StatusBar style='auto' />
    </ThemeProvider>
  );
}
