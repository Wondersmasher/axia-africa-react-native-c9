import { Link } from "expo-router";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
export default function HomeScreen() {
  const [text, setText] = useState("");
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 50,
          fontWeight: "400",
          color: "red",
          alignItems: "center",
        }}
      >
        Home Screen
      </Text>
      <Link href={"/test"}>Modal</Link>
      <TextInput
        placeholder='Type here to see'
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
          width: 300,
        }}
      />
    </View>
  );
}
