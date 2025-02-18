import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { Formatter } from "@/utils/formatter";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5 mt-2 flex flex-col gap-2">

      <View className="flex flex-row gap-2">
        <Ionicons name="film-outline" size={16} color="black" />
        <Text>{movie.genres.join(", ")}</Text>
      </View>

      <View className="flex flex-row gap-2">
        <Ionicons name="star-outline" size={16} color="black" />
        <Text>{movie.rating}</Text>
      </View>

      <View className="flex flex-row gap-2">
        <Ionicons name="cash-outline" size={16} color="black" />
        <Text>{Formatter.currency(movie.budget)}</Text>
      </View>

      <Text className="text-xl font-semibold mt-5">Historia</Text>
      <Text>{movie.description}</Text>
    </View>
  );
};

export default MovieDescription;
