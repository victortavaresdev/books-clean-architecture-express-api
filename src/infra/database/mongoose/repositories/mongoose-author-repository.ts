import { Author } from "@core/entities/author";
import { Author as AuthorModel } from "../models";
import { AuthorRepository } from "@core/repositories";
import { MongooseAuthorMapper } from "../mappers/";

export class MongooseAuthorRepository implements AuthorRepository {
  async create(author: Author): Promise<void> {
    const newAuthor = MongooseAuthorMapper.toMongoose(author);
    await AuthorModel.create(newAuthor);
  }

  async findById(id: string): Promise<any> {
    const author = await AuthorModel.findById(id);
    if (!author) throw new Error("Resource not found");

    return author;
  }

  async findByEmail(email: string): Promise<any> {
    const author = await AuthorModel.findOne({ email });
    if (author) throw new Error("Email already registered");

    return author;
  }

  async update(id: string, author: Author): Promise<void> {
    const newAuthor = MongooseAuthorMapper.toMongoose(author);
    await AuthorModel.updateOne({ _id: id }, newAuthor);
  }

  async delete(id: string): Promise<void> {
    await AuthorModel.deleteOne({ _id: id });
  }
}
