import axios from "axios";
import React, { useEffect, useState } from "react";

function Pagepromo() {
    const [data, setData] = useState([]);

    // const fetchBlog = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:3000/blog");
    //         const jsonBlog = await response.data.data;
    //         setData(jsonBlog);
    //         console.log(jsonBlog);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     fetchBlog();
    // }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/blog");
            const jsonData = await response.data.data;
            setData(jsonData);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [data.length]);

    console.log(data);
    return (
        <div className="relative left-[338px] w-3/4">
            <div className="h-96 bg-promo-pattern bg-cover bg-top"></div>
            <h1 className="drop-shadow-2xl border-2 border-black px-5 flex flex-col w-fit m-auto text-center text-4xl font-bold relative bottom-16 text-white">
                LATEST{" "}
                <span className="text-6xl text-red-500 font-Courgette font-normal">
                    NEWS
                </span>
            </h1>

            <div className="border-2">
                {data.map((item) => (
                    <div className="text-3xl text-black" key={item.id}>
                        <div className="">
                            <h1>{item.judul}</h1>
                            <p>
                                {item.publish} | JssN-Cafe |{" "}
                                <a href="">Read more</a>
                            </p>
                        </div>

                        <img className="h-96" src={item.image} alt="" />
                        <p>{item.isi}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Pagepromo;
