import { Schema, model } from "mongoose";
import { randomUUID } from "crypto";
import { Book } from "@core/entities/book";

interface AuthorProps {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  books: Book[];
}

const authorSchema: Schema = new Schema<AuthorProps>(
  {
    _id: { type: String, default: () => randomUUID() },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    books: [{ type: Schema.Types.UUID, ref: "Book" }],
  },
  { timestamps: true },
);

const Author = model("Author", authorSchema);

export { Author };
