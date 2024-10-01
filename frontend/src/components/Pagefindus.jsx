import React from "react";

function Pagefindus() {
    return (
        <div className="relative left-[338px] w-3/4">
            <div className="h-96 bg-room-pattern2 bg-cover bg-center"></div>
            <h1 className="border-2 border-black px-5 flex flex-col w-fit m-auto text-center text-4xl font-bold relative bottom-16 text-white">
                WHERE{" "}
                <span className="text-6xl text-red-500 font-Courgette font-normal">
                    TO FIND US
                </span>
            </h1>

            <div className="flex flex-col w-2/3  m-auto gap-7 text-center">
                <h1 className="text-4xl font-Averia font-bold">
                    International culinary delight offers tantalizing tastes
                </h1>
                <h2 className="text-2xl font-Courgette font-semibold text-green-600 tracking-widest">
                    WELCOME TO JSSN-CAFE
                </h2>
            </div>

            <div className=" flex relative mt-16 pl-4">
                <iframe
                    className="h-[30rem] w-[30rem]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31688.97276685826!2d109.14060030347017!3d-6.876031902481128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb823276879f5%3A0x38b6d86273adb8c9!2sMejasem%20Tim.%2C%20Kec.%20Kramat%2C%20Kabupaten%20Tegal%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1727766542640!5m2!1sid!2sid"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <div className="flex flex-col w-72  absolute bg-purple-950 text-2xl rounded left-96 top-7 pl-5 py-5 text-white">
                        <h1 className="text-6xl font-bold">JssN-</h1>
                        <h2 className="text-4xl font-Courgette">Cafe</h2>
                        <h3 className="text-sm">Jalan pala 2 timur</h3>
                        <h3 className="text-sm">Kabupaten tegal, kecamatan Kramat, Indonesia.</h3>
                        <p className="text-sm">+6287895031524</p>
                    </div>
            </div>

            <div className="flex justify-center mt-10">
                <div className="w-72 border-2 text-center">
                    <h1>OPENING HOURS</h1>
                    <table>
                        <tr>
                            <th className="w-40">Open</th>
                            <th>06.00 AM</th>
                        </tr>
                        <tr>
                            <th className="w-40">Close</th>
                            <th>09.00 PM</th>
                        </tr>
                        <tr>
                            <th className="w-40">Last Order</th>
                            <th>09.00 PM</th>
                        </tr>
                    </table>
                </div>

                <div className="w-72 border-2 text-center">
                    <h1>OPENING HOURS</h1>
                    <table>
                        <tr>
                            <th className="w-40">Open</th>
                            <th>06.00 AM</th>
                        </tr>
                        <tr>
                            <th className="w-40">Close</th>
                            <th>09.00 PM</th>
                        </tr>
                        <tr>
                            <th className="w-40">Last Order</th>
                            <th>09.00 PM</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Pagefindus;
