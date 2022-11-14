import express from "express";
import { createNewPost, getAllPosts, removePostById, updatePostById } from "./post.controller";

const postRouter = express.Router();
postRouter.get("/", getAllPosts);
postRouter.post("/", createNewPost);
postRouter.delete("/id/:id", removePostById);
postRouter.put("/id/:id", updatePostById)

export default postRouter;