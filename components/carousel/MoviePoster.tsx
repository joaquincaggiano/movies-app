import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { View, Text, Pressable, Image } from "react-native";

interface Props {
  id: string;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}

const MoviePoster = ({ id, poster, smallPoster = false, className }: Props) => {
  return (
    <Pressable className={`active:opacity-80 px-2 ${className}`}>
      <Image
        source={{ uri: poster }}
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
        resizeMode="cover"
        className="rounded-2xl shadow-lg w-full h-full"
      />
    </Pressable>
  );
};

export default MoviePoster;
