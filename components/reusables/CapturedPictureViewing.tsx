import { ICON_COLOR, ICON_SIZE } from "@/constants/sizes-constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, TouchableOpacity, View } from "react-native";

type CapturedPictureViewingProps = {
  capturedPicture: string;
  handleSaveToMediaLibrary: (media: string) => void;
  handleCaptureOrRecordingReset: () => void;
};
const CapturedPictureViewing = ({
  capturedPicture,
  handleSaveToMediaLibrary,
  handleCaptureOrRecordingReset,
}: CapturedPictureViewingProps) => {
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
        <TouchableOpacity onPress={handleCaptureOrRecordingReset}>
          <Ionicons name='trash-outline' size={ICON_SIZE} color={ICON_COLOR} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export { CapturedPictureViewing };
