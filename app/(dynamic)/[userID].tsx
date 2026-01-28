import { Stack, useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { Text, View } from "react-native";
const UserPage = () => {
  const { userID, doubleID, tripleID } = useLocalSearchParams<{
    userID: string;
    doubleID?: string;
    tripleID?: string;
  }>();

  console.log(userID, doubleID, tripleID);

  const foundUser = useMemo(
    () => users.find((user) => user.id === userID),
    [userID],
  );

  if (!foundUser) {
    return (
      <View>
        <Stack.Screen options={{ title: "User Not Found" }} />
        <Text>User not found</Text>
      </View>
    );
  }

  return (
    <View>
      <Stack.Screen options={{ title: foundUser.name }} />
      <Text>User ID page with userID: {userID}</Text>
      <Text>My name is: {foundUser.name}</Text>
      <Text>My role in Axia Africa is: {foundUser.role}</Text>
    </View>
  );
};

export default UserPage;

const users = [
  {
    name: "Akinniyi Ezekiel Wonderful",
    id: "1",
    role: "Student",
  },
  {
    name: "Samuel Thomas",
    id: "2",
    role: "Admin",
  },
  {
    name: "John Doe",
    id: "3",
    role: "Super Admin",
  },
  {
    name: "John Doe 2",
    id: "4",
    role: "Admin",
  },
];
