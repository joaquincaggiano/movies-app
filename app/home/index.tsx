import MainSlideShow from "@/components/carousel/MainSlideShow";
import Loading from "@/components/ui/Loading";
import { useMovies } from "@/hooks/useMovies";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();
  const safeArea = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading || !nowPlayingQuery.data) {
    return <Loading />;
  }

  return (
    <View style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>
      <MainSlideShow movies={nowPlayingQuery.data} />
    </View>
  );
};

export default HomeScreen;
