import MainSlideShow from "@/components/movies/MainSlideShow";
import MovieHorizontalList from "@/components/movies/MovieHorizontalList";
import Loading from "@/components/ui/Loading";
import { useMovies } from "@/hooks/useMovies";
import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
    isLoading,
  } = useMovies();
  const safeArea = useSafeAreaInsets();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <View
        style={{ paddingTop: safeArea.top }}
        className="flex flex-col gap-5 pb-10"
      >
        <View>
          <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>
          {/* Now Playing */}
          <MainSlideShow movies={nowPlayingQuery.data!} />
        </View>

        {/* Popular */}
        <MovieHorizontalList title="Populares" movies={popularQuery.data!} />

        {/* Top Rated */}
        <MovieHorizontalList
          title="Mejor Calificadas"
          movies={topRatedQuery.data!}
        />

        {/* Upcoming */}
        <MovieHorizontalList
          title="Próximos Estrenos"
          movies={upcomingQuery.data!}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
