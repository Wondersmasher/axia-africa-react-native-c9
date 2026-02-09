import { cn } from "@/lib";
import React from "react";
import { Platform, Text, View } from "react-native";
export default function TailwindUtilities() {
  return (
    <View className='flex-1 bg-red-100 justify-center items-center'>
      <TextComponent className='text-2xl font-semibold text-red-900'>
        Platform Specific Code - IOS ONLY
      </TextComponent>
    </View>
  );
}

type TextComponentType = {
  children: React.ReactNode;
  className?: string;
};

const TextComponent = ({ children, className }: TextComponentType) => {
  console.log("this will only run in the ios version");
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
