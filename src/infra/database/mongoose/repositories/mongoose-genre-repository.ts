import { Genre } from "@core/entities/genre";
import { GenreRepository } from "@core/repositories";
import { MongooseGenreMapper } from "../mappers";
import { Genre as GenreModel } from "../models";

export class MongooseGenreRepository implements GenreRepository {
  async create(genre: Genre): Promise<void> {
    const newGenre = MongooseGenreMapper.toMongoose(genre);
    await GenreModel.create(newGenre);
  }

  async findById(id: string): Promise<any> {
    const genre = await GenreModel.findById(id);
    if (!genre) throw new Error("Resource not found");

    return genre;
  }

  async update(id: string, genre: Genre): Promise<void> {
    const newGenre = MongooseGenreMapper.toMongoose(genre);
    await GenreModel.updateOne({ _id: id }, newGenre);
  }

  async delete(id: string): Promise<void> {
    await GenreModel.deleteOne({ _id: id });
  }
}
