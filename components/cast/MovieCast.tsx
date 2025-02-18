import { CastDetail } from "@/infrastructure/interfaces/cast.interface";
import { FlatList, Text, View } from "react-native";
import ActorCard from "./ActorCard";

interface Props {
  cast: CastDetail[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View className="flex flex-col gap-2 mx-5">
      <Text className="text-xl font-semibold mt-5">Actores</Text>

      <FlatList
        data={cast}
        renderItem={({ item }) => <ActorCard actor={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MovieCast;
