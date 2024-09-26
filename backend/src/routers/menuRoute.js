import express from 'express'
import { response, Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { createMenu, getAllMenu } from '../controllers/menuController.js'

const book = new PrismaClient().menu
const routerMenu = Router()

routerMenu.get('/',getAllMenu)
routerMenu.post('/create',createMenu)

export default routerMenu;