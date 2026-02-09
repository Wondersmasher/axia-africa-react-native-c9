import { cn } from "@/lib";
import { clsx } from "clsx";
import React from "react";
import { Platform, Text, View } from "react-native";
import { twMerge } from "tailwind-merge";
export default function TailwindUtilities() {
  return (
    <View className='flex-1 bg-red-100 justify-center items-center'>
      <TextComponent className='text-2xl font-semibold text-red-900'>
        Tailwind Utilities
      </TextComponent>
    </View>
  );
}

type TextComponentType = {
  children: React.ReactNode;
  className?: string;
};

const TextComponent = ({
  children,
  className = "text-5xl capitalize",
}: TextComponentType) => {
  return (
    <View className='gap-5'>
      {/* <Text className={`text-gray-400 font-bold ${className}`}> */}
      <Text
        className={twMerge(
          "text-gray-400 font-bold",
          "font-thin text-4xl",
          className,
        )}
      >
        {children} TW Merge
      </Text>
      <Text
        className={clsx({
          "font-medium text-2xl": Platform.OS === "android",
          "font-extrablack text-4xl": Platform.OS === "ios",
        })}
      >
        {children} CLSX
      </Text>
      <Text
        className={cn("font-bold text-2xl", className, {
          "font-extrablack text-4xl": Platform.OS === "ios",
          "font-medium text-2xl": Platform.OS === "android",
        })}
      >
        {children} CN
      </Text>
    </View>
  );
};
