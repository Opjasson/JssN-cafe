import React from "react";
import Slider from "./elements/slider/Slider";

function Pagehome() {
    return (
        <div className="relative left-[338px] w-3/4">
            <Slider variant="w-full" src="../img/pamflet2.jpg" />
            <div className="flex flex-col items-center text-xl font-bold mt-5 gap-5">
                <h1 className="w-96 text-center font-Averia font-light">
                    INTERNTIONAL CULINARY DELIGHT OFFERS TANTALIZING TASTE
                </h1>
                <h2 className="font-Courgette text-3xl mt-3 mb-10 tracking-widest text-red-500">
                    WELCOME TO CAFE SPECTACULLER
                </h2>

                <video src="../vidio/vidio.mp4" controls autoPlay>
                    Your browser does not support
                </video>

                <div className="w-3/4 flex relative mt-10 mb-7">
                    <img
                        className="h-[38rem]"
                        src="../img/iklan1.jpg"
                        alt="Ourstory"
                    />
                    <blockquote className="bg-slate-200 rounded-xl border w-[26rem] p-7 h-fit absolute left-80 top-28">
                        <h1 className="text-5xl font-Averia">Discover</h1>
                        <h2 className="bg-red-400 w-fit pr-10 pl-2 rounded">
                            Our Story
                        </h2>
                        <p className="text-sm font-thin mt-7">
                            Have you ever imagined having a quality time with
                            your relatives or family within an artistic interior
                            designed place where you could taste the food from
                            all-region in the world? You should have not been to
                            every part of the world to taste the cuisine of
                            Western, American, Chinese, Japanese, Spanish,
                            Indian or Indonesian in once. Gran Melia Jakarta
                            provides Café Gran Via to make your dream come true.
                            The word “Gran” means luxurious and the word “Via”
                            means through. It represents a restaurant that we
                            can go through to taste the luxurious cuisines
                            around the world.{" "}
                        </p>
                    </blockquote>
                </div>
            </div>

            <div className="text-center relative mb-16 flex">
                <div className="border-2 h-96 overflow-hidden ">
                    <Slider src="../img/restaurant.jpg" />
                </div>
                <h1 className="text-3xl font-Averia text-white w-96 border-2 border-black m-auto absolute top-80 left-[316px]">
                    DELIGHTFUL{" "}
                    <span className="text-red-500 font-Courgette text-6xl">
                        EXPERIENCE
                    </span>
                </h1>
            </div>
            <div className="flex flex-col text-center text-xl">
                <h1 className="font-Averia underline text-2xl">
                    SIGNATURE DISHES
                </h1>
                <ul className="w-[29rem] m-auto text-left list-decimal mt-5 font-medium flex flex-col gap-3">
                    <li>
                        <h1>Nasi goreng lezatos</h1>
                        <p className="text-xs font-thin">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci quisquam, similique placeat
                            laudantium illum dolorem.
                        </p>
                    </li>
                    <li>
                        <h1>Nasi goreng lezatos</h1>
                        <p className="text-xs font-thin">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci quisquam, similique placeat
                            laudantium illum dolorem.
                        </p>
                    </li>
                    <li>
                        <h1>Nasi goreng lezatos</h1>
                        <p className="text-xs font-thin">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci quisquam, similique placeat
                            laudantium illum dolorem.
                        </p>
                    </li>
                </ul>
            </div>

            <div className="flex flex-wrap justify-center mt-5 mb-8 gap-3">
                <div>
                    <img className="h-[229px]" src="../img/food1.jpeg" alt="food1" />
                    <h1 className="text-xl font-bold p-3">Sate Ayam Special</h1>
                </div>
                <div>
                    <img src="../img/food2.jpeg" alt="food2" />
                    <h1 className="text-xl font-bold p-3">Nasi Goreng Rawon</h1>
                </div>
                <div className="w-[14rem] overflow-hidden">
                    <img className="h-[229px]" src="../img/food3.jpeg" alt="food3" />
                    <h1 className="text-xl font-bold p-3">Seblak Bakso</h1>
                </div>
                <div className="w-[14rem] overflow-hidden">
                    <img className="h-[229px]" src="../img/food4.jpeg" alt="food4" />
                    <h1 className="text-xl font-bold p-3">Sauto Putih</h1>
                </div>
            </div>
        </div>
    );
}

export default Pagehome;
