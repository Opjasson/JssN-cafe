import React from "react";

function Pageroom() {
    return (
        <div className="relative left-[338px] w-3/4">
            <div className="h-96 bg-room-pattern bg-cover bg-center"></div>
            <h1 className=" border-2 border-black px-5 flex flex-col w-fit m-auto text-center text-4xl font-bold relative bottom-16 text-white">
                IN{" "}
                <span className="text-6xl text-red-500 font-Courgette font-normal">
                    ROOM DINNING
                </span>
            </h1>

            <div className=" w-2/3 m-auto text-center flex flex-col gap-6">
                <h1 className="underline text-3xl font-Averia">DOWNLOAD OUR MENU</h1>
                <p className="text-sm w-">Delight in the convenient hotel and indulge in delectable In-room Dining during your stay.
                Get the most mouthwatering food to eat without ever leaving your hotel room from breakfast till late evening.</p>

                <div className="flex justify-between">
                    <div className="text-xl capitalize font-medium ">
                        <h1>IN ROOM DINING MENU</h1>
                        <a className="text-sm text-red-500" href="">Click here to view menu</a>
                    </div>
                    <div className="text-xl capitalize font-medium ">
                        <h1>POOL MENU</h1>
                        <a className="text-sm text-red-500" href="">Click here to view menu</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pageroom;
