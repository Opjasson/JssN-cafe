import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { response, request } from "express";
import express from "express";

const menuClient = new PrismaClient().menu;

export const getAllMenu = async (req, res) => {
    try {
        const allMenu = await menuClient.findMany()

        res.status(200).send({
            msg : "get all menu succesfully",
            data : allMenu
        })
    }catch (err){
        console.log(err)
        res.status(500).send({
            error : "Internal server error"
        })
    }
}



export const createMenu = async (req, res) => {
    try {
        const { name, description, price, image } = req.body;
        const menu = await menuClient.create({
            data: {
                name: name,
                description: description,
                price: price,
                image: image,
            },
        });
        res.status(201).send({
            msg : "Create menu succesfully",
            data : menu
        })
    } catch (e) {
        console.log(e);
        res.status(404).json({ error : "internal sserver error"})
    }
};
