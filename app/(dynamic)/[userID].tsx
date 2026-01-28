import { Stack, useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { Alert, Modal, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const UserPage = () => {
  const [modalVisible, setModalVisible] = useState(false);

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

  const showAlertModal = () => {
    Alert.alert(
      "Sign Out?",
      `Are you sure you want to sign out of the application? \n Click Ok to continue`,
      [
        {
          text: "Cancel",
          onPress: () => {
            console.log("Cancel was pressed!!");
          },
        },
        {
          text: "OK",
          onPress: () => {
            console.log("Ok was pressed!!... Sign out completed successfully");
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Stack.Screen options={{ title: foundUser.name }} />
        <Text>User ID page with userID: {userID}</Text>
        <Text>My name is: {foundUser.name}</Text>
        <Text>My role in Axia Africa is: {foundUser.role}</Text>

        <Modal
          animationType='slide'
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(false);
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Text>Hello World!</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Pressable
          style={{ padding: 20, backgroundColor: "red" }}
          // onPress={showAlertModal}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ color: "white", fontSize: 20, borderRadius: 10 }}>
            Logout
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
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
