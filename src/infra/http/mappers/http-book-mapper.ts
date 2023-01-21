import { Book } from "@core/entities/book";

export class HttpBookMapper {
  static toHTTP(book: Book) {
    return {
      id: book.id,
      title: book.title,
      description: book.description,
      createdAt: book.createdAt,
      updatedAt: book.updatedAt,
    };
  }
}
