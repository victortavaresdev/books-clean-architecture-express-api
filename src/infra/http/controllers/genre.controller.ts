import { CreateNewGenre, DeleteGenre, GetSingleGenre, UpdateGenre } from "@core/use-cases/genre";
import { NextFunction, Request, Response } from "express";
import { MongooseGenreRepository } from "../../database/mongoose/repositories";
import { HttpGenreMapper } from "../mappers";

export class GenreController {
  async create(req: Request, res: Response, next: NextFunction) {
    const genreRepo = new MongooseGenreRepository();
    const createGenre = new CreateNewGenre(genreRepo);

    const { name } = req.body;

    const { genre } = await createGenre.execute({ name });
    res.status(201).json({ name: genre.name });
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    const genreRepo = new MongooseGenreRepository();
    const getGenre = new GetSingleGenre(genreRepo);

    const { id } = req.params;
    const { genre } = await getGenre.execute({ id });

    res.status(200).json({ genre: HttpGenreMapper.toHTTP(genre) });
  }

  async update(req: Request, res: Response) {
    const genreRepo = new MongooseGenreRepository();
    const updateGenre = new UpdateGenre(genreRepo);

    const { id } = req.params;
    const { name } = req.body;
    const { genre } = await updateGenre.execute(id, { name });

    res.status(200).json({ name: genre.name });
  }

  async delete(req: Request, res: Response) {
    const genreRepo = new MongooseGenreRepository();
    const deleteGenre = new DeleteGenre(genreRepo);

    const { id } = req.params;
    await deleteGenre.execute({ id });

    res.status(204).json({});
  }
}
