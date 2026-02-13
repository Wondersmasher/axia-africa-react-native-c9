import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";
export type StoreDataType = {
  key: string;
  value: any;
};

export type StorageType = "async-storage" | "secure-store";

export type AllStoreDataType = {
  data: StoreDataType;
  type: StorageType;
};

const storeDataSecureStore = async (data: StoreDataType) => {
  try {
    if (!data.value)
      return Alert.alert(
        "No value added",
        "You did not provide any valid value. Is it a bug or a FEATURE!",
      );
    const stringifiedValue = JSON.stringify(data.value);
    await SecureStore.setItemAsync(data.key, stringifiedValue);
    console.log(
      `The item was stored properly through Secure Store with key: ${data.key} and value: ${stringifiedValue}`,
    );
  } catch (error) {
    console.log(`Error setting item through AsyncStorage with error: ${error}`);
  }
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

const getDataSecureStore = async (key: string) => {
  try {
    const response = await SecureStore.getItemAsync(key);
    // const parsedResponse = JSON.parse(response ?? "");
    console.log(`Secure Storage gave this response: ${response}`);
  } catch (error) {
    console.log(
      `Error setting item through Secure Storage with error: ${error}`,
    );
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
const removeDataSecureStore = async (key: string) => {
  try {
    await SecureStore.deleteItemAsync(key);
    Alert.alert(
      `Deleted from Secure Store`,
      `KEY: ${key} was deleted successfully. Cheers!`,
    );
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

export const storeData = async (data: AllStoreDataType) => {
  if (data.type === "async-storage") {
    await storeDataAsyncStorage(data.data);
    return;
  }
  if (data.type === "secure-store") {
    await storeDataSecureStore(data.data);
    return;
  }
};

export const getData = async (key: string, type: StorageType) => {
  if (type === "async-storage") {
    await getDataAsyncStorage(key);
    return;
  }
  if (type === "secure-store") {
    await getDataSecureStore(key);
    return;
  }
};

export const clearEntireStorage = async () => {
  await clearEntireStorageAsyncStorage();
};

export const removeData = async (key: string, type: StorageType) => {
  if (type === "async-storage") {
    await removeDataAsyncStorage(key);
    return;
  }
  if (type === "secure-store") {
    await removeDataSecureStore(key);
    return;
  }
};
