import { PrismaClient } from "@prisma/client";
import Route from "express"
import { CreateResv, GetResv } from "../controllers/ResvControllers.js";

const resvRoute = Route()

resvRoute.get("/",GetResv)
resvRoute.post("/create",CreateResv)

export default resvRoute;