import Loading from "@/components/Loading";
import { useMovies } from "@/presentation/hooks/useMovies";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();
  const safeArea = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading) {
    return <Loading />;
  }

  return (
    <View style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>
    </View>
  );
};

export default HomeScreen;
