import React from "react";
import Form from "./elements/input/Form";
import Button from "./elements/button/Button";

function Formlogin() {
    return (
        <div>
            <form action="/login" method="POST">
                <Form label="username" children="username" placeholder="username" type="username" name="username" />
                <Form label="password" children="password" placeholder="*******" type="password" name="password"/>
                <Button type="submit" variant="bg-blue-400 mt-3 hover:bg-blue-500 hover:text-white">Kirim</Button>
            </form>
        </div>
    );
}

export default Formlogin;
