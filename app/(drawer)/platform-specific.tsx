import { cn } from "@/lib";
import React from "react";
import { Platform, Text, View } from "react-native";
export default function TailwindUtilities() {
  return (
    <View className='flex-1 bg-red-100 justify-center items-center'>
      <TextComponent className='text-2xl font-semibold text-red-900'>
        Platform Specific Codes
      </TextComponent>
    </View>
  );
}

type TextComponentType = {
  children: React.ReactNode;
  className?: string;
};

const TextComponent = ({ children, className }: TextComponentType) => {
  //   useEffect(() => {
  //     if (Platform.OS === "android") {
  //       console.log("The android version is: ", Platform.Version);
  //       console.log("Android");
  //     }
  //     if (Platform.OS === "ios") {
  //       console.log("The IOS version is: ", parseInt(Platform.Version, 10));
  //       console.log("IOS");
  //     }
  //   }, []);
  return (
    <View className='gap-5'>
      <Text
        className={cn("font-bold text-2xl", className, {
          "font-extrablack text-2xl": Platform.OS === "ios",
          "font-medium text-6xl text-red-800": Platform.OS === "android",
        })}
      >
        {children}
      </Text>
    </View>
  );
};
