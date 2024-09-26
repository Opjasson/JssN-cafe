import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
import cors from "cors";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import routerMenu from "./routers/menuRoute.js";

const menu = new PrismaClient().menu;
dotenv.config();
const app = express();
app.use(cors());


const PORT = process.env.PORT

app.use(express.json())

app.use("/menu", routerMenu)

app.listen(3000, () => {
    console.log(`Running on port http://localhost:${PORT}`)
}).on("error", (err) => {
    console.error(err)
})
