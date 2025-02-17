import { movieApi } from "@/core/api/movie-api";
import { MovieDetail } from "@/infrastructure/interfaces/movie-detail.interface";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieByIdAction = async (id: number): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDetail>(`/movie/${id}`);

    const completeMovie = MovieMapper.movieDBToCompleteMovie(data);

    return completeMovie;
  } catch (error) {
    throw new Error("Error fetching movie by id");
  }
};
