import { Button, ButtonText } from "@/components";
import { cn } from "@/lib";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Alert, Platform, Text, View } from "react-native";

type StoreDataType = {
  key: string;
  //   value: string;
  value: any;
};
const storeDataAsyncStorage = async (data: StoreDataType) => {
  try {
    if (!data.value)
      return Alert.alert(
        "No value added",
        "You did not provide any valid value. Is it a bug or a FEATURE!",
      );
    const stringifiedValue = JSON.stringify(data.value);
    await AsyncStorage.setItem(data.key, stringifiedValue);
    console.log(
      `The item was stored properly with key: ${data.key} and value: ${stringifiedValue}`,
    );
  } catch (error) {
    console.log(`Error setting item through AsyncStorage with error: ${error}`);
  }
};

const getDataAsyncStorage = async (key: string) => {
  try {
    const response = await AsyncStorage.getItem(key);
    // const parsedResponse = JSON.parse(response ?? "");
    console.log(`AsyncStorage gave this response: ${response}`);
  } catch (error) {
    console.log(`Error setting item through AsyncStorage with error: ${error}`);
  }
};

const removeDataAsyncStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    Alert.alert(`Deleted`, `KEY: ${key} was deleted successfully. Cheers!`);
  } catch (error) {
    console.log(`Error setting item through AsyncStorage with error: ${error}`);
  }
};

const clearEntireStorageAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    Alert.alert(`Deleted`, `Store was cleared successfully. Cheers!`);
  } catch (error) {
    console.log(`Error setting item through AsyncStorage with error: ${error}`);
  }
};

const storeData = async (data: StoreDataType) => {
  await storeDataAsyncStorage(data);
};

const getData = async (key: string) => {
  await getDataAsyncStorage(key);
};

const clearEntireStorage = async () => {
  await clearEntireStorageAsyncStorage();
};

const removeData = async (key: string) => {
  await removeDataAsyncStorage(key);
};

export default function Persisting() {
  return (
    <View className='flex-1 bg-red-100 justify-center items-center px-4 gap-6'>
      <TextComponent className='text-2xl font-semibold text-red-900'>
        Persisting - IOS ONLY
      </TextComponent>

      <View className='w-full gap-4 flex-row'>
        <Button
          className='bg-red-900 text-white rounded-lg flex-1 text-xl font-semibold'
          size='xl'
          variant='solid'
          onPress={() => {
            storeData({
              key: "async-store-key",
              value: ["Testing this out", 80, "yes", true],
            });
          }}
        >
          <ButtonText>Save Data</ButtonText>
        </Button>
        <Button
          className='bg-red-900 text-white rounded-lg flex-1 text-xl font-semibold'
          size='xl'
          variant='solid'
          onPress={() => getData("async-store-key")}
        >
          <ButtonText>Get Data</ButtonText>
        </Button>
      </View>
      <View className='w-full gap-4 flex-row'>
        <Button
          className='bg-red-900 text-white rounded-lg text-xl font-semibold'
          size='xl'
          variant='solid'
          onPress={() => removeData("store-key")}
        >
          <ButtonText>Remove Data</ButtonText>
        </Button>
        <Button
          className='bg-red-900 text-white rounded-lg text-xl font-semibold'
          size='xl'
          variant='solid'
          onPress={() => clearEntireStorage()}
        >
          <ButtonText>Clear Storage</ButtonText>
        </Button>
      </View>
    </View>
  );
}

type TextComponentType = {
  children: React.ReactNode;
  className?: string;
};

const TextComponent = ({ children, className }: TextComponentType) => {
  return (
    <View className='gap-5'>
      <Text
        className={cn("font-bold text-2xl", className, {
          "font-extrablack text-2xl": Platform.OS === "ios",
        })}
      >
        {children}
      </Text>
    </View>
  );
};
