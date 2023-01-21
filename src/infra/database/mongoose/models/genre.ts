import { Book } from "@core/entities/book";
import { randomUUID } from "crypto";
import { Schema, model } from "mongoose";

export interface GenreProps {
  _id: string;
  name: string;
  books: Book[];
}

const genreSchema: Schema = new Schema<GenreProps>(
  {
    _id: { type: String, default: () => randomUUID() },
    name: { type: String, required: true },
    books: [{ type: Schema.Types.UUID, ref: "Book" }],
  },
  {
    timestamps: true,
  },
);

const Genre = model("Genre", genreSchema);

export { Genre };
