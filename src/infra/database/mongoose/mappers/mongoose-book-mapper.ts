import { Book } from "@core/entities/book";

export class MongooseBookMapper {
  static toMongoose(book: Book) {
    return {
      id: book.id,
      title: book.title,
      description: book.description,
      createdAt: book.createdAt,
      updatedAt: book.updatedAt,
    };
  }
}
