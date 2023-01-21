import { Genre } from "@core/entities/genre";
import { GenreRepository } from "@core/repositories";
import { NotFoundError } from "../errors/";

interface GetSingleGenreRequest {
  id: string;
}

interface GetSingleGenreResponse {
  genre: Genre;
}

export class GetSingleGenre {
  constructor(private genreRepo: GenreRepository) {}

  async execute(
    request: GetSingleGenreRequest
  ): Promise<GetSingleGenreResponse> {
    const { id } = request;

    const genre = await this.genreRepo.findById(id);
    if (!genre) throw new NotFoundError();

    return {
      genre,
    };
  }
}
