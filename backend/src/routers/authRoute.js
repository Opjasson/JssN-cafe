import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import Route from "express";
import { getUserdata, loginAuth, regisAccount } from "../controllers/authControllers.js";

const userClient = new PrismaClient().user;

const routeAuth = Route();

routeAuth.get("/", getUserdata)
routeAuth.post("/regis", regisAccount);
routeAuth.post("/login", loginAuth)

export default routeAuth;
