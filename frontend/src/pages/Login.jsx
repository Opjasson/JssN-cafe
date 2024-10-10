import React from "react";
import Button from "../components/elements/button/Button";
import Formlogin from "../components/Formlogin";

function Login() {
    return (
        <div className="w-3/5 flex justify-between m-auto mt-28  bg-slate-200 shadow-2xl rounded-lg overflow-hidden">
            <div className="flex flex-col gap-5 pt-10 pl-6">
                <h1 className="text-5xl font-Averia">LOGIN</h1>
                <p>Don't have an account? Create your account</p>
                <Formlogin />
            </div>
            <img className="h-96 w-96" src="../img/restaurant.jpg" alt="" />
        </div>
    );
}

export default Login;
