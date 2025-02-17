export interface Movie {
  id: string;
  title: string;
  description: string;
  releaseDate: Date;
  rating: number;
  poster: string;
  backdrop: string;
}

export interface Options {
  page?: number;
  limit?: number;
}
