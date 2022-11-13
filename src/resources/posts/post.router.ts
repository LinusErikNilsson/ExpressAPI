import express from "express";
import { createNewPost, getAllPosts, getPostById, removeAllPosts, removePostById, updatePostById } from "./post.controller";

const postRouter = express.Router();
postRouter.get("/", getAllPosts);
postRouter.get("/id/:id", getPostById)
postRouter.post("/", createNewPost);
postRouter.delete("/id/:id", removePostById);
postRouter.delete("/", removeAllPosts)
postRouter.put("/id/:id", updatePostById)

export default postRouter;