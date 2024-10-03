import bcrypt, { hash } from "bcrypt";
import { PrismaClient } from "@prisma/client";

const authClient = new PrismaClient().user;

export const getUserdata = async (req, res) => {
    try {
        const allDataUser = await authClient.findMany()
        res.status(200).send({
            data : allDataUser,
            msg : "Get data succesfully"
        })
    }catch(error) {
        console.log(error)
        res.status(404).json({error : "Server internal error"})
    }
}


export const regisAccount = async (req, res) => {
    try {
        const { username, password } = req.body;
        const authUser = await authClient.create({
            data: {
                username: username,
                password: await bcrypt.hash(password, 10),
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
};

export const loginAuth = async (req, res) => {
    const { username, password } = req.body;

    try {
        const authUser = await authClient.findFirst({
            where: {
                username: username,
            },
        });

        if (!authUser) {
            return res
                .status(401)
                .json({ error: "Invalid username or password" });
        }

        const passwordMatch = await bcrypt.compare(password, authUser.password);

        if (!passwordMatch) {
            return res
                .status(404)
                .json({ error: "Invalid username or password" });
        }

        res.status(200).json({ message: "Login succesfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
