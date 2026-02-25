// import { ICON_COLOR, ICON_SIZE } from "@/constants/sizes-constants";
// import { cn } from "@/lib";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { Text, TouchableOpacity, View } from "react-native";

// type CameraControlButtonsProps = {
//   setMode: (mode: "picture" | "video") => void;
//   mode: "picture" | "video";
//   handleCapturePicture: () => void;
//   handleStartRecordingVideo: () => void;
//   handleStopRecordingVideo: () => void;
//   toggleCameraFacing: () => void;
//   isRecordingVideo: boolean;
//   handleZoom: () => void;
//   isTorchEnabled: boolean;
//   setFlashMode: (mode: "off" | "on") => void;
//   flashMode: "off" | "on";
//   zoomLevel: number;
//   handleAddZoom: () => void;
//   handleReduceZoom: () => void;
//   setIsTorchEnabled: (enabled: boolean) => void;
// };
// const CameraControlButtons = ({
//   isRecordingVideo,
//   setMode,
//   toggleCameraFacing,
//   mode,
//   handleCapturePicture,
//   handleStartRecordingVideo,
//   handleStopRecordingVideo,
//   handleZoom,
//   isTorchEnabled,
//   setFlashMode,
//   flashMode,
//   zoomLevel,
//   handleAddZoom,
//   handleReduceZoom,
//   setIsTorchEnabled,
// }: CameraControlButtonsProps) => {
//   return (
//     <View className='absolute bottom-5 right-0 flex flex-row flex-wrap gap-4 items-center'>
//       <TouchableOpacity onPress={toggleCameraFacing}>
//         <Ionicons
//           name='camera-reverse-outline'
//           size={ICON_SIZE}
//           color={ICON_COLOR}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => setMode("picture")}
//         className={cn("rounded-full p-2", mode === "picture" && "bg-black/50")}
//       >
//         <Text
//           className={cn(
//             "text-sm text-white",
//             mode === "picture" && "font-bold",
//           )}
//         >
//           Picture
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => setMode("video")}
//         className={cn("rounded-full p-2", mode === "video" && "bg-black/50")}
//       >
//         <Text
//           className={cn("text-sm text-white", mode === "video" && "font-bold")}
//         >
//           Video
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={
//           mode === "picture"
//             ? handleCapturePicture
//             : isRecordingVideo
//               ? handleStopRecordingVideo
//               : handleStartRecordingVideo
//         }
//       >
//         <Ionicons
//           name={
//             mode === "picture"
//               ? "camera-outline"
//               : isRecordingVideo
//                 ? "videocam-sharp"
//                 : "videocam-outline"
//           }
//           size={ICON_SIZE}
//           color={ICON_COLOR}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => setIsTorchEnabled((prev) => !prev)}>
//         <Ionicons
//           name={isTorchEnabled ? "flashlight-sharp" : "flashlight-outline"}
//           size={ICON_SIZE}
//           color={ICON_COLOR}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => setFlashMode((prev) => (prev === "off" ? "on" : "off"))}
//       >
//         <Ionicons
//           name={flashMode === "on" ? "sunny-sharp" : "sunny-outline"}
//           size={ICON_SIZE}
//           color={ICON_COLOR}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleAddZoom} disabled={zoomLevel >= 1}>
//         <Ionicons
//           name={zoomLevel < 1 ? "add-circle-outline" : "add-circle-sharp"}
//           size={ICON_SIZE}
//           color={ICON_COLOR}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleReduceZoom} disabled={zoomLevel <= 0}>
//         <Ionicons
//           name={zoomLevel > 0 ? "remove-circle-outline" : "remove-circle-sharp"}
//           size={ICON_SIZE}
//           color={ICON_COLOR}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };
// export default CameraControlButtons;
