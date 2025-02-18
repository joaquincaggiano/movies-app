import { getCastByMovieIdAction } from "@/core/actions/cast/get-cast-by-movie0id.action";
import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ["movie", `${id}`],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const castQuery = useQuery({
    queryKey: ["cast", `${id}`],
    queryFn: () => getCastByMovieIdAction(id),
  });

  return { movieQuery, castQuery };
};
