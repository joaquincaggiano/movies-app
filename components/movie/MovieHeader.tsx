import {
  View,
  Text,
  useWindowDimensions,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import { LinearGradient } from "expo-linear-gradient";

interface Props {
  poster: string;
  title: string;
}

const MovieHeader = ({ poster, title }: Props) => {
  const { height: screenHeight } = useWindowDimensions();
  return (
    <>
      <LinearGradient
        colors={["rgba(0,0,0,0.3)", "transparent"]}
        start={[0, 0]}
        style={{
          height: screenHeight * 0.4,
          position: "absolute",
          zIndex: 1,
          width: "100%",
        }}
      />

      <View
        style={{
          position: "absolute",
          top: 50,
          left: 12,
          zIndex: 99,
          elevation: 9,
        }}
      >
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons
            name="arrow-back"
            size={30}
            color="white"
            className="shadow"
          />
        </Pressable>
      </View>

      <View
        className="shadow-xl shadow-black/20"
        style={{ height: screenHeight * 0.7 }}
      >
        <View className="flex-1 rounded-b-[25px] overflow-hidden">
          <Image
            source={{ uri: poster }}
            resizeMode="cover"
            className="flex-1"
          />
        </View>
      </View>

      <View className="px-5 mt-5">
        {/* <Text className="text-sm font-normal">{originalTitle}</Text> */}
        <Text className="text-2xl font-bold">{title}</Text>
      </View>
    </>
  );
};

export default MovieHeader;
