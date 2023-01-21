import { Book } from "@core/entities/book";
import { Book as BookModel } from "../models";
import { BooksRepository } from "@core/repositories";
import { MongooseBookMapper } from "../mappers/";

export class MongooseBookRepository implements BooksRepository {
  async create(book: Book): Promise<void> {
    const newBook = MongooseBookMapper.toMongoose(book);
    const data = {
      genreId: "28c17175-81f4-4b7a-96fd-28d17e071083",
      authorId: "bffd38fa-5f1d-402b-a12f-365b5b76a377",
      ...newBook,
    };
    await BookModel.create(data);
  }

  async findById(id: string): Promise<any> {
    const book = await BookModel.findById(id);
    if (!book) throw new Error("Resource not found");

    return book;
  }

  async findMany(): Promise<any> {
    return await BookModel.find();
  }

  async update(id: string, book: Book): Promise<void> {
    const newBook = MongooseBookMapper.toMongoose(book);
    await BookModel.updateOne({ _id: id }, newBook);
  }

  async delete(id: string): Promise<void> {
    await BookModel.deleteOne({ _id: id });
  }
}
