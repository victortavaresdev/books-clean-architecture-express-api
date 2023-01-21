import { randomUUID } from "crypto";
import { Schema, model } from "mongoose";

interface BookProps {
  _id: string;
  title: string;
  description: string;
  authorId: string | undefined;
  genreId: string | undefined;
}

const bookSchema: Schema = new Schema<BookProps>(
  {
    _id: { type: String, default: () => randomUUID() },
    title: { type: String, required: true },
    description: { type: String, required: true },
    authorId: { type: Schema.Types.UUID, ref: "Author" },
    genreId: { type: Schema.Types.UUID, ref: "Genre" },
  },
  { timestamps: true },
);

const Book = model("Book", bookSchema);

export { Book };
