import React, { useEffect, useState } from "react";
import Form from "./elements/input/Form";
import Button from "./elements/button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Formlogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate()

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                "http://localhost:3000/user/login",
                {
                    username: username,
                    password: password,
                }
            );
            navigate("/");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.error)
            }
            
        }
    };

    const handleLogin = (username, password) => {
        setAccount([
            {
                username: username,
                password: password,
            },
        ]);
    };

    // useEffect(() => {
    //     account.map( async (a) => {
    //         const userData = data.find((acc) => acc.username === a.username)
    //         console.log(userData)
    //         const userPass = await argon.verify(userData.password,a.password)
    //         if(userData && userPass){
    //             console.log("Login berhasil")
    //         }else {
    //             console.log("Invalid password")
    //         }
    // })
    // },[account])

    return (
        <div>
            <form onSubmit={loginUser}>
            <p className="text-red-500">{msg}</p>
                <Form
                    label="username"
                    children="username"
                    placeholder="username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={(a) => setUsername(a.target.value)}
                />
                <Form
                    label="password"
                    children="password"
                    placeholder="*******"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(a) => setPassword(a.target.value)}
                />
                <Button
                    // onClick={() => handleLogin(username, password)}
                    type="submit"
                    variant="bg-blue-400 mt-3 hover:bg-blue-500 hover:text-white">
                    Login
                </Button>
            </form>
        </div>
    );
}

export default Formlogin;
