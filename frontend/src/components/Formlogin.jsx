import React from "react";
import Form from "./elements/input/Form";
import Button from "./elements/button/Button";

function Formlogin() {
    return (
        <div>
            <form action="">
                <Form label="username" children="username" placeholder="username" type="username" name="username" />
                <Form label="password" children="password" placeholder="*******" type="password" name="password"/>
                <Button variant="bg-blue-400">Kirim</Button>
            </form>
        </div>
    );
}

export default Formlogin;
