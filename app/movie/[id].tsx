import MovieCast from "@/components/cast/MovieCast";
import MovieDescription from "@/components/movie/MovieDescription";
import MovieHeader from "@/components/movie/MovieHeader";
import Loading from "@/components/ui/Loading";
import { useMovie } from "@/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, View } from "react-native";

const MovieDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const movieId = Number(id);

  const { movieQuery, castQuery } = useMovie(movieId);

  if (
    movieQuery.isLoading ||
    !movieQuery.data ||
    castQuery.isLoading ||
    !castQuery.data
  ) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <View className="pb-14">
        <MovieHeader
          poster={movieQuery.data.poster}
          title={movieQuery.data.title}
        />

        <MovieDescription movie={movieQuery.data} />

        <MovieCast cast={castQuery.data} />
      </View>
    </ScrollView>
  );
};

export default MovieDetailScreen;
