import { GenreRepository } from "@core/repositories";
import { NotFoundError } from "../errors/";

interface DeleteGenreRequest {
  id: string;
}

export class DeleteGenre {
  constructor(private genreRepo: GenreRepository) {}

  async execute(request: DeleteGenreRequest): Promise<void> {
    const { id } = request;

    const genre = await this.genreRepo.findById(id);
    if (!genre) throw new NotFoundError();

    await this.genreRepo.delete(id);
  }
}
