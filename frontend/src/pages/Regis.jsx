import React from "react";
import Formregis from "../components/Formregis";

function Regis() {
    return (
        <div className="w-3/5 border-2 flex justify-between m-auto mt-28">
            <div className="flex flex-col gap-5 pt-10 pl-6">
                <h1 className="text-5xl font-Averia">REGISTRASI</h1>
                <p>Don't have an account? Create your account</p>
                <Formregis />
            </div>
            <img className="h-96 w-96" src="../img/restaurant.jpg" alt="" />
        </div>
    );
}

export default Regis;
