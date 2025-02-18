import { Cast, CastDetail } from "@/infrastructure/interfaces/cast.interface";

export class CastMapper {
  static castResponseToCastDetail(cast: Cast[]): CastDetail[] {
    const castDetails = cast.map((cast) => ({
      id: cast.id,
      name: cast.name.split(" ")[0],
      lastName: cast.name.split(" ")[1],
      character: cast.character ?? "No character",
      avatar: cast.profile_path
        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
        : "https://i.stack.imgur.com/l60Hf.png", // esto en caso de no tener imagen
    }));

    return castDetails;
  }
}
