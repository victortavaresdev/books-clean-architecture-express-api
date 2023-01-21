import {
  CreateNewBook,
  DeleteBook,
  GetManyBooks,
  GetSingleBook,
  UpdateBook,
} from "@core/use-cases/book";
import { MongooseBookRepository } from "@infra/database/mongoose/repositories/";
import { Request, Response } from "express";
import { HttpBookMapper } from "../mappers/";

export class BookController {
  async create(req: Request, res: Response) {
    const bookRepo = new MongooseBookRepository();
    const createBook = new CreateNewBook(bookRepo);

    const { title, description } = req.body;
    const { book } = await createBook.execute({ title, description });

    res.status(201).json({
      book: {
        title: book.title,
        description: book.description,
      },
    });
  }

  async getById(req: Request, res: Response) {
    const bookRepo = new MongooseBookRepository();
    const getBook = new GetSingleBook(bookRepo);

    const { id } = req.params;
    const { book }: any = await getBook.execute({ id });

    res.status(200).json({ book: HttpBookMapper.toHTTP(book) });
  }

  async getAll(req: Request, res: Response) {
    const bookRepo = new MongooseBookRepository();
    const getAllBooks = new GetManyBooks(bookRepo);

    const { books } = await getAllBooks.execute();

    res.status(200).json({ books: books.map(HttpBookMapper.toHTTP) });
  }

  async update(req: Request, res: Response) {
    const bookRepo = new MongooseBookRepository();
    const updateBook = new UpdateBook(bookRepo);

    const { id } = req.params;
    const { title, description } = req.body;
    const { book } = await updateBook.execute(id, { title, description });

    res.status(200).json({
      book: {
        title: book.title,
        description: book.description,
      },
    });
  }

  async delete(req: Request, res: Response) {
    const bookRepo = new MongooseBookRepository();
    const deleteBook = new DeleteBook(bookRepo);

    const { id } = req.params;
    await deleteBook.execute({ id });

    res.status(204).json({});
  }
}
