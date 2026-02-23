import { cn } from "@/lib";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  CameraType,
  CameraView,
  useCameraPermissions,
  useMicrophonePermissions,
} from "expo-camera";
import { saveToLibraryAsync, usePermissions } from "expo-media-library";
import { VideoView, useVideoPlayer } from "expo-video";
import { useRef, useState } from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ICON_SIZE = 20;
const ICON_COLOR = "#fff";

export default function App() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [mediaLibraryPermission, requestMediaLibraryPermission] =
    usePermissions();
  const [microphonePermission, requestMicrophonePermission] =
    useMicrophonePermissions();

  const cameraRef = useRef<CameraView>(null);
  const [capturedPicture, setCapturedPicture] = useState<string>("");
  const [capturedVideo, setCapturedVideo] = useState<string>("");
  const [isRecordingVideo, setIsRecordingVideo] = useState(false);

  const [mode, setMode] = useState<"picture" | "video">("picture");
  const [isTorchEnabled, setIsTorchEnabled] = useState(false);
  const [flashMode, setFlashMode] = useState<"off" | "on">("off");
  const [zoomLevel, setZoomLevel] = useState(0);

  const videoPlayer = useVideoPlayer(capturedVideo, (player) => {
    player.loop = true;
    player.play();
  });

  if (!cameraPermission || !mediaLibraryPermission) {
    return <View />;
  }

  if (!cameraPermission?.granted) {
    return (
      <View style={styles.container}>
        <Text className='text-center pb-2.5'>
          We need your camera permission to show the camera
        </Text>
        <Button
          onPress={() => {
            requestCameraPermission();
          }}
          title='grant camera permission'
        />
      </View>
    );
  }
  if (!microphonePermission?.granted) {
    return (
      <View className='flex-1 justify-center'>
        <Text className='text-center pb-2.5'>
          We need your microphone permission to enable audio
        </Text>
        <Button
          onPress={() => {
            requestMicrophonePermission();
          }}
          title='grant microphone permission'
        />
      </View>
    );
  }
  if (!mediaLibraryPermission?.granted) {
    return (
      <View className='flex-1 justify-center'>
        <Text className='text-center pb-2.5'>
          We need your media library permission to save your pictures and videos
        </Text>
        <Button
          onPress={() => {
            requestMediaLibraryPermission();
          }}
          title='grant media library permission'
        />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const handleCapturePicture = async () => {
    if (cameraRef.current) {
      const picture = await cameraRef.current.takePictureAsync();
      setCapturedPicture(picture.uri);
    }
  };

  const handleStartRecordingVideo = async () => {
    if (cameraRef.current) {
      setIsRecordingVideo(true);
      const video = await cameraRef.current.recordAsync();
      setCapturedVideo(video!.uri);
    }
  };

  const handleStopRecordingVideo = async () => {
    if (cameraRef.current) {
      await cameraRef.current.stopRecording();
      setIsRecordingVideo(false);
    }
  };

  const handleAddZoom = () => {
    // if (zoomLevel === 1) return;
    setZoomLevel((prev) => (prev < 1 ? prev + 0.1 : 1));
  };
  const handleReduceZoom = () => {
    setZoomLevel((prev) => (prev > 0 ? prev - 0.1 : 0));
  };

  const handleSaveToMediaLibrary = async (media: string) => {
    if (!media) return;

    await saveToLibraryAsync(media);
    Alert.alert(
      "Saved!",
      "Your item was saved to your media library successfully.\n Cheers!",
    );
    setCapturedPicture("");
    setCapturedVideo("");
  };

  if (capturedPicture) {
    return (
      <View className='flex-1 justify-center'>
        <Image source={{ uri: capturedPicture }} className='size-full flex-1' />
        <View className='absolute bottom-3 right-2 '>
          <TouchableOpacity
            onPress={() => handleSaveToMediaLibrary(capturedPicture)}
            className='rounded-full p-2 bg-black/50'
          >
            <Ionicons
              name='add-circle-outline'
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  if (capturedVideo) {
    return (
      <View className='flex-1 justify-center'>
        <VideoView player={videoPlayer} nativeControls />
        <View className='absolute bottom-3 right-2'>
          <TouchableOpacity
            onPress={() => handleSaveToMediaLibrary(capturedVideo)}
            className='rounded-full p-2 bg-black/50'
          >
            <Ionicons
              name='add-circle-outline'
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }} className='relative'>
      <CameraView
        ref={cameraRef}
        // className='flex-1'
        style={{ flex: 1 }}
        facing={facing} // done
        enableTorch={isTorchEnabled} // done
        mode={mode} // done
        flash={flashMode} // done
        zoom={zoomLevel} // done
      />
      <View className='absolute bottom-5 right-0 flex flex-row flex-wrap gap-4 items-center'>
        <TouchableOpacity onPress={toggleCameraFacing}>
          <Ionicons
            name='camera-reverse-outline'
            size={ICON_SIZE}
            color={ICON_COLOR}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setMode("picture")}
          className={cn(
            "rounded-full p-2",
            mode === "picture" && "bg-black/50",
          )}
        >
          <Text className={cn("text-sm", mode === "picture" && "font-bold")}>
            Picture
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setMode("video")}
          className={cn("rounded-full p-2", mode === "video" && "bg-black/50")}
        >
          <Text className={cn("text-sm", mode === "video" && "font-bold")}>
            Video
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={
            mode === "picture"
              ? handleCapturePicture
              : isRecordingVideo
                ? handleStopRecordingVideo
                : handleStartRecordingVideo
          }
        >
          <Ionicons
            name={
              mode === "picture"
                ? "camera-outline"
                : isRecordingVideo
                  ? "videocam-sharp"
                  : "videocam-outline"
            }
            size={ICON_SIZE}
            color={ICON_COLOR}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsTorchEnabled((prev) => !prev)}>
          <Ionicons
            name={isTorchEnabled ? "flashlight-sharp" : "flashlight-outline"}
            size={ICON_SIZE}
            color={ICON_COLOR}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setFlashMode((prev) => (prev === "off" ? "on" : "off"))
          }
        >
          <Ionicons
            name={flashMode === "on" ? "sunny-sharp" : "sunny-outline"}
            size={ICON_SIZE}
            color={ICON_COLOR}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddZoom} disabled={zoomLevel >= 1}>
          <Ionicons
            name={zoomLevel < 1 ? "add-circle-outline" : "add-circle-sharp"}
            size={ICON_SIZE}
            color={ICON_COLOR}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleReduceZoom} disabled={zoomLevel <= 0}>
          <Ionicons
            name={
              zoomLevel > 0 ? "remove-circle-outline" : "remove-circle-sharp"
            }
            size={ICON_SIZE}
            color={ICON_COLOR}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
});
