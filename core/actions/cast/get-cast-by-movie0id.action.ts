import { movieApi } from "@/core/api/movie-api";
import { CastResponse } from "@/infrastructure/interfaces/cast.interface";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getCastByMovieIdAction = async (movieId: number) => {
  try {
    const { data } = await movieApi.get<CastResponse>(`/${movieId}/credits`);

    const castDetails = CastMapper.castResponseToCastDetail(data.cast);

    return castDetails;
  } catch (error) {
    throw new Error("Error fetching cast by movie id");
  }
};
