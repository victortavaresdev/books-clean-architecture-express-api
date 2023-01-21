import { Book } from "@core/entities/book";
import { BooksRepository } from "@core/repositories";

interface GetManyBooksResponse {
  books: Book[];
}

export class GetManyBooks {
  constructor(private booksRepo: BooksRepository) {}

  async execute(): Promise<GetManyBooksResponse> {
    const books = await this.booksRepo.findMany();

    return {
      books,
    };
  }
}
