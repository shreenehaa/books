import express from "express";
import booksController from "../controller/books.controller.js";
const router = express.Router();
router
  .route("/")
  .get(booksController.getAllBooks)
  .post(booksController.insertBook);
router
  .route("/:id")
  .get(booksController.getBookById)
  .delete(booksController.deleteBookById)
  .put(booksController.updateBookById)
  .put(booksController.updateBookById);
export default router;
