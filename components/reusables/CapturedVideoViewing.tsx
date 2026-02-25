import { ICON_COLOR, ICON_SIZE } from "@/constants/sizes-constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { VideoPlayer, VideoView } from "expo-video";
import { TouchableOpacity, View } from "react-native";

type CapturedVideoViewingProps = {
  capturedVideo: string;
  handleSaveToMediaLibrary: (media: string) => void;
  handleCaptureOrRecordingReset: () => void;
  videoPlayer: VideoPlayer;
};
const CapturedVideoViewing = ({
  capturedVideo,
  handleSaveToMediaLibrary,
  handleCaptureOrRecordingReset,
  videoPlayer,
}: CapturedVideoViewingProps) => {
  return (
    <View style={{ flex: 1 }}>
      <VideoView
        player={videoPlayer}
        nativeControls
        style={{ width: "100%", height: "100%" }}
      />
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
        <TouchableOpacity onPress={handleCaptureOrRecordingReset}>
          <Ionicons name='trash-outline' size={ICON_SIZE} color={ICON_COLOR} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export { CapturedVideoViewing };
