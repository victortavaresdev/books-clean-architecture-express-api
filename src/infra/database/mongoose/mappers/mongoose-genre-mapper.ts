import { Genre } from "@core/entities/genre";

export class MongooseGenreMapper {
  static toMongoose(genre: Genre) {
    return {
      id: genre.id,
      name: genre.name,
      createdAt: genre.createdAt,
      updatedAt: genre.updatedAt,
    };
  }
}
