import { CompleteMovie, Movie } from "@/infrastructure/interfaces/movie.interface";
import { Result } from "@/infrastructure/interfaces/moviedb-response";
import { MovieDetail } from "../interfaces/movie-detail.interface";

export class MovieMapper {
  static movieDBToMovie(movieDB: Result): Movie {
    return {
      id: movieDB.id,
      title: movieDB.title,
      description: movieDB.overview,
      releaseDate: new Date(movieDB.release_date),
      rating: movieDB.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movieDB.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movieDB.backdrop_path}`,
    };
  }

  static movieDBToCompleteMovie(movieDB: MovieDetail): CompleteMovie {
    return {
      id: movieDB.id,
      title: movieDB.title,
      description: movieDB.overview,
      releaseDate: new Date(movieDB.release_date),
      rating: movieDB.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movieDB.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movieDB.backdrop_path}`,
      genres: movieDB.genres.map((genre) => genre.name),
      duration: movieDB.runtime,
      budget: movieDB.budget,
      originalTitle: movieDB.original_title,
      productionCompanies: movieDB.production_companies.map((company) => company.name),
    };
  }
}