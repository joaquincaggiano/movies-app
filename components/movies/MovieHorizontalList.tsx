import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { View, Text, FlatList } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  title: string;
  movies: Movie[];
}

const MovieHorizontalList = ({ title, movies }: Props) => {
  return (
    <View className="flex flex-col gap-2 mb-5">
      <Text className="text-2xl font-normal px-4">{title}</Text>

      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster={true} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MovieHorizontalList;
