import "react-native-reanimated";

import { Stack } from "expo-router";
import React from "react";

// export const unstable_settings = {
//   anchor: "(tabs)",
// };

export default function RootLayout() {
  return (
    <React.Fragment>
      <Stack>
        <Stack.Screen
          name='index'
          options={{
            headerShown: true,
            title: "Dynamic Page",
            headerBackVisible: true,
          }}
        />
        <Stack.Screen
          name='[userID]'
          options={{ headerShown: true, title: "User Page" }}
        />
      </Stack>
    </React.Fragment>
  );
}
