import React from "react";
import Slider from "./elements/slider/Slider";
import Button from "./elements/button/Button";

function PageReserv() {
    return (
        <div className="bg-reservation-pattern h-screen bg-cover bg-center shadow-2xl ">
            <div className="w-1/2 bg-white h-full m-auto relative flex flex-col">
                <Slider
                    variant="h-56 w-full object-cover brightness-75 "
                    src="../img/room1.jpg"
                />
                <div className="bg-red-800 text-white w-full py-2 text-xl font-Averia text-center flex justify-between px-5 absolute">
                    <h1>JssN-Cafe - Tegal Jawa tengah</h1>
                    <a className="hover:text-black" href="/"><p>&#8592;Back</p></a>
                </div>

                <form className="px-5 mt-3 overflow-scroll pb-3">
                    <div class="mb-2 ">
                        <label
                            for="base-input"
                            class="block text-lg font-semibold font-Courgette text-gray-900 dark:text-white">
                            Nama Pemesan
                        </label>
                        <input
                            type="text"
                            id="base-input"
                            placeholder="Jhony dan keluarga(+ Jumlah orang)"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>


                    <div class="mb-2 ">
                        <label
                            for="message"
                            class="block text-lg font-semibold font-Courgette text-gray-900 dark:text-white">
                            Your message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Leave a comment..."></textarea>
                    </div>

                    <div class="mb-2 ">
                        <label
                            for="base-input"
                            class="block text-lg font-semibold font-Courgette text-gray-900 dark:text-white">
                            Date
                        </label>
                        <input
                            type="date"
                            id="base-input"
                            placeholder="Jhony dan keluarga(+ Jumlah orang)"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>

                    <div class="mb-5 ">
                        <label
                            for="base-input"
                            class="block text-lg font-semibold font-Courgette text-gray-900 dark:text-white">
                            Pilih Nomor Meja
                        </label>
                        <input
                            type="number"
                            min={1}
                            max={20}
                            id="base-input"
                            placeholder="Jhony dan keluarga(+ Jumlah orang)"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 ml- dark:focus:border-blue-500"
                        />
                    </div>
                    <Button variant="px-20 ml-56 bg-red-800 hover:bg-red-900 hover:text-white">Kirim</Button>
                </form>
            </div>
        </div>
    );
}

export default PageReserv;
