import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";
import * as Keychain from "react-native-keychain";
export type StoreDataType = {
  key: string;
  value: any;
};

export type StorageType = "async-storage" | "secure-store" | "keychain";

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
    console.log(`Error setting item through Secure Store with error: ${error}`);
  }
};
const storeDataKeychain = async (data: StoreDataType) => {
  try {
    if (!data.value)
      return Alert.alert(
        "No value added",
        "You did not provide any valid value. Is it a bug or a FEATURE!",
      );
    const stringifiedValue = JSON.stringify(data.value);
    await Keychain.setGenericPassword(data.key, stringifiedValue, {
      service: data.key,
    });
    console.log(
      `The item was stored properly through Keychain with key: ${data.key} and value: ${stringifiedValue}`,
    );
  } catch (error) {
    console.log(`Error setting item through Keychain with error: ${error}`);
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
    if (!response) return;
    return JSON.parse(response);
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
    if (!response) return;
    return JSON.parse(response);
  } catch (error) {
    console.log(`Error setting item through AsyncStorage with error: ${error}`);
  }
};
const getDataKeychain = async (key: string) => {
  try {
    const response: Keychain.UserCredentials | false =
      await Keychain.getGenericPassword({
        service: key,
      });

    if (response === false) return;
    console.log("response from keychain", JSON.parse(response.password ?? ""));
    return JSON.parse(response.password);
  } catch (error) {
    console.log(`Error setting item through Keychain with error: ${error}`);
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
  // if (data.type === "async-storage") {
  //   await storeDataAsyncStorage(data.data);
  //   return;
  // }
  // if (data.type === "secure-store") {
  //   await storeDataSecureStore(data.data);
  //   return;
  // }
  // if (data.type === "keychain") {
  //   await storeDataKeychain(data.data);
  //   return;
  // }

  switch (data.type) {
    case "async-storage":
      await storeDataAsyncStorage(data.data);
      break;
    case "secure-store":
      await storeDataSecureStore(data.data);
      break;
    case "keychain":
      await storeDataKeychain(data.data);
      break;
  }
};

export const getData = async (key: string, type: StorageType) => {
  if (type === "async-storage") {
    return await getDataAsyncStorage(key);
  }
  if (type === "secure-store") {
    return await getDataSecureStore(key);
  }
  if (type === "keychain") {
    return await getDataKeychain(key);
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
