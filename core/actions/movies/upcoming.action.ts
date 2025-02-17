import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const upcomingMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/upcoming");

    const movies = data.results.map((movie) => MovieMapper.movieDBToMovie(movie));

    return movies;
  } catch (error) {
    throw new Error("Error fetching upcoming movies");
  }
};
