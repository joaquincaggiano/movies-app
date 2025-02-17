import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/now_playing");

    const movies = data.results.map((movie) => MovieMapper.movieDBToMovie(movie));

    return movies;
  } catch (error) {
    throw new Error("Error fetching now playing movies");
  }
};
