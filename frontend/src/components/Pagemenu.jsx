import React from "react";
import Button from "./elements/Button";

function Pagemenu() {
    return (
        <div className="relative left-[338px] w-3/4">
            <div className="h-96 bg-hero-pattern bg-cover bg-center"></div>
            <h1 className="border-2 border-black px-5 flex flex-col w-fit m-auto text-center text-4xl font-bold relative bottom-16 text-white">
                OUR{" "}
                <span className="text-6xl text-red-500 font-Courgette font-normal">
                    ALACARTE MENU
                </span>
            </h1>

            <div>
                <div className="w-72 border-2">
                    <img src="../img/food1.jpeg" alt="" />
                    <div className="p-3 flex flex-col gap-2">
                        <h1>sate ayam special</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur maiores laudantium ratione, officia aut sed!</p>
                        <h2>PRICE $200</h2>
                        <Button variant="bg-blue-600 hover:bg-blue-700 hover:text-white">Order</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pagemenu;
