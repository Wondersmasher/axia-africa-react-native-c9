import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
const Index = () => {
  return (
    <View>
      <Text>Index</Text>
      {Array(6)
        .fill(1)
        .map((_, i) => {
          const id = i + 1;
          return (
            <Link
              key={i}
              // href={`/(dynamic)/${id}?doubleID=${id * 2}&tripleID=${id * 3}`}
              href={{
                pathname: "/(dynamic)/[userID]",
                params: {
                  userID: id,
                  doubleID: id * 2,
                  tripleID: id * 3,
                },
              }}
            >
              Link to dynamic page {i + 1}
            </Link>
          );
        })}
      <Link href='/(dynamic)/modal'>Open Expo Modal</Link>
    </View>
  );
};
export default Index;
const styles = StyleSheet.create({});
