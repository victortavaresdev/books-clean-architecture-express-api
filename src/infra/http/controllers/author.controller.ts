import {
  CreateNewAuthor,
  DeleteAuthor,
  GetSingleAuthor,
  UpdateAuthor,
} from "@core/use-cases/author";
import { MongooseAuthorRepository } from "@infra/database/mongoose/repositories";
import { Request, Response } from "express";
import { HttpAuthorMapper } from "../mappers";

export class AuthorController {
  async create(req: Request, res: Response) {
    const authorRepo = new MongooseAuthorRepository();
    const createAuthor = new CreateNewAuthor(authorRepo);

    const { firstName, lastName, email } = req.body;
    const { author } = await createAuthor.execute({ firstName, lastName, email });

    res.status(201).json({
      author: {
        firstName: author.firstName,
        lastName: author.lastName,
        email: author.email.value,
      },
    });
  }

  async getById(req: Request, res: Response) {
    const authorRepo = new MongooseAuthorRepository();
    const getAuthor = new GetSingleAuthor(authorRepo);

    const { id } = req.params;
    const { author }: any = await getAuthor.execute({ id });

    res.status(200).json({ author: HttpAuthorMapper.toHTTP(author) });
  }

  async update(req: Request, res: Response) {
    const authorRepo = new MongooseAuthorRepository();
    const updateAuthor = new UpdateAuthor(authorRepo);

    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    const { author } = await updateAuthor.execute(id, { firstName, lastName, email });

    res.status(200).json({
      author: {
        firstName: author.firstName,
        lastName: author.lastName,
        email: author.email.value,
      },
    });
  }

  async delete(req: Request, res: Response) {
    const authorRepo = new MongooseAuthorRepository();
    const deleteAuthor = new DeleteAuthor(authorRepo);

    const { id } = req.params;
    await deleteAuthor.execute({ id });

    res.status(204).json({});
  }
}
