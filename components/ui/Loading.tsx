import { View, ActivityIndicator } from "react-native";

const Loading = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" color="purple" />
    </View>
  );
};

export default Loading;
