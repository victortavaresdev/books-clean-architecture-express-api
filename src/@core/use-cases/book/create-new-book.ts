import { Book } from "@core/entities/book";
import { BooksRepository } from "@core/repositories/";

interface CreateNewBookRequest {
  title: string;
  description: string;
}

interface CreateNewBookResponse {
  book: Book;
}

export class CreateNewBook {
  constructor(private booksRepo: BooksRepository) {}

  async execute(request: CreateNewBookRequest): Promise<CreateNewBookResponse> {
    const { title, description } = request;
    const book = new Book({ title, description });

    await this.booksRepo.create(book);

    return {
      book,
    };
  }
}
