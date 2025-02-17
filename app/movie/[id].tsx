import MovieHeader from "@/components/movie/MovieHeader";
import Loading from "@/components/ui/Loading";
import { useMovie } from "@/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";

const MovieDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const movieId = Number(id);

  const { movieQuery } = useMovie(movieId);

  if (movieQuery.isLoading || !movieQuery.data) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <MovieHeader
        poster={movieQuery.data?.poster || "hajs"}
        originalTitle={movieQuery.data?.originalTitle || ""}
        title={movieQuery.data?.title || ""}
      />
    </ScrollView>
  );
};

export default MovieDetailScreen;
