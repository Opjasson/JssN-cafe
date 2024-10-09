import { PrismaClient } from "@prisma/client";

const authClient = new PrismaClient().reservation;

export const GetResv = async (req,res) => {
    try {
       const getAll = await authClient.findMany()
       res.status(200).send({
            data : getAll,
            msg: "Get reservation succesfully"
       })

    } catch (error) {
        console.log(error)
        res.status(404).json({error : "server internal error"})
    }
}


export const CreateResv = async (req,res) => {
    try {
        const { name, menu, date, table } = req.body;
        const authUser = await authClient.create({
            data: {
                name: name,
                menu: menu,
                date: date,
                table: table
            },
        });
        res.status(200).send({
            data: authUser,
            msg: "Create user succesfully",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({ error: "Internal server error" });
    }
}