import { StyleSheet, Text, View } from "react-native";

const NativeWind = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} className='text-2xl text-pending font-semibold'>
        Styling With StyleSheet
      </Text>
      <Text className=' text-2xl text-error font-semibold'>
        Styling With NativeWind
      </Text>

      <View className='flex-row rounded-md overflow-hidden h-52 aspect-video border border-red-500'>
        <View className='bg-green-700 flex-1' />
        <View className='bg-white flex-1' />
        <View className='bg-green-800 flex-1' />
      </View>
      <View style={styles.nigeriaContainer}>
        <View style={[styles.width, styles.green]} />
        <View style={[styles.width, styles.white]} />
        <View style={[styles.width, styles.green]} />
      </View>
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
    // color: "red",
    fontWeight: 600,
  },
  nigeriaContainer: {
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    height: 160,
    aspectRatio: 2,
    borderWidth: 1,
    borderColor: "red",
  },
  width: {
    flex: 1,
  },
  green: {
    backgroundColor: "green",
  },
  white: {
    backgroundColor: "white",
  },
});
