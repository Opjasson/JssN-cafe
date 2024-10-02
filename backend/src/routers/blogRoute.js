import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { createBlog, getAllBlog } from "../controllers/blogControllers.js";

const blog = new PrismaClient().blog;

const routeBlog = Router();

routeBlog.get("/", getAllBlog)
routeBlog.post("/create", createBlog);

export default routeBlog;
