import { Button, ButtonText } from "@/components";
import { clearEntireStorage, cn, getData, removeData, storeData } from "@/lib";
import React from "react";
import { Platform, Text, View } from "react-native";

export default function Persisting() {
  return (
    <View className='flex-1 bg-red-100 justify-center items-center px-4 gap-6'>
      <TextComponent className='text-2xl font-semibold text-red-900'>
        Persisting - Fallback
      </TextComponent>

      <View className='w-full gap-4 flex-row'>
        <Button
          className='bg-red-900 text-white rounded-lg flex-1 text-xl font-semibold'
          size='xl'
          variant='solid'
          onPress={() => {
            storeData({
              data: {
                key: "async-store-key",
                value: ["Testing this out", 80, "yes", true],
              },
              type: "keychain",
            });
          }}
        >
          <ButtonText>Save Data</ButtonText>
        </Button>
        <Button
          className='bg-red-900 text-white rounded-lg flex-1 text-xl font-semibold'
          size='xl'
          variant='solid'
          onPress={() => getData("async-store-key", "keychain")}
        >
          <ButtonText>Get Data</ButtonText>
        </Button>
      </View>
      <View className='w-full gap-4 flex-row'>
        <Button
          className='bg-red-900 text-white rounded-lg text-xl font-semibold'
          variant='solid'
          onPress={() => removeData("async-store-key", "secure-store")}
        >
          <ButtonText>Remove Data</ButtonText>
        </Button>
        <Button
          className='bg-red-900 text-white rounded-lg text-xl font-semibold'
          variant='solid'
          onPress={() => clearEntireStorage()}
        >
          <ButtonText>Clear Storage (Async only)</ButtonText>
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
