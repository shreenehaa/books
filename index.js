import express from "express";

import { Book } from "./model/books.js";
import { sequelize } from "./config.js";
import booksRouter from "./routes/books.routes.js";
import userRouter from "./routes/user-routes.js";
const app = express();
app.use(express.json());

const PORT = 4000;

try {
  await sequelize.authenticate();
  await sequelize.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
// const book1 = await Book.create({
//   title: "romeo juliet",
//   coverImage:
//     "https://cdn.kobo.com/book-images/e23f657a-4d9d-462b-83dd-17c257407d11/353/569/90/False/romeo-and-juliet-by-william-shakespeare.jpg",
//   author: "willium shakesphere",
//   genre: "Tragedy",
//   language: "english",
//   price: 1000,
//   rating: 9,
// });
// app.get("/", function (request, response) {
//   response.send("🙋‍♂️, 🌏 🎊✨🤩");
// });

app.use("/books", booksRouter);
app.use("/users", userRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
