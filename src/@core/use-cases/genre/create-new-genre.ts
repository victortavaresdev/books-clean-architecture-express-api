import { Genre } from "@core/entities/genre";
import { GenreRepository } from "@core/repositories/";

interface CreateNewGenreRequest {
  name: string;
}

interface CreateNewGenreResponse {
  genre: Genre;
}

export class CreateNewGenre {
  constructor(private genreRepo: GenreRepository) {}

  async execute(request: CreateNewGenreRequest): Promise<CreateNewGenreResponse> {
    const { name } = request;

    const genre = new Genre({ name });

    await this.genreRepo.create(genre);

    return {
      genre,
    };
  }
}
