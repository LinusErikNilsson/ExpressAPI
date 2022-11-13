import express from "express";
require("express-async-errors");
import postRouter from "./resources/posts/post.router";

const app = express();

app.use(express.json());

app.use("/api/posts", postRouter);

app.listen(3000, () => console.log("Running on: http://localhost:3000"));
