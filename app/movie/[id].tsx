import Loading from '@/components/ui/Loading';
import { useMovie } from '@/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, ScrollView } from 'react-native'

const MovieDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const movieId = Number(id);

  const { movieQuery } = useMovie(movieId);

  if (movieQuery.isLoading) {
    return <Loading />;
  }

  return (
   <ScrollView>
    
   </ScrollView>
  )
}

export default MovieDetailScreen