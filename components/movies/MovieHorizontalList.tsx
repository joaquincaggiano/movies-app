import { Movie } from "@/infrastructure/interfaces/movie.interface";
import {
  View,
  Text,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import MoviePoster from "./MoviePoster";
import { useEffect, useRef } from "react";

interface Props {
  title: string;
  movies: Movie[];
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({ title, movies, loadNextPage }: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    loadNextPage && loadNextPage();
  };

  return (
    <View className="flex flex-col gap-2 mb-5">
      <Text className="text-2xl font-normal px-4">{title}</Text>

      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster={true} />
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
