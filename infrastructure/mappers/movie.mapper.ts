import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { Result } from "@/infrastructure/interfaces/moviedb-response";

export class MovieMapper {
  static movieDBToMovie(movieDB: Result): Movie {
    return {
      id: movieDB.id.toString(),
      title: movieDB.title,
      description: movieDB.overview,
      releaseDate: new Date(movieDB.release_date),
      rating: movieDB.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movieDB.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movieDB.backdrop_path}`,
    };
  }
}
