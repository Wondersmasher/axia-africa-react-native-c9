// import { useForm } from "react-hook-form";
import { useSession } from "@/store";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Manual() {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const {
    actions: { logOut },
  } = useSession((state) => state);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewStyle}>
        <Text style={styles.textElement}>Manual form management</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder='Email'
            id='email'
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            placeholder='First Name'
            id='firstName'
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            placeholder='Last Name'
            id='lastName'
          />
        </View>
        <Pressable style={styles.button} onPress={logOut}>
          <Text style={styles.buttonText}>Log out</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  textElement: {
    fontSize: 30,
    fontWeight: "400",
    color: "red",
    alignItems: "center",
  },
  textInputContainer: {
    padding: 20,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "lightgray",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
