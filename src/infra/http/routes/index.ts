import { Router } from "express";
import { AuthorController, BookController, GenreController } from "../controllers";

const router = Router();

const genreController = new GenreController();
const authorController = new AuthorController();
const bookController = new BookController();

router.post("/genres/create", genreController.create);
router.get("/genres/:id", genreController.getById);
router.put("/genres/:id/update", genreController.update);
router.delete("/genres/:id/delete", genreController.delete);

router.post("/authors/create", authorController.create);
router.get("/authors/:id", authorController.getById);
router.patch("/authors/:id/update", authorController.update);
router.delete("/authors/:id/delete", authorController.delete);

router.post("/books/create", bookController.create);
router.get("/books/:id", bookController.getById);
router.get("/books", bookController.getAll);
router.patch("/books/:id/update", bookController.update);
router.delete("/books/:id/delete", bookController.delete);

export { router };
