import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./elements/Button";

function Navbar() {
    return (
        <nav className="bg-[#F9EFEF] inline-block w-1/4 h-screen fixed p-10 ">
            <img className="h-10 border" src="../img/logo.png" alt="" />
            <div className="flex flex-col gap-3 text-xl mb-8 mt-5">
                <NavLink to={"/"}>HOME</NavLink>
                <NavLink to={"/menu"}>MENU</NavLink>
                <NavLink>IN ROOM DINNING</NavLink>
                <NavLink>GALLERY</NavLink>
                <NavLink>WHERE TO FIND US</NavLink>
                <NavLink>PROMO</NavLink>
            </div>
            <Link className="px-5 py-3 border-2 border-slate-400 hover:bg-slate-400 hover:text-white">
                RESERVATIONS
            </Link>

            <div className="w-52 text-xs mt-9">
                <div className="flex items-center">
                    <img
                        className="h-10"
                        src="../img/HomeLoc.png"
                        alt="Location"
                    />
                    <h1 className="text-xl font-bold">LOCATION</h1>
                </div>
                <p>
                    JALAN MEJASEM BARU 4 NO.45 KABUPATEN TEGAL,KECAMATAN KRAMAT
                </p>
            </div>
        </nav>
    );
}

export default Navbar;
