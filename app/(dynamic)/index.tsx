import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
const Index = () => {
  return (
    <View>
      <Text>Index</Text>
      <Link
        href={{
          pathname: "/dynamic/[userID]",
          params: { userID: 2 },
        }}
      >
        Link to dynamic page 1
      </Link>
    </View>
  );
};
export default Index;
const styles = StyleSheet.create({});
