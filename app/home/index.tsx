import { useMovies } from '@/presentation/hooks/useMovies';
import { View, Text } from 'react-native'

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen