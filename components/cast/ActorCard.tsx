import { CastDetail } from "@/infrastructure/interfaces/cast.interface";
import { View, Text, Image } from "react-native";

interface Props {
  actor: CastDetail;
}

const ActorCard = ({ actor }: Props) => {
  return (
    <View className="flex flex-row gap-2 mr-10">
      <Image
        source={{ uri: actor.avatar }}
        className="w-[100px] h-[150] rounded-2xl shadow"
        resizeMode="cover"
      />

      <View className="flex flex-col gap-2">
        <View className="flex flex-col">
          <Text className="font-bold text-lg">{actor.name}</Text>
          <Text className="font-bold text-lg">{actor.lastName}</Text>
        </View>
        <Text className="text-gray-600 text-xs">{actor.character}</Text>
      </View>
    </View>
  );
};

export default ActorCard;
