import { movieApi } from "@/core/api/movie-api";
import { Options } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const upcomingMoviesAction = async ({
  page = 1,
  limit = 10,
}: Options) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/upcoming", {
      params: {
        page,
        limit,
      },
    });

    const movies = data.results.map((movie) => MovieMapper.movieDBToMovie(movie));

    return movies;
  } catch (error) {
    throw new Error("Error fetching upcoming movies");
  }
};
