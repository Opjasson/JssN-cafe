import React, { useState, useEffect } from "react";
import Button from "./elements/Button";
import axios from "axios";

function Pagemenu(props) {
    const [data, setData] = useState([]);
   

    
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/menu");
            const jsonData = await response.data.data;
            setData(jsonData);
            console.log(jsonData);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="relative left-[338px] w-3/4">
            <div className="h-96 bg-hero-pattern bg-cover bg-center"></div>
            <h1 className="border-2 border-black px-5 flex flex-col w-fit m-auto text-center text-4xl font-bold relative bottom-16 text-white">
                OUR{" "}
                <span className="text-6xl text-red-500 font-Courgette font-normal">
                    ALACARTE MENU
                </span>
            </h1>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {data.map((item) => (
                    <div className="w-64 border-2 shadow-xl">
                        <div className="h-48 w-[252px] overflow-hidden">
                            <img
                                className="h-60 object-cover"
                                src={item.image}
                                alt=""
                            />
                        </div>
                        <div className="p-3 flex flex-col gap-2">
                            <h1 className="text-xl font-bold capitalize underline">
                                {item.name}
                            </h1>
                            <p className="h-20">
                                {item.description.substring(0, 65) + " ..."}
                            </p>
                            <h2>
                                {item.price.toLocaleString("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                })}
                            </h2>
                            <Button
                               
                                variant="bg-blue-600 hover:bg-blue-700 hover:text-white">
                                Order
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

           
        </div>
    );
}

export default Pagemenu;
