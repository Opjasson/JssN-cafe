import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
import cors from "cors";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import routerMenu from "./routers/menuRoute.js";
import routeBlog from "./routers/blogRoute.js";

const menu = new PrismaClient().menu;
dotenv.config();
const app = express();
app.use(cors());




app.use(express.json())

app.use("/menu", routerMenu)
app.use("/blog", routeBlog)

const port = 3000;

app.listen(port, () => {
    console.log(`Running on port http://localhost:${port}`)
}).on("error", (err) => {
    console.error(err)
})
