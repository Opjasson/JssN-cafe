import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
import cors from "cors";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import routerMenu from "./routers/menuRoute.js";
import routeBlog from "./routers/blogRoute.js";
import routeAuth from "./routers/authRoute.js";
import resvRoute from "./routers/resvRoute.js";

const menu = new PrismaClient().menu;
dotenv.config();
const app = express();
app.use(cors());




app.use(express.json())

app.use("/menu", routerMenu)
app.use("/blog", routeBlog)
app.use("/user", routeAuth)
app.use("/reservation", resvRoute)

const port = 3000;

app.listen(port, () => {
    console.log(`Running on port http://localhost:${port}`)
}).on("error", (err) => {
    console.error(err)
})
