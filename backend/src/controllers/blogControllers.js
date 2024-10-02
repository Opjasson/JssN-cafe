import { PrismaClient } from "@prisma/client";
import express from "express";

const blogClient = new PrismaClient().blog;

export const getAllBlog = async (req,res) => {
    try {
        const blog = await blogClient.findMany()
        res.status(200).send({
            msg : "Get data succesfully",
            data : blog
        })

    }catch(error){
        res.status(404).json({error : "Server internal error"})
    }
}


export const createBlog = async (req, res) => {
    try {
        const { judul, isi, image } = req.body;
        const blog = await blogClient.create({
            data: {
                judul: judul,
                isi: isi,
                image: image,
            },
        });
        res.status(200).send({
            msg : "Create blog succesfully",
            data : blog
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({error : "internal server"})
    }
};
