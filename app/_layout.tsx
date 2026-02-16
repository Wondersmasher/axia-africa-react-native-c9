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
import "../global.css";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";

// export const unstable_settings = {
//   anchor: "(tabs)",
// };

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const {
    user,
    actions: { retrieveUserDetailsFromStorage },
  } = useSession(
    useShallow((state) => ({ user: state.user, actions: state.actions })),
  );

  useEffect(() => {
    retrieveUserDetailsFromStorage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <GluestackUIProvider mode='light'>
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
          <Stack.Screen name='(dynamic)' options={{ headerShown: false }} />
        </Stack>
        <StatusBar style='auto' />
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
