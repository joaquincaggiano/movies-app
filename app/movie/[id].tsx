import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native'

const MovieDetailScreen = () => {
  const { id } = useLocalSearchParams();

  
  return (
    <View>
      <Text>MovieDetailScreen</Text>
    </View>
  )
}

export default MovieDetailScreen