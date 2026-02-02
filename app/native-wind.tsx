import { StyleSheet, Text, View } from "react-native";

const NativeWind = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Styling With StyleSheet</Text>
      <Text>Styling with NativeWind</Text>
    </View>
  );
};

export default NativeWind;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "red",
    fontWeight: 600,
  },
});
