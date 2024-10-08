import React, { useEffect, useState } from "react";
import Form from "./elements/input/Form";
import Button from "./elements/button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Formregis() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    const createUser = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3000/user/regis",
                user
            );
            console.log(response);
            navigate('/login')
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        createUser();
    }, [user]);

    const handleRegis = (username, password) => {
        setUser({
            username: username,
            password: password,
        });
        console.log(user);
    };
    return (
        <div>
            <form method="post">
                <Form
                    label="username"
                    children="username"
                    placeholder="username"
                    type="text"
                    name="username"
                    onChange={(a) => setUsername(a.target.value)}
                />
                <Form
                    label="password"
                    children="password"
                    placeholder="*******"
                    type="password"
                    name="password"
                    onChange={(a) => setPassword(a.target.value)}
                />
                <Button
                    onClick={() => handleRegis(username, password)}
                    variant="bg-blue-400 mt-3 hover:bg-blue-500 hover:text-white">
                    Kirim
                </Button>
            </form>
        </div>
    );
}

export default Formregis;
